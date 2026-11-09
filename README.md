# Name : Scarlett Egbe 
# STUDENT NUMBER  : ST10538726
# module  : WEDE5020

# PRONEAR — Beauty Website
**Module:** WEDE5020 – Web Development 
**Parts:** Part 2 & Part 3

**Live Site:** https://egbescarlettsch-rgb.github.io/pronearwebsite/index.html

**Repository for part 3:** https://github.com/EMGPSD/wede5020-2026-part-3-egbescarlettsch-rgb.git

**Repository for part 2 :** https://github.com/EMGPSD/wede5020-2026-part-2-egbescarlettsch-rgb

## 2. About ProNear
ProNear was founded in 2019 by Scarlett Egbe, a university student who noticed
that local businesses were struggling to connect with customers nearby.

It started as a small WhatsApp directory in Sandton, listing trusted beauty
professionals in the area. It grew because it made finding reliable services
“near you” simple and fast.

By 2021, ProNear had expanded into a full mobile app with verified listings,
reviews, and instant booking for hairstylists and makeup artists.

Today, ProNear serves thousands of users across Gauteng and is known for
supporting small businesses and building stronger local communities. The
mission has stayed the same: to bring people closer to the services they
need, right in their neighbourhood.
### Mission
To connect people with trusted beauty professionals and salons near them,
making self-care and beauty services accessible, convenient, and personal.

### Vision
A world where everyone feels confident and cared for by discovering the best
local beauty talent right in their community.

### Target Audience

**1. Women 18–45 (Core Audience)**
The primary audience. Women who are passionate about beauty, self-care and
personal grooming, and who want high-quality, reliable services that help
them feel confident.

**2. Working Professionals 25–45**
Busy professionals who need efficient, long-lasting beauty solutions that
fit into a demanding lifestyle. They value premium quality and are willing
to invest in services that save time and deliver professional results.

**3. Beauty Business Owners 18+**
Salon owners, makeup artists and beauty entrepreneurs who need professional-grade
tools and services for their clients. They look for trusted platforms that
offer quality, consistency and good value for business growth.

**4. Students & Young Adults 16–24**
Trend-driven young adults who are highly active on social media and enjoy
trying new beauty looks. They are budget-conscious but aspirational, and
look for affordable services that are stylish and effective.

## 3. Pages

- **Home** — `index.html` — Hero section, brand introduction, featured services
- **About** — `about.html` — Brand story and values
- **Book** — `book.html` — Services, pricing and booking form
- **Gallery** — `gallery.html` — Interactive image gallery
- **Contact / Enquiry** — `contact.html` / `enquiry.html` — Contact details and enquiry form
- 
## 4. Project Structure
- pronearwebsite/
├── index.html
├── about.html
├── book.html
├── contact.html
├── enquiry.html
├── gallery.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md

**Colour and Typography:** A consistent colour palette was used across all
pages to maintain brand identity. Headings were styled for clear hierarchy,
and body text uses a line-height of 1.6 for readability.

**Responsive Design:** Media queries were applied at 1024px, 768px and
480px. On smaller screens, multi-column layouts collapse to a single column,
navigation changes to a hamburger menu, typography scales down, and images
resize to prevent overflow.

## 6. Website Features

### User Features

**1. Browse Services**
Users can view a list of beauty services with descriptions and pricing,
presented in card layouts so it is easy to compare treatments.

**2. Interactive Gallery**
An image gallery showing hairstyles, makeup looks and salon work. Users
can browse images to get an idea of the quality and style of services offered.

**3. Booking / Enquiry Forms**
Users can request a booking or send an enquiry directly from the site.
Forms include fields for name, contact details, service required and preferred date.

**4. Find Services Near You**
The site is built around the ProNear concept of connecting users with trusted
beauty professionals and salons in their local area, starting with Sandton
and across Gauteng.

**5. Business Listings Concept**
The site showcases how verified professionals and salons would be listed,
with a focus on trust, reviews and supporting small local businesses.

### Technical Features

**6. Fully Responsive Layout**
The site adapts to desktop, tablet and mobile using Flexbox, Grid and media queries.

**7. Mobile Hamburger Menu**
Navigation changes to a hamburger menu on smaller screens, with a dropdown
that opens and closes using JavaScript.

**8. Interactive States**
Buttons, links and form fields include `:hover`, `:focus` and `:active`
states. `:focus` helps keyboard users see where they are on the page,
while `:active` gives feedback when a button is tapped.

**9. Consistent Header and Footer**
Every page uses the same header and footer, so navigation is familiar and
users do not get lost.

**10. Optimised Images**
Images use `max-width: 100%`, `height: auto` and `object-fit: cover` so
they do not stretch, crop badly or cause horizontal scrolling on mobile.

**11. Accessible Touch Targets**
Buttons and links have a minimum size of 44px on mobile, making them easier
to tap accurately on touch devices.

## 8. Challenges Faced

The most difficult part of this project was not the coding itself, but
deploying the website and pushing to GitHub.

**Pushing to GitHub:**
My pushes kept failing, and I initially thought I had done something wrong
in VS Code. After checking my project structure, I realised there was a
broken folder inside the project named `wede5020-2026-part-2-egbescarlettsch-rgb`.
It was being treated as a submodule, which prevented Git from pushing
correctly and returned the error `fatal: in unpopulated submodule`.

**Deployment:**
Because of the same issue, the GitHub Pages build also failed and the site
would not go live, even though the code worked locally.

