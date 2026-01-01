# Fix Google Indexing Issues - Replace Wix Site

## Problem
- Google is showing your old Wix site
- Display picture shows Wix logo
- Google says site is "impersonating mummymusthave"

## Solution Steps

### 1. Verify Your New Site is Live
First, make sure your new Next.js site is actually live and accessible:
- Visit your domain directly (e.g., `https://mummymusthave.com`)
- It should show your new Next.js site, NOT the Wix site
- If it still shows Wix, your DNS isn't configured correctly (see Step 2)

### 2. Fix DNS Configuration (If Still Showing Wix)

Your domain needs to point to GitHub Pages, NOT Wix:

#### In Wix Domain Settings:
1. Go to your Wix account → Domains
2. Find your domain (mummymusthave.com)
3. Remove any Wix hosting/website connections
4. Update DNS records to point to GitHub Pages:

**Option A: CNAME Record (for www subdomain)**
- Type: CNAME
- Name: `www`
- Value: `YOUR_GITHUB_USERNAME.github.io`
- TTL: 3600

**Option B: A Records (for root domain)**
Add these 4 A records:
- Type: A
- Name: `@` (or blank)
- Value: `185.199.108.153`
- Value: `185.199.109.153`
- Value: `185.199.110.153`
- Value: `185.199.111.153`

**Important:** Make sure Wix is NOT hosting your website anymore. The domain should only point to GitHub Pages.

### 3. Remove Old Wix Site from Google

#### In Google Search Console:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your domain)
3. Verify ownership
4. Go to **Removals** → **New Request**
5. Request removal of old Wix pages:
   - Request removal of: `https://yourdomain.com` (if it shows Wix)
   - Request removal of any Wix-specific URLs

### 4. Submit Your New Site to Google

#### In Google Search Console:
1. Go to **Sitemaps**
2. Submit: `https://yourdomain.com/sitemap.xml`
3. Go to **URL Inspection**
4. Enter your homepage URL
5. Click **Request Indexing** for:
   - Homepage: `https://yourdomain.com`
   - Products: `https://yourdomain.com/products`
   - Resources: `https://yourdomain.com/resources`
   - And other important pages

### 5. Update Open Graph Image

Make sure your logo is properly set:
- File should be at: `public/logo.png`
- Should be at least 1200x630 pixels for best results
- The metadata is already configured to use `/logo.png`

### 6. Force Google to Re-crawl

After DNS is fixed and site is live:

1. **Use URL Inspection Tool:**
   - In Google Search Console → URL Inspection
   - Enter your homepage
   - Click "Request Indexing"

2. **Submit Updated Sitemap:**
   - Go to Sitemaps
   - Remove old sitemap if exists
   - Submit new sitemap: `https://yourdomain.com/sitemap.xml`

3. **Wait for Re-indexing:**
   - Can take 1-7 days
   - Google will gradually replace old Wix results with new site

### 7. Verify Everything is Correct

Check these in your live site:

✅ **Homepage loads correctly** (not Wix)
✅ **Logo displays** (`/logo.png` exists and loads)
✅ **All pages work** (products, resources, etc.)
✅ **Sitemap accessible** (`/sitemap.xml`)
✅ **Robots.txt accessible** (`/robots.txt`)

### 8. Monitor Progress

- Check Google Search Console daily
- Monitor "Coverage" report for indexing status
- Check "Performance" to see when new site starts appearing
- Old Wix results will gradually disappear

## Quick Checklist

- [ ] DNS points to GitHub Pages (not Wix)
- [ ] New site is live and accessible
- [ ] Logo file exists at `public/logo.png`
- [ ] Sitemap submitted to Google Search Console
- [ ] Requested indexing for homepage
- [ ] Requested removal of old Wix pages
- [ ] Verified site shows correct content (not Wix)

## Expected Timeline

- **DNS Propagation:** 24-48 hours
- **Google Re-indexing:** 1-7 days
- **Old Wix Results Disappear:** 1-4 weeks

## If Still Having Issues

1. **Check DNS:** Use [whatsmydns.net](https://www.whatsmydns.net) to verify DNS is pointing correctly
2. **Clear Cache:** Google may be caching old results - wait for re-indexing
3. **Contact Support:** If Wix is still hosting, you may need to cancel Wix hosting plan

## Important Notes

- **Don't delete your Wix account** until DNS is fully migrated
- **Keep both sites running** during transition (if possible)
- **The "impersonating" message** will go away once Google recognizes your new site as the official one
- **This is normal** when migrating from one platform to another

