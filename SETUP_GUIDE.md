# Setup Guide - Making Everything Work

## Step 1: Set Up Formspree (Free Email Service)

1. Go to https://formspree.io/
2. Sign up for a free account (50 submissions/month free)
3. Create 3 separate forms:
   - **Contact Form** - for the contact page
   - **Newsletter** - for newsletter signups
   - **Waitlist** - for ParentPal waitlist

4. For each form, copy the endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

5. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_CONTACT_FORM_ID
NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/YOUR_WAITLIST_FORM_ID
```

6. Restart your development server after adding the `.env.local` file

## Step 2: Test All Forms

1. **Contact Form** (`/contact`):
   - Fill out and submit
   - Check your email for the submission
   - Verify success message appears

2. **Newsletter Signup** (Homepage & Resources):
   - Enter email and submit
   - Check your email for the submission
   - Verify success message appears

3. **Waitlist** (`/parentpal`):
   - Enter name and email
   - Submit
   - Check your email for the submission
   - Verify success message appears

## Step 3: Update Product Data

Edit `app/products/page.tsx` and replace the placeholder products with your actual products:

```typescript
const allProducts = [
  {
    id: 1,
    name: 'Your Product Name',
    description: 'Your product description...',
    category: 'Your Category',
    comingSoon: false,
  },
  // Add more products...
]
```

## Step 4: Update Resource Articles

Edit `app/resources/page.tsx` and update the article titles and excerpts with your actual content.

## Step 5: Add Your Logo

1. Place your logo file in the `public/` folder
2. Update `components/Navigation.tsx`:
   - Replace the placeholder logo div with an `<Image>` component

## Step 6: Customize Content

- Update all placeholder text throughout the site
- Add your actual product images to the `public/` folder
- Update social media links in the contact page
- Add your actual email addresses

## Step 7: Test Everything

- [ ] All forms submit successfully
- [ ] Success/error messages display correctly
- [ ] Product search works
- [ ] Product filter works
- [ ] All navigation links work
- [ ] Mobile menu works
- [ ] FAQ accordion works
- [ ] All buttons have clear actions
- [ ] Disclaimers are visible

## Important Notes

- **Forms won't work until you set up Formspree** - the site will still work, but form submissions will fail
- **All forms include validation** - users must fill in required fields
- **Error handling is built in** - if something goes wrong, users see a friendly message
- **No backend needed** - everything works with Formspree's free service

## Troubleshooting

**Forms not submitting?**
- Check that `.env.local` file exists and has correct endpoints
- Restart your development server after adding `.env.local`
- Check browser console for errors
- Verify Formspree endpoints are correct

**Getting CORS errors?**
- Make sure you're using the correct Formspree endpoint format
- Check that your Formspree account is activated

**Need more form submissions?**
- Formspree free tier: 50/month
- Upgrade to paid plan if needed
- Or use alternative: EmailJS (200/month free)

## Next Steps

Once everything is working:
1. Deploy to GitHub Pages
2. Connect your domain
3. Test forms on live site
4. Start collecting emails!

