# BodyWRX Pre-Launch Checklist

## Assets Needed

- [ ] Add Dr. Mancuso portrait photo to `public/` (replace placeholder divs on Home and About pages)
- [ ] Replace all 12 gallery placeholder divs with real client-provided photos
- [ ] Add Open Graph image at `public/og-default.png` (1200x630, charcoal bg, BODY WRX wordmark, tagline)
- [ ] Add `public/apple-touch-icon.png` (180x180, charcoal bg with cream BW monogram)
- [ ] Add `public/icon-192.png` and `public/icon-512.png` (charcoal bg with cream BW monogram)
- [ ] Replace `public/favicon.ico` with branded favicon (charcoal bg, cream BW or WRX monogram)

## Content Review

- [ ] Final copy review with Dr. Mancuso (all placeholder copy marked with `<!-- placeholder copy pending client review -->`)
- [ ] Replace placeholder testimonials with real client testimonials
- [ ] Confirm placeholder credentials on About page are accurate
- [ ] Confirm service descriptions are accurate and approved
- [ ] Review all page meta descriptions for accuracy

## Domain and Hosting

- [ ] Connect domain `bodywrxpt.com` to Vercel
- [ ] Verify SSL certificate is active
- [ ] Set production environment variables in Vercel dashboard:
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL`

## Email (Resend)

- [ ] Verify `bodywrxpt.com` domain in Resend dashboard
- [ ] Update `CONTACT_FROM_EMAIL` to use verified sender (e.g., `contact@bodywrxpt.com`)
- [ ] Test contact form submission end-to-end in production
- [ ] Confirm auto-reply email delivers correctly

## SEO

- [ ] Submit sitemap at `https://bodywrxpt.com/sitemap.xml` to Google Search Console
- [ ] Add Google Search Console verification meta tag or DNS record
- [ ] Verify all 6 pages appear in sitemap
- [ ] Confirm `robots.txt` allows all crawlers and references sitemap
- [ ] Verify canonical URLs resolve correctly in production

## Google Integrations

- [ ] Add Google Analytics (GA4) tracking ID
- [ ] Link Google Business Profile to website URL
- [ ] Verify business address in Google Business Profile matches site

## Final QA

- [ ] Test all pages on mobile (iPhone Safari, Android Chrome)
- [ ] Test all pages on desktop (Chrome, Safari, Firefox)
- [ ] Run Lighthouse audit on mobile -- target 90+ on all scores
- [ ] Verify color contrast passes WCAG AA (cream text #F1E6D3 on charcoal #1C1C1A = ~13.5:1, charcoal on ivory #F8F4EC = ~17.5:1, passes)
- [ ] Test keyboard navigation through entire site (Tab, Enter, Escape)
- [ ] Test skip-to-content link
- [ ] Test mobile menu open/close and focus trap
- [ ] Test gallery lightbox keyboard navigation and focus trap
- [ ] Test contact form validation (client and server side)
- [ ] Test contact form submission with valid data
- [ ] Verify 404 page renders correctly for invalid routes
- [ ] Verify error page renders correctly
- [ ] Check all external links open in new tabs (Google Maps, Instagram, email, phone)
- [ ] Test `tel:` and `mailto:` links on mobile
- [ ] Verify `prefers-reduced-motion` disables all animations

## Post-Launch

- [ ] Monitor Resend dashboard for email delivery issues
- [ ] Check Google Search Console for crawl errors after indexing
- [ ] Verify structured data with Google Rich Results Test
- [ ] Monitor Lighthouse scores periodically
