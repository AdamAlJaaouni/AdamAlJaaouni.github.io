import { useEffect, useLayoutEffect, useRef, useState } from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import useTilt from "../hooks/useTilt";
import { links } from "../data";

const resumeHref = `${import.meta.env.BASE_URL}${links.resumePdf}`;
// px of pointer travel (down to up) before a click stops counting as a tap.
// Fingers wobble more than mice.
const DRAG_TOLERANCE = { mouse: 6, touch: 12, pen: 8 };
const DOUBLE_CLICK_WAIT = 250; // ms; lets a double-click select a word on the back

export default function BusinessCard() {
  const [flipped, setFlipped] = useState(false);

  const stageRef = useRef(null);
  const tiltRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const frontHeadingRef = useRef(null);
  const backHeadingRef = useRef(null);
  const focusAfterFlip = useRef(false);
  const pointerStart = useRef(null);
  const dragged = useRef(false);
  const pendingFlipBack = useRef(0);

  useTilt(stageRef, tiltRef, !flipped);

  useEffect(() => () => clearTimeout(pendingFlipBack.current), []);

  // React 18 doesn't pass `inert` through as a prop, so set it on the nodes.
  // CSS hides the inert face once the flip passes edge-on.
  useLayoutEffect(() => {
    frontRef.current.inert = flipped;
    backRef.current.inert = !flipped;
    if (focusAfterFlip.current) {
      focusAfterFlip.current = false;
      const heading = flipped ? backHeadingRef.current : frontHeadingRef.current;
      heading?.focus({ preventScroll: true });
    }
  }, [flipped]);

  // Measured between pointerdown and pointerup, not against the click event:
  // browsers nudge a tap's click point toward nearby targets.
  const onPointerDown = (e) => {
    // A second press means a double-click (or double-click-drag) is under way.
    clearTimeout(pendingFlipBack.current);
    pointerStart.current = { x: e.clientX, y: e.clientY };
    dragged.current = false;
  };

  const onPointerUp = (e) => {
    const start = pointerStart.current;
    const tolerance = DRAG_TOLERANCE[e.pointerType] ?? DRAG_TOLERANCE.mouse;
    dragged.current = !!start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > tolerance;
  };

  // Clicking the card is a pointer shortcut; the button below is the
  // keyboard and screen-reader control, so the card itself isn't focusable.
  const onCardClick = (e) => {
    clearTimeout(pendingFlipBack.current);
    if (e.target.closest("a, button, [data-noflip]")) return;
    if (window.getSelection()?.toString().trim()) return;
    if (dragged.current) return;
    if (e.detail > 1) return; // second click of a double-click: selecting, not flipping
    if (flipped) {
      // People read and copy from the back, so give a double-click time to land.
      pendingFlipBack.current = setTimeout(() => setFlipped(false), DOUBLE_CLICK_WAIT);
    } else {
      setFlipped(true);
    }
  };

  const onButtonClick = () => {
    clearTimeout(pendingFlipBack.current);
    focusAfterFlip.current = true;
    setFlipped((f) => !f);
  };

  return (
    <div className="card-scene">
      <div className="stage" ref={stageRef}>
        <div className="tilt" ref={tiltRef}>
          <div
            id="card"
            className="flipper"
            data-flipped={flipped}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onClick={onCardClick}
          >
            <div className="face face--front" ref={frontRef}>
              <CardFront headingRef={frontHeadingRef} />
            </div>
            <div className="face face--back" ref={backRef}>
              <CardBack headingRef={backHeadingRef} resumeHref={resumeHref} />
            </div>
          </div>
        </div>
      </div>

      <nav className="card-actions" aria-label="Card">
        <button type="button" className="flip-btn" aria-controls="card" onClick={onButtonClick}>
          {flipped ? "Turn back" : "Turn over"}
        </button>
        <span aria-hidden="true">·</span>
        <a href={resumeHref} target="_blank" rel="noopener" type="application/pdf">
          Résumé (PDF)
        </a>
      </nav>
    </div>
  );
}
