import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";

const MAX_X = 4; // degrees, top/bottom
const MAX_Y = 5; // degrees, left/right
const VARS = ["--rx", "--ry", "--mx", "--my"];

const clamp01 = (n) => Math.min(Math.max(n, 0), 1);

// Tilts the card toward a hovering mouse, like holding it under the light.
// Writes CSS variables on the tilt element directly (no React state), at most
// once per frame. Measures the untransformed stage so the tilt can't feed back
// into its own measurement.
export default function useTilt(stageRef, tiltRef, enabled) {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const active = enabled && canHover && !reduced;

  useEffect(() => {
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    if (!active || !stage || !tilt) return undefined;

    let rect = null;
    let frame = 0;
    let pointer = null;

    const apply = () => {
      frame = 0;
      if (!pointer || !rect) return;
      const x = clamp01((pointer.x - rect.left) / rect.width);
      const y = clamp01((pointer.y - rect.top) / rect.height);
      tilt.style.setProperty("--ry", `${((x - 0.5) * 2 * MAX_Y).toFixed(2)}deg`);
      tilt.style.setProperty("--rx", `${((0.5 - y) * 2 * MAX_X).toFixed(2)}deg`);
      tilt.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      tilt.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    };

    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      if (!rect) {
        rect = stage.getBoundingClientRect();
        tilt.classList.add("is-tilting");
      }
      pointer = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      rect = null;
      pointer = null;
      tilt.classList.remove("is-tilting");
      VARS.forEach((name) => tilt.style.removeProperty(name));
    };

    // The cached rect goes stale when the page scrolls or resizes.
    const invalidate = () => {
      rect = null;
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", reset);
    window.addEventListener("scroll", invalidate, { passive: true });
    window.addEventListener("resize", invalidate);

    return () => {
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", reset);
      window.removeEventListener("scroll", invalidate);
      window.removeEventListener("resize", invalidate);
      reset();
    };
  }, [active, stageRef, tiltRef]);
}
