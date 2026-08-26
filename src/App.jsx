import { useEffect, useState } from 'react';
import Lanyard from './components/Lanyard/Lanyard';
import TargetCursor from './components/TargetCursor/TargetCursor';
import Threads from './components/Threads/Threads';
import {
  Nav,
  Hero,
  About,
  TracksAndWork,
  Skills,
  Contact,
  Footer
} from './sections/Sections';
import './App.css';
import photo from './assets/photo.jpg';
// ---------------------------------------------------------------------------
// Drop your headshot at src/assets/photo.jpg (or .png), then point PHOTO_URL
// at it, e.g.:
//   import photo from './assets/photo.jpg';
//   const PHOTO_URL = photo;
// It's used both on the ID badge (Lanyard frontImage) and in the About
// section. Leave it null to keep the badge's default texture and the About
// section's placeholder frame.
// ---------------------------------------------------------------------------
const PHOTO_URL = photo;
const MIN_LOADER_MS = 3200;

export default function App() {
  const [entered, setEntered] = useState(false);
  const [dismissing, setDismissing] = useState(false);

  const handleEnter = () => {
    if (dismissing) return;
    setDismissing(true);
    setTimeout(() => setEntered(true), 650);
  };

  useEffect(() => {
    if (entered) return undefined;
    const timer = setTimeout(handleEnter, MIN_LOADER_MS + 1400);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entered]);

  useEffect(() => {
    if (!entered) return undefined;
    const targets = document.querySelectorAll('.about, .tracks, .work, .skills, .contact');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [entered]);

  return (
    <>
      <TargetCursor spinDuration={2.4} cursorColor="#4fd8c4" cursorColorOnTarget="#8ff0dd" />

      {!entered && (
        <div className={`loader ${dismissing ? 'loader--out' : ''}`} aria-hidden={entered}>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} frontImage={PHOTO_URL} />
          <div className="loader__foreground">
            <p className="loader__eyebrow eyebrow">Loading portfolio</p>
            <p className="loader__hint">Drag the badge, or wait a moment</p>
            <button type="button" className="loader__skip cursor-target" onClick={handleEnter}>
              Enter site →
            </button>
          </div>
        </div>
      )}

      {entered && (
        <div className="site">
          <div className="site__bg" aria-hidden="true">
            <Threads color={[0.19, 0.48, 0.45]} amplitude={1.4} distance={0.25} enableMouseInteraction />
          </div>
          <div className="site__content">
            <Nav />
            <main>
              <Hero />
              <About photoUrl={PHOTO_URL} />
              <TracksAndWork />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