**Solution:**
I removed the folder from Git tracking with `git rm --cached`, deleted the
folder itself, committed the change and pushed again. After this, the push
was successful and GitHub Pages deployed the site correctly.

This taught me to check the project structure carefully before pushing, and
to avoid nesting one repository inside another.

## 9. Change Log — Feedback from Part 2 Addressed in Part 3

Feedback for Part 2 noted that the desktop styling was well structured, but
the responsive design needed further refinement, particularly for typography,
navigation and interactive states.

The following changes were made:

**1. Typography on Mobile**
Previously, the media queries mainly adjusted layout, with limited changes
to text size. Font sizes and line-heights for headings, paragraphs and links
were adjusted at 768px and 480px to improve readability on smaller screens.

**2. Navigation Responsiveness**
Previously, navigation simply stacked on smaller screens. It was updated to
a functional hamburger menu: horizontal navigation on desktop, and a
full-width vertical dropdown menu on mobile, toggled with JavaScript.

**3. Additional Pseudo-classes**
Previously, only `:hover` was used. `:focus` was added for keyboard
accessibility, with a visible outline for links, buttons and form fields.
`:active` was added to provide visual feedback when buttons and links are
tapped or clicked.

**4. Image Presentation**
All images were set to `max-width: 100%`, `height: auto` and
`object-fit: cover` to prevent stretching and overflow. Gallery and card
images were tested at 360px, 768px and 1024px.

**5. Touch Usability**
Interactive elements were increased to a minimum touch target of 44px,
with increased padding on mobile, to make them easier to use on touch devices.

## 12. Future Improvements

- Add JavaScript form validation with clear error messages
- Implement a working booking confirmation
- Add lazy-loading for gallery images to improve load time
- Complete an alt-text audit for full accessibility compliance

- Montoro, A. (n.d.) Creating an interactive image gallery with HTML and CSS. Available at: https://dev.to/alvaromontoro/creating-an-interactive-image-gallery-with-html-and-css-35pi (Accessed: 7 November 2026).

- Sookha, J. (2026) WEDE2026. Available at: https://github.com/jesselsookha/WEDE2026 (Accessed: 9 November 2026). Available online

- MySitemapGenerator (n.d.) Free Sitemap Generator. Available at: https://www.mysitemapgenerator.com/ (Accessed: 8 November 2026). Available online

- Pexels (n.d.) Free Stock Photos. Available at: https://www.pexels.com/ (Accessed: 5 November 2026). Available online

- Unsplash (n.d.) Royalty-Free Stock Images. Available at: https://unsplash.com/images/stock/royalty-free (Accessed: 7 November 2026). Available online

- W3Schools (n.d.) HTML, CSS and JavaScript Tutorials. Available at: https://www.w3schools.com/ (Accessed: 9 November 2026). Available online

  ## AI DECLARATION
  I was used in Part 3 of this assignment, when I was trying to publish my website and commit my files.
  Microsoft (2026) Visual Studio Code - Built-in AI / Copilot. [AI coding assistant]. Available at: https://code.visualstudio.com [Accessed 9 November 2026]
  AI was used to help me with my files when I was trying to publish my website, as well as to help me with committing my files because I was getting errors.
   The AI helped me to check my file structure, check my GitHub Pages settings, and fix the errors I was getting when committing. All design decisions, content and final code were checked and approved by me.
  
  Below are provided screenshots attached.
     <img width="707" height="771" alt="Screenshot 2026-11-09 100334" src="https://github.com/user-attachments/assets/f4a2cbaa-8cf6-4899-a5e1-b27595fa6e14" />
     <img width="667" height="583" alt="Screenshot 2026-11-08 151205" src="https://github.com/user-attachments/assets/a01a07fe-7390-4797-8769-99e08e18b7e7" />
<img width="665" height="624" alt="Screenshot 2026-11-08 151222" src="https://github.com/user-attachments/assets/5a4d0b14-7742-4765-b843-201adfd32c99" />


##  Screenshots of the website on a phone vs a desktop
- <img width="1906" height="969" alt="Screenshot 2026-11-09 123508" src="https://github.com/user-attachments/assets/7c8f5b06-7d98-4e19-ab65-1386a89bf976" /> Contact form on a desktop
- <img width="739" height="1600" alt="WhatsApp Image 2026-11-09 at 12 36 27" src="https://github.com/user-attachments/assets/613232a0-7cbb-4bab-abd7-a16c76b2aaf6" /> Contact form on a mobile phone

- <img width="739" height="1600" alt="WhatsApp Image 2026-11-09 at 12 36 27 (3)" src="https://github.com/user-attachments/assets/e3afdc8b-4962-484b-bf8b-a66c677d5f46" /> Home page on a mobile phone
- <img width="1909" height="995" alt="Screenshot 2026-11-09 123249" src="https://github.com/user-attachments/assets/050a4039-f869-49eb-a409-20d6fa99c906" /> Home page on a desktop

- <img width="1919" height="928" alt="Screenshot 2026-11-09 123303" src="https://github.com/user-attachments/assets/c19e308e-80d9-4f43-a500-968e6f9c9b26" /> individual artist popup on a desktop
- <img width="739" height="1600" alt="WhatsApp Image 2026-11-09 at 12 36 27 (2)" src="https://github.com/user-attachments/assets/800fa5b2-ffaa-4e0f-9ae4-cff3cea97eb7" /> individual artist popup on a mobile phone

- 









- 



