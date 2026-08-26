# Vicky Paterson — Portfolio

A React + Vite portfolio built around three [React Bits](https://reactbits.dev) components:

- **Lanyard** — a physics-driven ID badge used as the loading screen (drag it, or wait ~3.2s and it fades into the site).
- **Threads** — an animated WebGL line field used as the site's ambient background.
- **TargetCursor** — a custom snap-to-target cursor that locks onto anything with the `cursor-target` class (nav links, buttons, project cards, skill tags).

Content (bio, pipeline, projects, skills) is drawn from your research work — SideGen, the pan-cancer immune exclusion study, the Open Targets/ChEMBL genetic evidence manuscript, TrialSight, and omicsync.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build in `dist/`.

## Add your photo

Drop a headshot at `src/assets/photo.jpg` (any name/extension is fine), then in `src/App.jsx`:

```js
import photo from './assets/photo.jpg';
const PHOTO_URL = photo;
```

That single constant feeds both the About section's photo frame and the front face of the Lanyard badge (`frontImage` prop) — no need to touch either component. Until you set it, the badge falls back to its default texture and the About section shows a placeholder frame.

## Structure

```
src/
  components/
    Lanyard/        # badge + physics + card.glb + lanyard.png (real assets, pulled from react-bits)
    Threads/         # background shader
    TargetCursor/    # cursor
  sections/
    Sections.jsx     # Nav, Hero, About, Pipeline, Projects, Skills, Contact, Footer
  App.jsx            # loader sequence + page composition
  App.css            # layout & section styling
  index.css          # design tokens (teal/navy palette, Space Grotesk + JetBrains Mono)
```

## Editing content

Everything text-based lives in `src/sections/Sections.jsx` as plain arrays/constants (`PIPELINE_STAGES`, `PROJECTS`, `SKILL_GROUPS`) — edit those directly rather than hunting through JSX.

## Notes

- `vite.config.js` has `assetsInclude: ['**/*.glb']` so the badge model bundles correctly.
- The cursor auto-disables itself on mobile/touch devices (matches the component's built-in behavior).
- Bundle is a bit heavy (~3.6MB JS, mostly three.js/rapier/ogl/gsap) — normal for this stack; consider lazy-loading the Lanyard loader if you want to trim initial load later.
