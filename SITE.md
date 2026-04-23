# BodyWRX Physical Therapy & Wellness -- Website Reference

## Business Info

- **Business Name:** BodyWRX Physical Therapy & Wellness
- **Short Name:** BodyWRX
- **Owner:** Dr. Alexandra Mancuso, PT, DPT
- **Type:** Concierge physical therapy practice, cash-pay, solo practitioner
- **Address:** 4221 W Boy Scout Blvd, Suite 170, Tampa, FL 33607
- **Phone:** 336-420-9360
- **Email:** dralexandramancuso@gmail.com
- **Instagram:** @bodywrxpt
- **Hours:** By Appointment Only
- **Tagline:** Where recovery meets performance.

## Positioning

BodyWRX is a premium concierge physical therapy practice in Tampa. Every patient receives one-on-one, personalized treatment tailored to their body and goals. Each session is fully focused on the patient, not split across multiple clients like traditional insurance-based PT. The cash-pay model means more time, better outcomes, and a truly individualized experience. The target audience is affluent professionals, athletes, and post-surgical patients who value quality, privacy, and results over insurance convenience.

## Brand Voice

Confident, refined, warm. Speaks to a discerning clientele without being stiff or clinical. Avoids medical jargon when possible. Leans into performance and recovery language. No em dashes anywhere in copy.

## Design Direction

Visual reference points: Aesop, Byredo, RH (Restoration Hardware), Remedy Place, and editorial print magazines like Kinfolk and 1990s Vogue. The site should feel like a private wellness suite, not a medical clinic. Quiet, expensive, specific, editorial. Restraint over flash.

### Explicitly Avoid

- Pill-shaped buttons with gradients
- Lucide icons in colored circles next to services
- 3-column card grids with rounded corners
- Centered hero with CTA button and feature grid below
- Stock imagery of smiling medical professionals
- Blue or teal accent colors
- Light clinical backgrounds
- Fade-up animations on every section
- Generic section headers like "Our Services" or "Why Choose Us"

## Color Palette

### Backgrounds (only these two)

| Role             | Name        | Hex       | CSS Variable    |
| ---------------- | ----------- | --------- | --------------- |
| Dark anchor      | Charcoal    | `#1C1C1A` | `--color-bg`    |
| Body default     | Paper-white | `#FAFAF7` | `--color-paper` |

### Accents (never used as backgrounds)

| Role             | Name        | Hex       | CSS Variable          |
| ---------------- | ----------- | --------- | --------------------- |
| Primary accent   | Bone        | `#F0E6D3` | `--color-text`        |
| Secondary accent | Camel       | `#B89B82` | `--color-accent`      |
| Accent hover     | Light Sand  | `#CBAF96` | `--color-accent-hover`|

**Bone is an accent color, not a background. Do not apply it as a section background under any circumstances.** Use bone for: text on charcoal, kicker labels on charcoal, hairline dividers on charcoal, button borders on charcoal, numeric markers, and small typographic highlights.

### Background / Text Pairings

| Background      | Text color     | Kicker color           | Contrast       |
| --------------- | -------------- | ---------------------- | -------------- |
| Charcoal        | Bone (`text`)  | Camel (`accent`)       | 13.8:1         |
| Paper-white     | Charcoal (`bg`)| Charcoal/60 (`bg/60`)  | 16.3:1 / ~4.2:1 |

### Tailwind Theme Extension

```js
colors: {
  bg: '#1C1C1A',
  paper: '#FAFAF7',
  text: '#F0E6D3',
  accent: '#B89B82',
  'accent-hover': '#CBAF96',
}
```

### Rules

- No gradients anywhere
- No glows or drop shadows
- No pure white (`#FFFFFF`) or pure black (`#000000`)
- On charcoal: dividers use `accent` at reduced opacity (e.g., `border-accent/20`)
- On paper-white: dividers use `bg` at reduced opacity (e.g., `border-bg/10`)
- Bone is never a section background

## Typography

### Display Serif (Headings)

- **Font:** Cormorant Garamond (Google Fonts)
- **Weights:** 300 (Light), 400 (Regular), 600 (SemiBold)
- **Usage:** All headings (`h1`-`h6`), editorial pull quotes, hero text
- **Sizing:**
  - Hero headline: 80-120px desktop, 40-56px mobile
  - Section headers: 56-80px desktop, 32-44px mobile
  - Sub-headers: 28-36px desktop, 22-28px mobile
- **Letter-spacing:** `0.04em` to `0.08em` on headings
- **Text-transform:** Uppercase on `h1` and section headers; mixed case on sub-headers

