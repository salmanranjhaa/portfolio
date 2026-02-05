# Quick Deployment Commands

## 1. First: Commit Changes to GitHub

```bash
cd "e:\Anti Gravity Projects\Website"
git add .
git commit -m "Update: Added Projects section, fixed dates, updated content to match resume"
git push origin main
```

## 2. Deploy to Google Cloud VM (Option A: Nginx)

### Get Your VM Info First
```bash
# List your instances
gcloud compute instances list

# Note down:
# - INSTANCE_NAME (example: instance-20260130-132625)
# - ZONE (example: europe-west1-b)
# - EXTERNAL_IP (example: 34.17.144.11)
```

### Upload and Deploy
```bash
# Replace these with your actual values:
# YOUR_INSTANCE_NAME = instance-20260130-132625
# YOUR_ZONE = europe-west1-b

# Step 1: Upload files
cd "e:\Anti Gravity Projects\Website"
gcloud compute scp --recurse *.html *.css *.js *.md image YOUR_INSTANCE_NAME:/tmp/portfolio --zone=YOUR_ZONE

# Step 2: SSH into VM
gcloud compute ssh YOUR_INSTANCE_NAME --zone=YOUR_ZONE

# Step 3: On the VM, run these commands:
sudo mkdir -p /var/www/portfolio
sudo rm -rf /var/www/portfolio/*
sudo mv /tmp/portfolio/* /var/www/portfolio/
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
sudo systemctl reload nginx

# Step 4: Exit SSH and access your site
# Visit: http://YOUR_EXTERNAL_IP
```

## 3. Quick Update (After Initial Setup)

```bash
# Local changes committed to git
cd "e:\Anti Gravity Projects\Website"
git add .
git commit -m "Your update message"
git push

# Deploy to GCloud VM
gcloud compute scp --recurse *.html *.css *.js image YOUR_INSTANCE_NAME:/var/www/portfolio --zone=YOUR_ZONE

# Reload nginx (if needed)
gcloud compute ssh YOUR_INSTANCE_NAME --zone=YOUR_ZONE --command="sudo systemctl reload nginx"
```

## 4. View Your Deployed Site

```bash
# Get your external IP
gcloud compute instances describe YOUR_INSTANCE_NAME --zone=YOUR_ZONE --format="get(networkInterfaces[0].accessConfigs[0].natIP)"

# Then visit: http://EXTERNAL_IP
```

---

## Troubleshooting

### Check if Nginx is Running
```bash
gcloud compute ssh YOUR_INSTANCE_NAME --zone=YOUR_ZONE
sudo systemctl status nginx
```

### Check Nginx Logs
```bash
gcloud compute ssh YOUR_INSTANCE_NAME --zone=YOUR_ZONE
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Restart Nginx
```bash
gcloud compute ssh YOUR_INSTANCE_NAME --zone=YOUR_ZONE
sudo systemctl restart nginx
```

### Check Firewall Rules
```bash
gcloud compute firewall-rules list
# Make sure you have a rule allowing tcp:80 and tcp:443
```

---

## Example with Your Actual VM

Based on the screenshot showing `instance-20260130-132625` in `europe-west1-b`:

```bash
# Upload
cd "e:\Anti Gravity Projects\Website"
gcloud compute scp --recurse *.html *.css *.js *.md image instance-20260130-132625:/tmp/portfolio --zone=europe-west1-b

# SSH
gcloud compute ssh instance-20260130-132625 --zone=europe-west1-b

# Then run setup commands on VM...
```
