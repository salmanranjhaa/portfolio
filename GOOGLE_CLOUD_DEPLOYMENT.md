# Google Cloud VM Deployment - Manual Guide

## Your VM Information
- **Instance Name**: `instance-20260130-132625`
- **Zone**: `europe-west1-b`
- **External IP**: `34.17.144.11`
- **Project**: `project-85808d2c-7ca5-4412-a80`

---

## ✅ Option 1: Deploy Using Google Cloud Console (EASIEST)

### Step 1: Open Google Cloud Console
1. Go to: https://console.cloud.google.com/compute/instances
2. You should see your instance `instance-20260130-132625`

### Step 2: Connect via SSH
1. Click the **"SSH"** button next to your instance
2. A terminal window will open in your browser

### Step 3: Install Nginx (in the SSH terminal)
```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```

### Step 4: Create Website Directory
```bash
sudo mkdir -p /var/www/portfolio
sudo chown -R $USER:$USER /var/www/portfolio
cd /var/www/portfolio
```

### Step 5: Upload Files via Google Cloud Console
**Option A: Upload through SSH window**
1. In the SSH window, click the gear icon (⚙️) in the top-right
2. Select "Upload file"
3. Upload these files one by one:
   - `index.html`
   - `style.css`
   - `script.js`
   - `skills-modal.js`

4. For the `image` folder, create it first:
```bash
mkdir /var/www/portfolio/image
```
Then upload the image files into it.

**Option B: Use Git (Simpler!)**
```bash
cd /var/www/portfolio
git clone https://github.com/salmanranjhaa/portfolio.git .
```

### Step 6: Set Permissions
```bash
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### Step 7: Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Paste this configuration:
```nginx
server {
    listen 80;
    server_name 34.17.144.11;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    gzip on;
    gzip_types text/css text/javascript application/javascript application/json;
}
```

**Save**: Press `Ctrl+X`, then `Y`, then `Enter`

### Step 8: Enable the Site
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### Step 9: Configure Firewall (if needed)
In Google Cloud Console:
1. Go to **VPC Network** → **Firewall**
2. Check if you have a rule allowing HTTP (port 80)
3. If not, click **"Create Firewall Rule"**:
   - Name: `allow-http`
   - Direction: Ingress
   - Targets: All instances in the network
   - Source IP ranges: `0.0.0.0/0`
   - Protocols and ports: `tcp:80`
   - Click **Create**

### Step 10: Visit Your Website! 🎉
Open: **http://34.17.144.11**

---

## ✅ Option 2: Deploy Using gcloud CLI from New Terminal

Since gcloud is installed but not in your current PowerShell session:

### Step 1: Open the Google Cloud SDK Shell
1. Press `Windows Key`
2. Search for: **"Google Cloud SDK Shell"**
3. Open it

### Step 2: Navigate to Your Website
```bash
cd "e:\Anti Gravity Projects\Website"
```

### Step 3: Run Deployment Commands
```bash
# Upload files
gcloud compute scp --recurse index.html style.css script.js skills-modal.js image instance-20260130-132625:/tmp/portfolio --zone=europe-west1-b

# SSH into VM
gcloud compute ssh instance-20260130-132625 --zone=europe-west1-b
```

### Step 4: On the VM, move files and setup
```bash
sudo mkdir -p /var/www/portfolio
sudo mv /tmp/portfolio/* /var/www/portfolio/
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio

# Install nginx
sudo apt update && sudo apt install nginx -y

# Configure (follow steps from Option 1, Step 7-8)
```

---

## 🔄 How to Update Later

**Quick update** (after changing files):

Using Git (easiest):
```bash
# On your VM via SSH
cd /var/www/portfolio
git pull origin main
sudo systemctl reload nginx
```

Using gcloud:
```bash
gcloud compute scp --recurse *.html *.css *.js instance-20260130-132625:/var/www/portfolio --zone=europe-west1-b
```

---

## 🐛 Troubleshooting

### Check if Nginx is running:
```bash
sudo systemctl status nginx
```

### Check Nginx logs:
```bash
sudo tail -f /var/log/nginx/error.log
```

### Restart Nginx:
```bash
sudo systemctl restart nginx
```

### Test Nginx configuration:
```bash
sudo nginx -t
```

---

## 🎯 Recommended: Option 1 (Cloud Console)

**Use the Google Cloud Console** - it's the simplest for first-time deployment. Just click SSH and follow the commands!

**Your website will be live at**: http://34.17.144.11

---

**Need help?** Let me know which step you're on and I'll guide you through it!
