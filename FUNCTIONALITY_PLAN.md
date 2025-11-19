# Functionality Plan - MummyMustHave Website

## Important Disclaimer
All functionality is designed to be safe and non-liable. We are parents sharing experiences, not medical or legal experts. All content will include appropriate disclaimers.

---

## 1. Contact Form (`/contact`)
**Functionality:**
- Form validation (client-side)
- Submit to email service (Formspree or similar - free tier)
- Success/error messages
- Clear form after successful submission

**Safety:**
- No medical/legal advice collection
- Just general inquiries, product questions, support, partnerships
- Disclaimer: "We're parents, not medical professionals. For medical advice, consult your doctor."

---

## 2. Newsletter Signup (Homepage & Resources)
**Functionality:**
- Email validation
- Submit to email service (Mailchimp, ConvertKit, or Formspree)
- Success message
- Optional: Store emails in local storage to prevent duplicate submissions

**Safety:**
- Clear privacy message
- Easy unsubscribe option mentioned
- No medical advice in newsletters - just product updates, tips, community stories

---

## 3. ParentPal Waitlist (`/parentpal`)
**Functionality:**
- "Notify Me" / "Join Waitlist" buttons
- Simple form: Name + Email
- Submit to same email service or separate list
- Success message with excitement
- Store in database/spreadsheet for launch notifications

**Safety:**
- Clear that app is in development
- No promises about features or timeline
- Just collecting interest

---

## 4. Products Page (`/products`)
**Functionality:**
- Search bar: Filter products by name/description (client-side)
- Category filter: Filter by category (client-side)
- Product cards: Click to show product detail modal or navigate to detail page
- "Coming Soon" products: Show interest form instead of "Learn More"

**Safety:**
- Product descriptions are informational only
- No medical claims
- "Results may vary" disclaimers
- Link to manufacturer info when available

---

## 5. Product Detail Modal/Page
**Functionality:**
- Show full product information
- Image gallery (if available)
- "Add to Interest List" or "Contact Us" button
- Share product button
- Back to products list

**Safety:**
- Clear that we're sharing what worked for us
- Not medical advice
- Individual results may vary

---

## 6. Resources Page (`/resources`)
**Functionality:**
- "Read More" links: Show full article in modal or navigate to article page
- Article pages: Full content with share buttons
- Category filtering (if multiple categories)
- Search articles (client-side)

**Safety:**
- Every article starts with disclaimer: "This is based on our experience as parents. Not medical/legal advice."
- Clear that these are tips, not prescriptions
- Encourage consulting professionals when needed

---

## 7. FAQ Page (`/faq`)
**Functionality:**
- Already working (accordion)
- Add "Still have questions?" link to contact form
- Maybe add search functionality

**Safety:**
- Answers are from parent perspective
- No medical diagnoses or treatments
- Refer to professionals when appropriate

---

## 8. Navigation
**Functionality:**
- All links work (already done)
- Mobile menu toggle (already done)
- Smooth scroll to sections (if needed)

---

## 9. Social Sharing
**Functionality:**
- Share buttons on articles/products (optional)
- Share to Facebook, Twitter, etc.
- Copy link functionality

---

## 10. Search Functionality (Global)
**Functionality:**
- Search bar in header (optional)
- Search across products, articles, pages
- Show results with categories

---

## Implementation Priority

### Phase 1 (Essential - Do First):
1. ✅ Contact form with email service
2. ✅ Newsletter signup
3. ✅ ParentPal waitlist
4. ✅ Products search/filter (client-side)
5. ✅ FAQ accordion (already done)

### Phase 2 (Nice to Have):
6. Product detail modals
7. Article detail pages
8. Social sharing
9. Global search

### Phase 3 (Future):
10. User accounts (if needed)
11. Product reviews (with moderation)
12. Community forum (separate platform)

---

## Email Service Recommendations

**Free Options:**
1. **Formspree** - Free tier: 50 submissions/month
   - Easy setup
   - No backend needed
   - Good for contact forms

2. **EmailJS** - Free tier: 200 emails/month
   - Send emails directly from frontend
   - No backend needed

3. **Mailchimp** - Free tier: 500 contacts
   - Good for newsletters
   - Email automation
   - Professional

**Recommendation:** Use Formspree for contact/waitlist forms, Mailchimp for newsletter

---

## Disclaimers to Add

1. **General Disclaimer (Footer):**
   "MummyMustHave is run by parents, for parents. We share our experiences and products that worked for us. We are not medical professionals, legal experts, or certified advisors. Always consult with qualified professionals for medical, legal, or financial advice."

2. **Product Disclaimer:**
   "Products are shared based on our personal experience. Individual results may vary. Always follow manufacturer instructions and consult professionals when needed."

3. **Article Disclaimer:**
   "Articles are based on our experiences as parents. This is not medical or professional advice. Consult with qualified professionals for specific situations."

---

## Data Privacy

- Clear privacy policy page
- GDPR-friendly (if needed)
- No storing sensitive data
- Email addresses only for stated purposes
- Easy unsubscribe options

---

## Testing Checklist

- [ ] All forms submit successfully
- [ ] Success/error messages display correctly
- [ ] Form validation works
- [ ] Search/filter functions work
- [ ] All buttons have clear actions
- [ ] Mobile responsive
- [ ] No broken links
- [ ] Disclaimers visible
- [ ] Email notifications received

---

## Notes

- Keep everything simple and client-side where possible
- Use free services to start
- No complex backend needed initially
- Focus on user experience and safety
- Always err on the side of caution with disclaimers

