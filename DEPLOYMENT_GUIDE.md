# Portfolio Deployment Guide

This documents exactly how the portfolio is hosted on a GCP VM behind Caddy, so the setup can be reproduced.

---

## Architecture Overview

```
Internet
   │
   ▼
salmanranjha.me / www.salmanranjha.me   (GoDaddy DNS, A records → 34.17.37.87)
   │
   ▼
GCP VM  34.17.37.87  (europe-west4, e2-medium)
   │
   ├── Port 80  ─┐
   └── Port 443 ─┘─▶  Caddy  (loadedout-frontend-1 container)
                          │
                          ▼  reverse proxy (internal Docker network: lifeplan-net)
                     portfolio-web container  (nginx:alpine, port 80 inside Docker)
                          │
                          ▼
                     Static files: index.html, style.css, script.js, etc.

Also accessible directly at:  http://34.17.37.87:8090  (no TLS)
```

---

## Components

### 1. Portfolio Container (`portfolio-web`)

Defined by `Dockerfile` and `docker-compose.yml` in this repo.

**Dockerfile** — builds an nginx:alpine image with the static site files baked in:
```dockerfile
FROM nginx:alpine
COPY index.html style.css script.js skills-modal.js animated-icons.html /usr/share/nginx/html/
COPY image /usr/share/nginx/html/image
EXPOSE 80
```

**docker-compose.yml** — runs the container on port 8090 of the host:
```yaml
services:
  web:
    build: .
    container_name: portfolio-web
    ports:
      - "8090:80"
    restart: unless-stopped
```

The container name `portfolio-web` is important — Caddy addresses it by this name over the shared Docker network.

### 2. Caddy Reverse Proxy

Caddy lives in the `loadedout-frontend-1` container (part of the `loaded-out` / Life-360 project at `/home/pehlacloud/projects/loaded-out`). It owns ports 80 and 443 on the VM and handles TLS certificates automatically via Let's Encrypt.

The relevant section of its `Caddyfile` (`/home/pehlacloud/projects/loaded-out/infra/Caddyfile`):

```caddyfile
www.salmanranjha.me {
    reverse_proxy portfolio-web:80
}

http://salmanranjha.me {
    redir https://www.salmanranjha.me{uri} permanent
}
```

- `www.salmanranjha.me` — canonical domain, Caddy proxies to the `portfolio-web` container and holds the TLS cert.
- `http://salmanranjha.me` — bare domain over HTTP redirects to `https://www.salmanranjha.me`. No cert needed for this rule.

Both containers must be on the same Docker network (`lifeplan-net`) for the hostname `portfolio-web` to resolve inside Caddy.

### 3. Docker Network

The shared network is `lifeplan-net` (created by the loaded-out project). The portfolio container joins it via `docker-compose.yml`:

```yaml
networks:
  default:
    name: lifeplan-net
    external: true
```

> If replicating from scratch, create the network first: `docker network create lifeplan-net`

### 4. DNS (GoDaddy)

Two A records in GoDaddy DNS, both pointing to the VM's external IP:

| Type | Name | Value |
|---|---|---|
| A | `@` (bare domain) | `34.17.37.87` |
| A | `www` | `34.17.37.87` |

No CNAME, no forwarding rules. Plain A records only.

### 5. GCP Firewall

The VM needs the `http-server` and `https-server` network tags, which open ports 80 and 443. There is also a custom rule `allow-app-ports` that opens port `8090` for direct access:

```bash
gcloud compute firewall-rules create allow-portfolio \
  --allow tcp:8090 \
  --source-ranges 0.0.0.0/0
```

---

## Deploying / Updating

### Update the static site content

```bash
# SSH into the VM
gcloud compute ssh pehlacloud@<INSTANCE_NAME> --zone europe-west4-b

# Pull latest code
cd /home/pehlacloud/projects/portfolio
git pull

# Rebuild and restart the container (only affects portfolio-web)
docker compose build
docker compose up -d
```

### Update the Caddy config (domain / routing changes)

The Caddyfile is baked into the `loadedout-frontend-1` image, so changes require a rebuild:

```bash
cd /home/pehlacloud/projects/loaded-out/infra

# Edit infra/Caddyfile, then:
docker compose -p loadedout -f docker-compose.prod.yml build frontend
docker compose -p loadedout -f docker-compose.prod.yml up -d --no-deps frontend
```

---

## Replicating on a New VM

1. **Provision a VM** (GCP, AWS, any cloud). Open ports 22, 80, 443, 8090.

2. **Install Docker:**
   ```bash
   curl -fsSL https://get.docker.com | sh
   sudo usermod -aG docker $USER
   ```

3. **Create the shared network:**
   ```bash
   docker network create lifeplan-net
   ```

4. **Clone and start the portfolio:**
   ```bash
   git clone git@github.com:salmanranjhaa/portfolio.git
   cd portfolio
   docker compose up -d --build
   ```
   Site is now at `http://<VM_IP>:8090`.

5. **Set up Caddy for HTTPS** (if you don't have an existing Caddy container):

   Create a `Caddyfile`:
   ```caddyfile
   www.yourdomain.com {
       reverse_proxy portfolio-web:80
   }

   http://yourdomain.com {
       redir https://www.yourdomain.com{uri} permanent
   }
   ```

   Run Caddy:
   ```bash
   docker run -d \
     --name caddy \
     --network lifeplan-net \
     -p 80:80 -p 443:443 \
     -v $(pwd)/Caddyfile:/etc/caddy/Caddyfile \
     -v caddy_data:/data \
     caddy:alpine
   ```

6. **Point DNS** — add two A records at your registrar, both pointing to the VM's external IP: `@` and `www`.

7. **Wait for TLS** — Caddy will automatically obtain a Let's Encrypt certificate once DNS propagates (usually within minutes).

---

## Troubleshooting

| Problem | Check |
|---|---|
| Site not loading | `docker ps` — confirm `portfolio-web` is running |
| TLS error on bare domain | Caddy needs a cert. Check `docker logs loadedout-frontend-1 2>&1 \| grep salman` |
| Caddy can't reach `portfolio-web` | Both containers must be on the same Docker network: `docker inspect portfolio-web \| grep Networks` |
| DNS not resolving | `host salmanranjha.me 8.8.8.8` — should return `34.17.37.87` |
| Port 8090 blocked | Confirm GCP firewall rule `allow-app-ports` includes `tcp:8090` |
