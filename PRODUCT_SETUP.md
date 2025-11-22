# Product Setup Guide

## 📦 Adding Your Products

### 1. Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com/) and create an account (if you don't have one)
2. Create a new property for your website
3. Copy your Measurement ID (starts with `G-`)
4. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Restart your dev server for changes to take effect

### 2. Product Images

1. Create a `products` folder in the `public` directory:
   ```
   public/products/
   ```

2. Add your product images:
   - `book1.jpg` - Cover image for Kids Book 1
   - `book2.jpg` - Cover image for Kids Book 2
   - `clothing.jpg` - Image for MummyMustHave Clothing

3. Image recommendations:
   - Format: JPG or PNG
   - Size: At least 800x800px for best quality
   - File size: Keep under 500KB for fast loading

### 3. Amazon Product Links

1. Go to your Amazon product pages
2. Copy the full product URL
3. Add them to your `.env.local` file:
   ```
   NEXT_PUBLIC_BOOK1_AMAZON_LINK=https://www.amazon.com/your-book-1-link
   NEXT_PUBLIC_BOOK2_AMAZON_LINK=https://www.amazon.com/your-book-2-link
   ```

### 4. TeeSpring Store Link

1. Go to your TeeSpring store
2. Copy your store URL
3. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_TEESPRING_STORE_LINK=https://your-store.teespring.com
   ```

### 5. Update Product Information

Edit `app/products/page.tsx` to update:
- Product names (currently "Kids Book 1", "Kids Book 2")
- Product descriptions
- Any other product details

## 📝 Example .env.local File

```env
# Formspree (already configured)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xyzvzaoq
NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://formspree.io/f/xyzvzaoq
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/xyzvzaoq

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Product Links
NEXT_PUBLIC_BOOK1_AMAZON_LINK=https://www.amazon.com/your-book-1
NEXT_PUBLIC_BOOK2_AMAZON_LINK=https://www.amazon.com/your-book-2
NEXT_PUBLIC_TEESPRING_STORE_LINK=https://your-store.teespring.com
```

## ✅ Testing

After adding your links and images:

1. Restart your dev server: `npm run dev`
2. Visit `http://localhost:3000/products`
3. Click on each product to test the links
4. Verify images display correctly
5. Test that external links open in new tabs

## 🚀 Deployment

Remember: `.env.local` is not committed to Git. For production (GitHub Pages), you'll need to:

1. Set environment variables in your GitHub repository settings, OR
2. Update the product links directly in the code for static deployment

Since GitHub Pages is static, environment variables don't work the same way. You may need to hardcode the links in the products page for production, or use a different deployment method that supports environment variables.


