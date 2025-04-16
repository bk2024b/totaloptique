Total Optique Website
Overview
This is a modern, responsive website for Total Optique, an optician based in Cotonou, Benin. The site is designed to help Total Optique attract new clients, showcase their services, and facilitate appointment bookings via WhatsApp. The project was developed as part of a freelance web development contract for a budget of 50,000 CFA, with a delivery deadline of April 29, 2025.
The website consists of 3 pages:

Homepage: Introduces Total Optique with a slogan, a hero image, a "Why Choose Us" section, and a call-to-action (CTA) to book an appointment.
Services Page: Lists the main services offered by Total Optique (eye exams, glasses, contact lenses) with descriptions and a CTA.
Contact Page: Provides contact details (WhatsApp, email, address) and a CTA to reach out via WhatsApp.

Features

Responsive Design: Mobile-first design using Tailwind CSS, ensuring the site looks great on all devices.
Fast Loading: Optimized for a loading speed of under 2 seconds, tested with Google PageSpeed Insights.
WhatsApp Integration: Direct links to WhatsApp for easy appointment booking and communication.
Modern Aesthetics: Inspired by Total Optique’s logo with a color scheme of blue (#1E3A8A), red (#FF0000), white (#FFFFFF), and light blue (#60A5FA), using the Roboto font.

Tech Stack

Framework: Next.js (React framework for server-side rendering and fast performance).
Styling: Tailwind CSS (utility-first CSS framework for rapid and responsive design).
Deployment: Vercel (for hosting and automatic scaling).
Design Tools: Figma and V0 (for initial mockups and design generation).
Version Control: GitHub (for code management).
Performance: Google PageSpeed Insights (for speed optimization).

Project Structure
/total-optique
├── app/
│   ├── page.js              # Homepage
│   ├── services/
│   │   └── page.js          # Services page
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── components/
│   │   ├── Header.js        # Reusable header component
│   │   └── Footer.js        # Reusable footer component
│   └── layout.js            # Root layout (includes global styles and fonts)
├── public/                  # Static assets (images, icons, etc.)
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Project dependencies
└── README.md                # Project documentation

Installation

Clone the repository:git clone https://github.com/[your-username]/total-optique.git


Navigate to the project directory:cd total-optique


Install dependencies:npm install


Run the development server:npm run dev


Open http://localhost:3000 in your browser to view the site.

Deployment
The site is deployed on Vercel for live access:

Live URL: [Add your Vercel URL here after deployment, e.g., https://total-optique.vercel.app]
To deploy your own version:
Push your changes to GitHub.
Link your GitHub repository to Vercel.
Vercel will automatically build and deploy the site.



Pages and Features
Homepage

Header: Logo and navigation (Home, Services, Contact).
Hero Section: Slogan “Your Vision, Our Priority”, placeholder image, WhatsApp CTA button.
Why Choose Us: Highlights 3 key benefits (eye exams, glasses, customer service).
CTA Section: Encourages users to contact via WhatsApp.
Footer: Copyright, navigation links, and contact info.

Services Page

Header: Reused from the homepage.
Main Section: Lists 3 services (Eye Exams, Glasses, Contact Lenses) with icons and descriptions.
CTA Section: WhatsApp button to book an appointment.
Footer: Reused from the homepage.

Contact Page

Header: Reused from the homepage.
Main Section: Contact details (WhatsApp, email, address) with clickable links.
CTA Section: WhatsApp button to reach out directly.
Footer: Reused from the homepage.

Customization

Content: Update the placeholder content (slogans, service descriptions, contact details) based on Total Optique’s responses to the questionnaire sent on April 15, 2025.
Images and Icons: Replace placeholder images and icons with real assets (e.g., photos of Total Optique’s shop or products, icons from Flaticon or FontAwesome).
Colors: Adjust the color scheme in tailwind.config.js if Total Optique requests different colors.

Future Improvements

Add a gallery section to showcase Total Optique’s glasses (potential upsell discussed with the client).
Integrate a form for appointment bookings (if Supabase is used for backend functionality).
Add SEO metadata to improve search engine visibility (e.g., meta tags in layout.js).

Contact
For any questions or collaboration inquiries:

Developer: Josias, Freelance Web Developer
WhatsApp: [Your WhatsApp number]
Email: [Your email]


Built with ❤️ for Total Optique by Josias
