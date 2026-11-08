# PRONEAR Website README

## Project Overview

PRONEAR is a modern static beauty-services booking website designed to help users find local beauty professionals for hair, makeup, and nail services. The website is built as a front-end landing and booking platform that allows users to explore service categories, view beauty professionals near them, submit enquiries, and contact the business through a clean, mobile-friendly interface.

The project uses plain HTML, CSS, and JavaScript to create a responsive website without any backend framework or database. It is designed to function as a lightweight, easy-to-host static website that can be opened locally or deployed to a static hosting service.

---

## Website Purpose

The business goal of PRONEAR is to connect customers with nearby beauty professionals based on service type, location, and budget. The website is structured to:

- showcase the main beauty service categories
- explain how the booking process works
- highlight featured professionals near the user
- provide a gallery for service inspiration
- allow user enquiries and contact requests
- support mobile and desktop browsing

---

## Main Features

### 1. Home landing page
The main landing page introduces the brand and key value proposition. It includes:

- a bold hero section with a headline and call-to-action buttons
- service cards for hair, makeup, and nails
- a step-by-step section explaining how PRONEAR works
- a professionals section showing nearby beauty specialists
- links to the booking and enquiry pages
- footer contact details and email link

### 2. Responsive navigation
The site includes a mobile-friendly navigation menu that collapses for smaller screens. JavaScript toggles the menu open and closed, allowing the layout to remain clean on phones and tablets.

### 3. Service category cards
Each service card includes:

- an image
- a service title
- a short description
- a call-to-action button linking to booking flow

### 4. Beauty professional profiles
The homepage includes a section featuring local professionals with details such as:

- profile image
- name
- profession
- distance from the user
- starting price
- rating
- review count

These cards open a profile modal when clicked, giving users more information in a user-friendly popup window.

### 5. Booking page
The booking page allows users to:

- browse booking options
- select a service or enquiry type
- enter appointment details
- choose a preferred date or service type
- submit a request

The form is validated before sending, and users are shown helpful error messages if something is missing or incorrect.

### 6. Contact and enquiry pages
The website contains dedicated pages for:

- general enquiries
- business contact information
- support and feedback form submission

The forms validate user input and then open the user’s default email client using a mailto link so the message is prepared for sending.

### 7. Form validation and user feedback
JavaScript ensures that required form fields are properly completed. Form validation includes checks for:

- empty required fields
- invalid email format
- invalid phone format
- short names
- short messages
- past dates for booking requests

Validation messages are displayed in a user-friendly format to improve usability.

### 8. Mail client integration
Instead of sending data to a server, the website uses a mailto link generated with JavaScript. This means the message opens in the visitor’s default email app, such as Gmail or Outlook, with the form details already filled in.

---

## Pages Included

### index.html
This is the main home page and hero landing page. It includes the top navigation, service highlight section, booking journey section, local beauty professionals section, and footer.

### about.html
This page explains what PRONEAR is, how it operates, and what makes the service useful to everyday beauty customers. It is structured to establish trust and communicate the brand value.

### book.html
This page is focused on bookings. It contains a booking form, service selection areas, and general information for users who want to reserve a service.

### enquiry.html
This page gives visitors a form to ask questions or request more information about beauty services, packages, or availability. It is designed for customer support and conversion.

### contact.html
This page contains contact information and a direct message form for customers who need assistance or want to talk to the business.

---

## Project Structure

```text
ProNearWebsite_2/
├── about.html
├── book.html
├── contact.html
├── enquiry.html
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── heroimage.png
│   ├── hairimage.png
│   ├── makeupimage.png
│   ├── nailimage.png
│   ├── skincaremage.png
│   ├── TashaM.png
│   ├── nadia.png
│   ├── zee.png
│   └── ...
├── js/
│   └── script.js
├── README.md
└── wede5020-2026-part-2-egbescarlettsch-rgb/
    └── duplicate copy of the site files
```

---

## Technologies Used

### Front-end technologies
- HTML5
- CSS3
- JavaScript

### Design approach
- custom CSS layout and component styling
- responsive media queries
- interactive UI states and user feedback
- accessible semantic HTML structure

---

## Styling and UI Design

The website uses a soft, modern beauty-brand palette with a mix of:

- pink for warm, feminine branding
- blue for trust and professionalism
- yellow for highlight accents
- white and light grey backgrounds for clean layouts

The CSS contains several sections for:

- global layout and colours
- header and navigation
- buttons and call-to-action elements
- cards and sections
- forms and validation states
- modals and profile popups
- responsive breakpoints for mobile devices

---

## JavaScript Behavior

The main interactive logic lives in js/script.js and handles the following:

### Navigation behavior
- mobile menu open/close functionality
- menu closings on resize or page click

### Form validation
- checks each field before submission
- adds invalid styling to incorrect inputs
- displays custom feedback messages

### Email sending behavior
- composes a mailto link with the form data
- opens the user’s default email app
- includes the visitor’s name, email, phone number, and message

### Profile modal behavior
- opens a popup with more information about a selected beauty professional
- allows the user to close the modal using a close button

### Service filtering and display logic
The code includes a small service catalog and filter logic for dynamic card rendering when a user interacts with booking-related content.

---

## Accessibility Notes

The site has been designed with several accessibility considerations, including:

- semantic page structure
- descriptive alt text on images
- form labels paired with inputs
- keyboard-friendly buttons and links
- aria attributes for the navigation toggle and profile modal
- visible validation feedback and alert messaging

---

## Local Setup Instructions

### Option 1: Open directly in the browser
1. Download or open the project folder.
2. Double-click on index.html in your file explorer.
3. The website will open in the default browser.

### Option 2: Run a local web server
This is the preferred option if you want a more realistic browser setup.

Using Python:

```bash
cd "C:/Users/emeris/Documents/web dev/ProNearWebsite_2"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using VS Code Live Server extension is also a good option if preferred.

---

## Deployment Notes

Because this is a static website, it can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- any basic static hosting provider

No server-side setup is required for basic website viewing. The only real browser-based functionality is the mailto email flow, which depends on the user’s device and default email application.

---

## Browser Compatibility

The project is designed to work on modern browsers such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Customization Guidance

### Updating colours
Edit the CSS variables or relevant selectors in css/style.css.

### Replacing images
Replace the files in the images folder with new versions of the same names or update the HTML image sources.

### Editing contact details
Update the email, phone numbers, address, or social media details directly in the HTML files.

### Updating the brand text
Modify the headline text and body copy in the HTML files to align with a different business or tone.

---

## Notes and Limitations

- This is a front-end static website only; it does not have a real backend database or email server.
- Form submission is implemented in-browser and opens the user’s email client rather than storing submissions in a database.
- Image assets are local files, so they must remain in the correct folder paths to function properly.
- For a production booking system, a real backend with database storage and email integration would be needed.

---

## Summary

PRONEAR is a stylish, user-friendly beauty booking website built with HTML, CSS, and JavaScript. It presents a local beauty marketplace concept, supports mobile responsiveness, includes gallery and booking functionality, and provides meaningful validation and email integration for real user interaction. It is ideal as a static website prototype or a lightweight marketing and lead-generation platform for a beauty business.

---

## Project Status

The website is fully functional as a static front-end project and includes:

- responsive layout
- service-focused content
- professional profile cards
- enquiry and contact forms
- validation and feedback
- email client integration
- polished design and branding

This README was created to document the project clearly for future updates, presentation, and deployment.