### Body Sans-Serif

- **Font:** Inter (Google Fonts)
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium)
- **Usage:** Body copy, navigation, buttons, form labels, metadata
- **Sizing:** 15-17px desktop, 14-16px mobile
- **Line-height:** 1.7 for body copy, 1.4 for UI elements
- **Letter-spacing:** `0.01em`

### Kicker Labels

- **Font:** Inter
- **Weight:** 400
- **Size:** 11-13px
- **Style:** All-caps, `letter-spacing: 0.12em`, color `accent`
- **Format:** Numbered with thin dash separator (e.g., "01 -- The Practice")

### CSS Variables

```css
--font-display: 'Cormorant Garamond', serif;
--font-body: 'Inter', sans-serif;
```

## Logo

- Primary logo is the serif **BODY WRX** wordmark with "PHYSICAL THERAPY & WELLNESS" underneath
- The circular crossed-line mark is retired and should not be used
- Use the wordmark in the header and footer
- Logo files are stored in `public/`

## Layout Principles

- Asymmetrical layouts, not everything centered
- Text left-aligned in some sections, offset right in others
- Generous vertical whitespace; sections should breathe
- No 3-column card grids for services
- Use editorial numbered lists, hairline tan dividers, and full-bleed imagery instead of boxed cards
- Content max-width: ~1200px for text, full-bleed for imagery and backgrounds
- Section vertical padding: 120-160px desktop, 80-100px mobile

## Motion

- Slow opacity fades on scroll: 800-1200ms duration
- Subtle text reveals where type comes in from behind a mask
- No bouncing, no springs, no parallax
- Hover states: color shifts and underline slides, not scale transforms
- Respect `prefers-reduced-motion`: disable all animation when set

## Buttons and CTAs

- Not pills. Rectangular with thin 1px borders, or fully text-based with an underline that slides in on hover
- Minimal fill; transparent background with border by default
- Border color: `accent`
- Text: `text` color, uppercase Inter at 12-13px, `letter-spacing: 0.1em`
- Hover: background fills with `accent`, text shifts to `bg`
- Treated like editorial callouts, not software UI

### Primary CTA

- Label: "Book a Session"
- Routes to: `/contact`
- Used in: header nav, hero sections, service sections, footer

### Secondary CTA

- Label: "Call 336-420-9360"
- `tel:` link
- Used in: header, contact page, footer

## Site Structure (6 pages)

| #  | Page          | Route          | Purpose                                      |
| -- | ------------- | -------------- | -------------------------------------------- |
| 1  | Home          | `/`            | Brand introduction, positioning, key CTAs    |
| 2  | Services      | `/services`    | Full service list organized by category       |
| 3  | About         | `/about`       | Combined practice philosophy + Dr. Mancuso bio|
| 4  | Gallery       | `/gallery`     | Practice imagery, treatment space, environment|
| 5  | Testimonials  | `/testimonials`| Hidden until real testimonials provided        |
| 6  | Contact       | `/contact`     | Inquiry form (via Resend), location, phone    |

### Navigation Order

Header: Home, Services, About, Gallery, Contact + "Book a Session" CTA (Testimonials hidden until real content provided)
Footer: All pages except Testimonials + contact info + Instagram link

## Services (10 Total)

### Category 1: Rehabilitation

**1. Physical Therapy**
<!-- placeholder copy pending client review -->
Comprehensive one-on-one physical therapy sessions designed to restore function, reduce pain, and rebuild strength. Each treatment plan is built around your specific condition, movement patterns, and recovery goals.

**2. Post-Surgical Rehabilitation**
<!-- placeholder copy pending client review -->
Structured rehabilitation following orthopedic, spinal, and soft tissue surgeries. Treatment begins with restoring range of motion and progresses through strengthening and return-to-activity benchmarks tailored to your surgical protocol.

**3. Vestibular Therapy**
<!-- placeholder copy pending client review -->
Specialized treatment for dizziness, vertigo, and balance disorders. Sessions use targeted repositioning maneuvers and progressive balance training to recalibrate the vestibular system and restore confidence in movement.

### Category 2: Performance & Corrective

**4. Corrective Training**
<!-- placeholder copy pending client review -->
Movement-based sessions that identify and address compensatory patterns, muscle imbalances, and joint restrictions. Corrective training bridges the gap between rehabilitation and high-level performance.

**5. Prehabilitation (Pre-Hab)**
<!-- placeholder copy pending client review -->
Proactive preparation for upcoming surgery or intensive training. Pre-hab strengthens the areas most vulnerable to stress, improving surgical outcomes and reducing recovery timelines before the procedure even begins.

