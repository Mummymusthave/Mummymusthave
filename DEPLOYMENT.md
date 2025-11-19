# Deployment Guide for MummyMustHave

## Deploying to GitHub Pages

### Step 1: Push to GitHub

1. Create a new repository on GitHub (or use an existing one)
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to `main`

### Step 3: Configure for Custom Domain (Optional)

If you're using a **custom domain** (like your Wix domain):

1. Update `next.config.js` - set `basePath` to empty string:
   ```js
   basePath: '',
   assetPrefix: '',
   ```

2. In your GitHub repository:
   - Go to **Settings** → **Pages**
   - Under **Custom domain**, enter your domain (e.g., `mummymusthave.com`)
   - Check **Enforce HTTPS** (after DNS is configured)

### Step 4: Configure DNS in Wix

To connect your Wix domain to GitHub Pages:

#### Option A: Using CNAME (Recommended for subdomains like www)

1. In Wix domain settings, add a CNAME record:
   - **Name**: `www` (or leave blank for root domain)
   - **Value**: `YOUR_USERNAME.github.io`
   - **TTL**: 3600 (or default)

#### Option B: Using A Records (For root domain)

1. In Wix domain settings, add A records pointing to GitHub Pages IPs:
   - **Name**: `@` (or leave blank)
   - **Value**: One of these IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **TTL**: 3600

2. Add all 4 A records (one for each IP)

#### Option C: Using Nameservers (If Wix allows)

1. In Wix, change nameservers to GitHub's:
   - `ns1.p16.dynadot.com`
   - `ns2.p16.dynadot.com`
   - Or use GitHub's nameservers if provided

### Step 5: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate
- You can check status at: https://www.whatsmydns.net/

### Step 6: Verify Deployment

1. After DNS propagates, visit your domain
2. The site should load from GitHub Pages
3. Check that HTTPS is working (GitHub Pages provides free SSL)

## Troubleshooting

### Site shows 404
- Check that `basePath` in `next.config.js` matches your repository name (if using subdirectory)
- For custom domain, ensure `basePath` is empty string

### DNS not working
- Verify DNS records are correct in Wix
- Wait longer for propagation (can take up to 48 hours)
- Check DNS propagation status online

### Build fails
- Check GitHub Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version in workflow matches your local version

### Images not loading
- Ensure images are in `public/` directory
- Check that image paths start with `/` (e.g., `/logo.png`)
- Verify `images.unoptimized: true` in `next.config.js`

## Environment Variables

If you need environment variables:
1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Add your secrets
3. Update `.github/workflows/deploy.yml` to use them

## Updating the Site

Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions will automatically rebuild and redeploy.

