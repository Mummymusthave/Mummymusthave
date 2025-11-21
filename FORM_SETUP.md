# Form Setup Guide - Send All Forms to Sales@mummymusthave.com

## Quick Setup with Formspree (Free - 50 submissions/month)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Sign up for a free account
3. Verify your email

### Step 2: Create Forms (3 forms needed)

#### Form 1: Contact Form
1. Click "New Form"
2. Name it: "MummyMustHave Contact"
3. **Email to send to:** `Sales@mummymusthave.com`
4. Copy the form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

#### Form 2: Newsletter Signup
1. Click "New Form"
2. Name it: "MummyMustHave Newsletter"
3. **Email to send to:** `Sales@mummymusthave.com`
4. Copy the form endpoint

#### Form 3: ParentPal Waitlist
1. Click "New Form"
2. Name it: "MummyMustHave Waitlist"
3. **Email to send to:** `Sales@mummymusthave.com`
4. Copy the form endpoint

### Step 3: Add Endpoints to Your Site

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_CONTACT_FORM_ID
NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/YOUR_WAITLIST_FORM_ID
```

**Important:** Replace `YOUR_FORM_ID` with the actual form IDs from Formspree.

### Step 4: Restart Development Server

After creating `.env.local`:
```bash
# Stop your current server (Ctrl+C)
npm run dev
```

### Step 5: Test Forms

1. **Contact Form** (`/contact`):
   - Fill out and submit
   - Check `Sales@mummymusthave.com` for the email

2. **Newsletter** (Homepage & Resources):
   - Enter email and submit
   - Check `Sales@mummymusthave.com` for the email

3. **Waitlist** (`/parentpal`):
   - Enter name and email
   - Submit
   - Check `Sales@mummymusthave.com` for the email

## All Forms Will Send To:
✅ **Sales@mummymusthave.com**

## Forms on Your Site:
1. Contact Form (`/contact`) - Sends: Name, Email, Subject, Message
2. Newsletter Signup (Homepage & Resources) - Sends: Email
3. ParentPal Waitlist (`/parentpal`) - Sends: Name, Email

## Troubleshooting

**Forms not sending?**
- Check that `.env.local` file exists and has correct endpoints
- Restart your development server after adding `.env.local`
- Check Formspree dashboard for submission logs
- Verify email address `Sales@mummymusthave.com` is correct in Formspree

**Need more than 50 submissions/month?**
- Formspree free tier: 50/month
- Paid plans start at $10/month for 1,000 submissions
- Alternative: EmailJS (200/month free) or Mailchimp (for newsletters)

## After Deployment

When you deploy to GitHub Pages, you'll need to:
1. Add the environment variables to your GitHub repository
2. Go to: Repository Settings → Secrets and variables → Actions
3. Add each `NEXT_PUBLIC_*` variable as a repository secret
4. Update the GitHub Actions workflow to use them (if needed)

**Note:** For static sites on GitHub Pages, environment variables work differently. You may need to build locally and push the built files, or use a different approach.

