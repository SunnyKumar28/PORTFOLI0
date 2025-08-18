# Sunny Kumar – Portfolio

A personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Live Site
[Portfolio Website](https://portfoli0-ten-liard.vercel.app/)


## Tech Stack
- React + Vite + TypeScript
- Tailwind CSS
- Lucide Icons

## Getting Started
1. Install Node.js (version 18+ recommended)
2. Install dependencies:
   - `npm install`
3. Run the development server:
   - `npm run dev`
4. Build for production:
   - `npm run build`
5. Preview the production build locally:
   - `npm run preview`

## Project Structure
- `src/components/` – UI sections (Hero, About, Experience, Projects, Skills, Achievements, Footer)
- `src/` – App entry (`main.tsx`), styles (`index.css`), and app shell (`App.tsx`)
- `index.html` – Vite HTML entry
- `dist/` – Production build output (generated)

## Images & Assets
- For images, either:
  - Import them in components (e.g., `import photo from './Sunny_Image.jpg'`), or
  - Place static files in a `public/` folder and reference by path (e.g., `/photo.jpg`).

## Deploying to Render (Static Site)
- Service Type: Static Site
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- No start command needed for a static site.

If you deploy as a Web Service instead, serve the built `dist` folder with a static server.

## Scripts
- `dev` – start development server
- `build` – build production assets to `dist`
- `preview` – preview the production build locally

## License
This project is for personal portfolio use.
