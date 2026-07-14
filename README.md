# pico-folio

My personal portfolio site, built with React and deployed on GitHub Pages.

**Live site:** [alewi104.github.io/pico-folio](https://alewi104.github.io/pico-folio/)

## About

pico-folio showcases my projects, resume, and background as a computer science student. It's a single-page application with client-side routing, built to be fast, responsive, and easy to extend as I add new work.

## Features

- **Home** — landing page with an intro and quick links
- **Projects** — a browsable list of projects, each with its own detail page
- **Resume** — my resume, viewable directly on the site
- **About / Contact** — in-page sections for background info and ways to reach me
- Responsive navbar with a collapsible menu for mobile screens

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool and dev server
- [React Router](https://reactrouter.com/) — client-side routing
- [Bootstrap](https://getbootstrap.com/) — base navbar and card styling
- [GitHub Pages](https://pages.github.com/) — hosting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/alewi104/pico-folio.git
cd pico-folio
npm install
```

### Development

Run the local dev server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/pico-folio/` (or wherever Vite prints).

### Build

Create a production build:

```bash
npm run build
```

### Deploy

This project deploys to GitHub Pages. Once built, the `dist/` folder is published to the `gh-pages` branch (or your configured deploy workflow):

```bash
npm run deploy
```

> **Note:** Because this is a single-page app hosted on GitHub Pages (which has no server-side routing), direct navigation to routes like `/projects` is handled via a `404.html` redirect trick. See `public/404.html` and the restore script in `index.html` if you're modifying routing behavior.

## Contact

Feel free to reach out via the Contact section on the site, or find me on [GitHub](https://github.com/alewi104).

## License

This project is open source and available under the [MIT License](LICENSE).
