# MummyMustHave Website

A modern, family-friendly website for MummyMustHave - supporting parents every step of the way.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
MummyMustHave/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── products/          # Products page
│   ├── parentpal/         # ParentPal app page
│   ├── resources/         # Resources/Blog page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Site navigation
│   └── Footer.tsx         # Site footer
├── public/                # Static assets (logo, images)
└── package.json           # Dependencies
```

## 🎨 Customization

### Adding Your Logo

1. Place your logo file in the `public/` directory
2. Update `components/Navigation.tsx` to use your logo:
   - Replace the placeholder logo div with an `<Image>` component pointing to your logo

### Updating Colors

Edit `tailwind.config.js` to customize the color scheme:
- `primary`: Main brand color
- `secondary`: Accent color

### Adding Content

- **Products**: Update `app/products/page.tsx` with your actual product data
- **ParentPal**: Update `app/parentpal/page.tsx` with app details and download links
- **Resources**: Add articles to `app/resources/page.tsx`

## 🚢 Deployment to GitHub Pages

### Setup

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set source to "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will automatically deploy on push to `main`

### Important Notes

- The site is configured for static export (required for GitHub Pages)
- Base path is set to `/MummyMustHave` - update `next.config.js` if your repo name is different
- For custom domain, update DNS settings in your domain provider

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Export static site (for GitHub Pages)
- `npm start` - Start production server (not used for static export)

## ⚙️ Functionality Setup

**All forms are ready to use but need Formspree configuration:**

1. See `SETUP_GUIDE.md` for detailed instructions
2. Sign up for free Formspree account (50 submissions/month)
3. Create 3 forms: Contact, Newsletter, Waitlist
4. Add endpoints to `.env.local` file
5. Restart development server

**Current Functionality:**
- ✅ Contact form with validation
- ✅ Newsletter signup (homepage & resources)
- ✅ ParentPal waitlist signup
- ✅ Product search and filter
- ✅ FAQ accordion
- ✅ All navigation and links
- ✅ Mobile responsive menu
- ✅ Form validation and error handling
- ✅ Community page with Discord/Facebook CTAs (links configurable via env vars)

### Community Links

Add your invite links to `.env.local` so the buttons work:

```env
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/YOUR_INVITE
NEXT_PUBLIC_FACEBOOK_GROUP_URL=https://facebook.com/groups/YOUR_GROUP
```

If these are missing, the buttons will show “Link coming soon”.

## 📝 Next Steps

1. **Set up Formspree** - See `SETUP_GUIDE.md`
2. Add your logo to `public/logo.png` or `public/logo.svg`
3. Update placeholder content with your actual products and information
4. Add your social media links
5. Set up analytics (Google Analytics, etc.)
6. Test on mobile devices
7. Deploy to GitHub Pages

## 📚 Documentation

- `FUNCTIONALITY_PLAN.md` - Complete plan of all features
- `SETUP_GUIDE.md` - Step-by-step setup instructions
- `DEPLOYMENT.md` - Deployment and domain setup
- `PROJECT_PLAN.md` - Full project plan

## 🌐 Connecting Your Domain

Once deployed to GitHub Pages:

1. Go to your repository Settings → Pages
2. Add your custom domain
3. Update DNS settings in Wix:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IP addresses
4. Wait for DNS propagation (can take up to 48 hours)

## 📧 Support

For questions or issues, please contact us through the website's contact form.