### Category 3: Recovery Modalities

**6. Cupping Therapy**
<!-- placeholder copy pending client review -->
Myofascial decompression using silicone or traditional cups to release deep tissue restrictions, increase blood flow, and accelerate recovery. Often integrated into broader treatment sessions for targeted relief.

**7. Graston Technique**
<!-- placeholder copy pending client review -->
Instrument-assisted soft tissue mobilization that breaks down scar tissue and fascial adhesions. Stainless steel tools allow precise treatment of chronic tendinopathies, post-surgical scarring, and overuse injuries.

**8. Compression Boots**
<!-- placeholder copy pending client review -->
Sequential pneumatic compression that flushes metabolic waste, reduces swelling, and enhances circulation in the lower extremities. Used for athletic recovery, post-surgical edema management, and general wellness.

**9. PEMF Mat Therapy**
<!-- placeholder copy pending client review -->
Pulsed electromagnetic field therapy delivered through a full-body mat to promote cellular repair, reduce inflammation, and support bone and tissue healing at a systemic level.

**10. Red Light Therapy**
<!-- placeholder copy pending client review -->
Near-infrared and red wavelength light panels used to stimulate mitochondrial function, reduce inflammation, and accelerate tissue repair. Applied locally or as full-body exposure depending on treatment goals.

## Placeholder Content

### Dr. Mancuso Bio
Dr. Alexandra Mancuso completed her Bachelor's degree in Psychology at the University of North Carolina Wilmington and went on to obtain a Doctorate in Physical Therapy from the University of St. Augustine in Miami, FL. With a background in psychology, she prioritizes addressing patients' mental and emotional needs alongside their physical treatment. She opened BodyWRX in 2024 to bring a more personal, focused approach to physical therapy in Tampa.

### Testimonials
<!-- placeholder copy pending client review -->

**Testimonial 1**
"I had been to three different PTs before finding BodyWRX. The difference was immediate. Dr. Mancuso actually listened, spent the full hour working with me, and within six weeks I was back to running without pain."
-- Sarah K., Tampa

**Testimonial 2**
"After my ACL reconstruction, I needed someone who would take the time to do it right. Dr. Mancuso never rushed a single session. My surgeon said my recovery was ahead of schedule."
-- Marcus T., South Tampa

**Testimonial 3**
"I came in for chronic lower back pain that I had dealt with for years. What stood out was how thorough the evaluation was. She found things no one else had caught. I finally feel like I understand my body."
-- Jennifer L., Westchase

**Testimonial 4**
"The combination of manual therapy and corrective exercises changed everything for me. I went from barely being able to lift overhead to training pain-free. Cannot recommend enough."
-- David R., Tampa

**Testimonial 5**
"As someone who is particular about the quality of care I receive, BodyWRX exceeded every expectation. The space is beautiful, the treatment is world-class, and you never feel like just another patient."
-- Natalie P., Hyde Park

## Integrations

- **Email:** Resend (transactional form submissions from /contact)
- **Hosting:** Vercel
- **Analytics:** Google Analytics (GA4 ID: pending)
- **Search Console:** Google Search Console (verification: pending)
- **Google Business Profile:** pending

## Content Status

- [x] Business bio / owner bio: FINAL (client provided)
- [x] Credentials: FINAL, only Doctor of Physical Therapy
- [ ] Testimonials: HIDDEN from live site, will re-enable when real testimonials arrive
- [x] Logo files: confirmed (wordmark in public/)
- [x] Owner portrait: confirmed (in public/images/)
- [x] Sender email: confirmed as contact@bodywrxpt.com, Resend domain verification pending
- [ ] Google Business Profile: DOES NOT EXIST, needs to be created before launch
- [ ] Domain connected
- [ ] GA4 ID provided
- [ ] Google Search Console verified

## Blocking Items for Launch

- Domain status (bodywrxpt.com ownership to be confirmed with client)
- Google Business Profile creation
- Resend domain verification

## Nice-to-Have (Post-Launch)

- Testimonials page (real testimonials needed from client, placeholder content and code preserved for quick restoration)

## Notes

- Cash-pay only, no insurance. Do not reference insurance anywhere on the site.
- Contact form sends inquiries through Resend. No embedded scheduling tool.
- No em dashes in any copy. Use double hyphens (--) or rewrite.
- All placeholder copy is marked with HTML comments for easy search: `<!-- placeholder copy pending client review -->`
