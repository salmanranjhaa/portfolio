#!/bin/bash
# Simple deployment script for Google Cloud VM

echo "======================================"
echo "Portfolio Website Deployment Script"
echo "======================================"
echo ""

# Your VM details (update if needed)
INSTANCE_NAME="instance-20260130-132625"
ZONE="europe-west1-b"
EXTERNAL_IP="34.17.144.11"

echo "Instance: $INSTANCE_NAME"
echo "Zone: $ZONE"
echo "IP: $EXTERNAL_IP"
echo ""

# Step 1: Install Nginx
echo "Step 1: Installing Nginx..."
gcloud compute ssh $INSTANCE_NAME --zone=$ZONE --command="sudo apt update && sudo apt install nginx -y && sudo systemctl start nginx && sudo systemctl enable nginx"

# Step 2: Create website directory
echo "Step 2: Creating website directory..."
gcloud compute ssh $INSTANCE_NAME --zone=$ZONE --command="sudo mkdir -p /var/www/portfolio && sudo chown -R \$USER:\$USER /var/www/portfolio"

# Step 3: Upload website files
echo "Step 3: Uploading website files..."
gcloud compute scp --recurse *.html *.css *.js image $INSTANCE_NAME:/var/www/portfolio --zone=$ZONE

# Step 4: Set permissions
echo "Step 4: Setting permissions..."
gcloud compute ssh $INSTANCE_NAME --zone=$ZONE --command="sudo chown -R www-data:www-data /var/www/portfolio && sudo chmod -R 755 /var/www/portfolio"

# Step 5: Configure Nginx
echo "Step 5: Configuring Nginx..."
gcloud compute ssh $INSTANCE_NAME --zone=$ZONE --command="sudo tee /etc/nginx/sites-available/portfolio > /dev/null << 'EOF'
server {
    listen 80;
    server_name $EXTERNAL_IP;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }

    gzip on;
    gzip_types text/css text/javascript application/javascript application/json;
}
EOF"

# Step 6: Enable the site
echo "Step 6: Enabling site..."
gcloud compute ssh $INSTANCE_NAME --zone=$ZONE --command="sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/ && sudo rm -f /etc/nginx/sites-enabled/default && sudo nginx -t && sudo systemctl reload nginx"

echo ""
echo "======================================"
echo "✅ Deployment Complete!"
echo "======================================"
echo ""
echo "Your website should now be live at:"
echo "👉 http://$EXTERNAL_IP"
echo ""
