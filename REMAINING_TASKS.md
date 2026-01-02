# Remaining Tasks Checklist

## ✅ Completed
- [x] All pages created and functional
- [x] Products page with books and clothing
- [x] Resources/Guides system (14 guides)
- [x] Community page with Discord link
- [x] SEO optimization (metadata, sitemap, robots.txt, structured data)
- [x] Google Analytics configured (G-PM5J667F2R)
- [x] Social media links (Instagram added, Facebook coming soon)
- [x] All text polished (no placeholders)
- [x] Image optimization

## 🔴 Critical (Must Do)

### 1. Fix DNS / Wix Issue ⚠️ **HIGH PRIORITY**
**Problem:** Google is still showing your old Wix site
**Action Required:**
- [ ] Disconnect domain from Wix hosting
- [ ] Point DNS to GitHub Pages (see `FIX_GOOGLE_INDEXING.md`)
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Submit new site to Google Search Console
- [ ] Request removal of old Wix pages from Google

**Impact:** Until this is fixed, Google will keep showing Wix site instead of your new site

### 2. Set Up Forms (Formspree) 📧
**Status:** Forms are coded but need Formspree endpoints
**Action Required:**
- [ ] Sign up at https://formspree.io/ (free account)
- [ ] Create 3 forms:
  - Contact Form → `Sales@mummymusthave.com`
  - Newsletter Signup → `Sales@mummymusthave.com`
  - ParentPal Waitlist → `Sales@mummymusthave.com`
- [ ] Get form endpoint URLs
- [ ] Add to `.env.local`:
  ```
  NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID
  NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://formspree.io/f/YOUR_ID
  NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/YOUR_ID
  ```
- [ ] Add same secrets to GitHub (Settings → Secrets → Actions)
- [ ] Test all 3 forms on live site

**Impact:** Forms won't work until endpoints are configured

## 🟡 Important (Should Do Soon)

### 3. Set Site URL for Production
**Action Required:**
- [ ] Add GitHub secret: `NEXT_PUBLIC_SITE_URL`
- [ ] Value: `https://yourdomain.com` (your actual domain)
- [ ] This ensures Open Graph images and canonical URLs work correctly

### 4. Google Search Console Setup
**Action Required:**
- [ ] Go to https://search.google.com/search-console
- [ ] Add your property (your domain)
- [ ] Verify ownership
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for homepage
- [ ] Request removal of old Wix pages

**Impact:** Helps Google find and index your new site faster

### 5. Facebook Community Link (Optional)
**Status:** Currently shows "Coming Soon"
**Action Required:**
- [ ] Create Facebook group (if you want one)
- [ ] Get group URL
- [ ] Add GitHub secret: `NEXT_PUBLIC_FACEBOOK_GROUP_URL`
- [ ] Or leave as "Coming Soon" if not needed

## 🟢 Nice to Have (Future)

### 6. Product Images
**Status:** 
- ✅ book1.png exists
- ✅ book2.png exists
- ❓ clothing.jpg - may need to add if you want to show clothing product image

**Action:** Add clothing product image to `public/products/clothing.jpg` if desired

### 7. Google Analytics Verification
**Action Required:**
- [ ] After deployment completes, verify GA is tracking
- [ ] Visit site and check Google Analytics → Realtime
- [ ] Should see your visit appear

### 8. Monitor & Optimize
**Ongoing:**
- [ ] Monitor Google Analytics for traffic
- [ ] Check Google Search Console for indexing issues
- [ ] Review and improve SEO based on performance
- [ ] Add more content/resources as needed

## 📋 Quick Priority Summary

**Do First:**
1. Fix DNS/Wix issue (critical for Google visibility)
2. Set up Formspree forms (needed for contact/newsletter/waitlist)

**Do Next:**
3. Set `NEXT_PUBLIC_SITE_URL` in GitHub secrets
4. Set up Google Search Console
5. Verify Google Analytics is working

**Optional:**
6. Add Facebook group link (if you want one)
7. Add clothing product image

## 🎯 Current Status

**Site is:** ✅ Fully functional and ready
**Forms:** ⚠️ Need Formspree setup
**Google:** ⚠️ Still showing Wix (DNS issue)
**Analytics:** ✅ Configured, waiting for deployment

Once DNS is fixed and forms are set up, everything will be complete!

