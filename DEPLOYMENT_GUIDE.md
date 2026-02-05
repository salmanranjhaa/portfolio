# Deploying Your Portfolio Website

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Prerequisites
- A GitHub account (create one at https://github.com)
- Git installed on your computer

### Step-by-Step Instructions

#### 1. Initialize Git Repository
```bash
cd "e:\Anti Gravity Projects\Website"
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

#### 2. Create GitHub Repository
- Go to https://github.com/new
- Repository name: `portfolio` (or your preferred name)
- Make it Public
- DO NOT initialize with README (we already have files)
- Click "Create repository"

#### 3. Push to GitHub
Replace `YOUR_USERNAME` with your GitHub username:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### 4. Enable GitHub Pages
- Go to your repository on GitHub
- Click "Settings" tab
- Scroll to "Pages" in the left sidebar
- Under "Source", select "main" branch and "/ (root)" folder
- Click "Save"
- Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

**Done! Your website is now live! 🎉**

---

## Option 2: Netlify (Alternative - Drag & Drop)

### Super Easy Method (No Git Required)

1. Go to https://www.netlify.com/
2. Sign up for a free account
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your entire Website folder
5. Your site is live instantly!
6. Netlify gives you a URL like: `random-name.netlify.app`
7. You can customize the subdomain in site settings

**Pros:**
- Instant deployment
- No Git knowledge required
- Automatic HTTPS
- Easy custom domain setup

---

## Option 3: Vercel (Alternative - Great for Future Projects)

### Similar to Netlify

1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your GitHub repository (after doing steps from Option 1)
5. Click "Deploy"
6. Your site is live at: `portfolio.vercel.app`

---

## Option 4: Google Cloud VM (Your Current Setup)

### Prerequisites
- Google Cloud VM instance running (which you mentioned you have)
- SSH access to the VM
- Basic knowledge of Linux commands

### Method 1: Using Nginx (Recommended)

#### Step 1: Connect to Your VM
```bash
# From your local machine
gcloud compute ssh YOUR_INSTANCE_NAME --zone=YOUR_ZONE
# Or use the SSH button in Google Cloud Console
```

#### Step 2: Install Nginx
```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

#### Step 3: Upload Your Website Files
From your local machine (Windows):
```bash
# Navigate to your website directory
cd "e:\Anti Gravity Projects\Website"

# Upload files to VM (replace with your instance details)
gcloud compute scp --recurse * YOUR_INSTANCE_NAME:/tmp/portfolio --zone=YOUR_ZONE
```

#### Step 4: Move Files to Nginx Directory
Back on your VM:
```bash
# Create website directory
sudo mkdir -p /var/www/portfolio

# Move files
sudo mv /tmp/portfolio/* /var/www/portfolio/

# Set permissions
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

#### Step 5: Configure Nginx
```bash
# Create nginx configuration
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name YOUR_VM_EXTERNAL_IP;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Optional: Enable gzip compression
    gzip on;
    gzip_types text/css text/javascript application/javascript application/json;
}
```

#### Step 6: Enable the Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

#### Step 7: Configure Firewall
```bash
# On your VM
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

In Google Cloud Console:
1. Go to VPC Network → Firewall
2. Create firewall rule:
   - Name: `allow-http`
   - Direction: Ingress
   - Targets: All instances
   - Source: 0.0.0.0/0
   - Protocols: tcp:80, tcp:443
3. Click Create

#### Step 8: Access Your Site
Visit: `http://YOUR_VM_EXTERNAL_IP`

### Method 2: Using Python HTTP Server (Quick & Temporary)

For quick testing only:
```bash
# Upload files to VM
gcloud compute scp --recurse * YOUR_INSTANCE_NAME:~/portfolio --zone=YOUR_ZONE

# On the VM
cd ~/portfolio
python3 -m http.server 8000

# Access at: http://YOUR_VM_EXTERNAL_IP:8000
```

### Method 3: Using Docker

```bash
# Create Dockerfile in your website directory
cat > Dockerfile << EOF
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
EOF

# Build and run
docker build -t portfolio .
docker run -d -p 80:80 portfolio
```

### Adding HTTPS (Optional but Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate (requires a domain name)
sudo certbot --nginx -d yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

### Updating Your Website

```bash
# From local machine
cd "e:\Anti Gravity Projects\Website"
gcloud compute scp --recurse * YOUR_INSTANCE_NAME:/var/www/portfolio --zone=YOUR_ZONE

# On VM (if needed)
sudo systemctl reload nginx
```

---

## Option 5: Google Cloud Storage (Static Hosting - Cheaper Alternative)

If you don't need a VM for other purposes, static hosting is cheaper:

```bash
# Create bucket
gsutil mb gs://your-bucket-name

# Set bucket as website
gsutil web set -m index.html -e 404.html gs://your-bucket-name

# Upload files
cd "e:\Anti Gravity Projects\Website"
gsutil -m cp -r * gs://your-bucket-name

# Make public
gsutil iam ch allUsers:objectViewer gs://your-bucket-name

# Access at: http://your-bucket-name.storage.googleapis.com
```

---

## Comparison: Which Option for Google Cloud?

| Method | Cost | Speed | Complexity | Best For |
|--------|------|-------|------------|----------|
| VM + Nginx | Higher (VM cost) | Fast | Medium | Full control, multiple sites |
| Google Storage | Very Low | Very Fast | Low | Just this website |
| VM + Docker | Higher | Fast | Medium-High | Modern deployment |

---

## Recommended: Option 1 (GitHub Pages)

**Why GitHub Pages?**
- ✅ Free forever
- ✅ Custom domain support
- ✅ Version control built-in
- ✅ Professional (shows on your GitHub profile)
- ✅ Easy updates (just push new commits)
- ✅ Great for your portfolio to show you know Git/GitHub

---

## Custom Domain (Optional)

Once deployed, you can add a custom domain like `salmanranjha.com`:

### For GitHub Pages:
1. Buy a domain from Namecheap, GoDaddy, etc.
2. Add a `CNAME` file to your repository with your domain
3. Update DNS settings with your domain provider
4. Details: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

### For Netlify/Vercel:
- Just follow their UI instructions (very easy)

---

## Updating Your Website

### GitHub Pages:
```bash
# Make your changes to files
git add .
git commit -m "Update content"
git push
# Changes will appear within 1-2 minutes
```

### Netlify/Vercel:
- Just drag and drop updated folder again, or
- Connect to GitHub for automatic deployments

---

## Need Help?

If you run into any issues during deployment, just let me know which option you chose and what error you're seeing!
