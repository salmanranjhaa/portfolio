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
