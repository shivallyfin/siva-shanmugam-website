# Dr. Siva Shanmugam C | Academic Portfolio & Blog

A premium, data-driven academic portfolio and blog website built for **Dr. Siva Shanmugam C**, Dean & Professor at the School of Management, Sapthagiri NPS University, Bengaluru. 

This portfolio is designed to be fully configuration-driven, allowing for easy updates to courses, publications, career milestones, events, and blogs via a single data file.

---

## 🚀 Key Features

*   **Premium Dark-Theme Design:** Modern, sleek interface with glassmorphism effects and clean typography.
*   **Fully Responsive Layout:** Optimizes automatically for mobile, tablet, and desktop screens.
*   **Data-Driven Architecture:** The entire website's content is central-configured in `src/data/profile.js`.
*   **Academic Timeline:** Clean chronological biography and career milestones.
*   **Publications & Research Engine:** Search/filter publications with collapsible abstracts and one-click copyable BibTeX references.
*   **Teaching & Syllabi:** Interactive listings of current courses, downloadable syllabi slots, and PhD/Postgraduate advising coordinates.
*   **Events & Photo Gallery:** An interactive carousel-based gallery showcasing campus life, masterclasses, expos, and felicitation events with zero layout crops.
*   **Academic Blog:** Fully functional blog engine featuring tag sorting, read-time estimations, and a customized inline markdown parser.
*   **Secure Contact Portal:** A stylized communication panel displaying email coordinates, office locations, and form states.

---

## 📁 Repository Structure

```text
├── public/
│   ├── assets/          # Centralized repository for images (avatar, posters, photos)
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src/
│   ├── components/      # Shared layout components (Navbar, Footer)
│   ├── context/         # React Context mapping dark mode state
│   ├── data/
│   │   └── profile.js   # Single Source of Truth configuration database
│   ├── pages/           # Page modules (Home, About, Research, Teaching, Events, Blog, BlogPost, Contact)
│   ├── App.js           # Client-side router definition
│   ├── index.js         # Virtual DOM mount
│   └── index.css        # Vanilla CSS utility and typography system
├── package.json
└── README.md
```

---

## ⚙️ Content Management (Updating the Site)

To update any content on the website, simply edit the file:
👉 **[src/data/profile.js](file:///Users/bhaveshmrakthe/Desktop/Freelance/siva-shanmugam-website/src/data/profile.js)**

### 1. Updating Profile & Coordinates
Edit the `personalInfo` object at the top of the file to modify email addresses, office rooms, socials, or the biography image path:
```javascript
personalInfo: {
  name: "Dr. Siva Shanmugam C",
  title: "Professor of Corporate Finance & Management Studies",
  institution: "Sapthagiri NPS University",
  email: "siva.shanmugam@snpsu.edu.in",
  avatar: "/assets/siva-pic.jpg",
  // ...
}
```

### 2. Adding a Publication
Add a new object inside the `publications` array. The BibTeX entry will automatically format with a one-click copy button:
```javascript
{
  id: "pub-x",
  title: "New Research Paper Title",
  authors: "Siva Shanmugam C, et al.",
  journal: "International Journal of Finance",
  year: "2026",
  abstract: "This paper investigates empirical correlations...",
  bibtex: `@article{siva2026new,
  title={New Research Paper Title},
  author={Siva Shanmugam C},
  journal={International Journal of Finance},
  year={2026}
}`
}
```

### 3. Adding an Event or Photo Carousel
To add campus masterclasses or event flyers, drop the JPEG images inside `public/assets/` and add them to the `events` array:
```javascript
{
  id: "ev-x",
  title: "New Academic Felicitation",
  category: "Academic",
  date: "July 2026",
  time: "10:30 AM",
  venue: "Seminar Hall, Sapthagiri NPS University",
  images: ["/assets/event-pic-1.jpg", "/assets/event-pic-2.jpg"], // Supports carousel slide
  description: "Detailed summary of the campus felicitation..."
}
```

### 4. Writing a Blog Post
Add a new post inside the `blogs` array using standard template literals. Custom backticks can be escaped inside:
```javascript
{
  id: "blog-x",
  title: "Title of the Post",
  date: "July 2, 2026",
  readTime: "4 min read",
  tags: ["Corporate Finance", "Business Strategy"],
  summary: "Brief intro card summary...",
  content: `### Heading
Your article content goes here in standard markdown format.`
}
```

---

## 🛠️ Commands

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for performance.
