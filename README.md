# Gokul K J — Portfolio

Personal portfolio website for Gokul K J, a Cybersecurity graduate and developer. Built with plain HTML, CSS, and JavaScript — no framework, no build step.

🔗 Live site: [gokulkj.vercel.app](https://gokulkj.vercel.app)

## Features

- Animated overview/status panel (uptime clock, "SECURE" status, last scan)
- Skills, education, certifications, and research publication sections
- Project showcase with tags and GitHub links
- Event gallery
- Downloadable resume

## Tech Stack

- HTML5
- CSS3 (custom, no framework)
- Vanilla JavaScript
- Hosted on [Vercel](https://vercel.com)

## Project Structure

```
portfolio-v3/
├── index.html      # Page markup and section layout
├── style.css       # All styling
├── script.js       # Interactivity (animations, dynamic rendering, etc.)
├── data.js         # Editable content: skills, education, certs, projects, research
└── assets/         # Images, certificates, resume, and other PDFs
```

## Editing Content

Most of the personal content (skills, education, certifications, projects, research) lives in **`data.js`** as plain JavaScript arrays/objects — update the values there to change what's shown on the site, no need to touch the HTML.

To update the resume, replace `assets/Gokul_KJ_Resume.pdf` with a new file of the same name (or update the link in `index.html` if you rename it).

## Running Locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve the folder locally, e.g.:
  ```bash
  npx serve .
  ```

## Deployment

Deployed on Vercel as a static site — push to the connected repo/branch, or drag-and-drop the folder into the Vercel dashboard.

## Contact

- 📧 gkj789878@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/gokul-kj-0b0a68334)
- 💻 [GitHub](https://github.com/gkj7)
