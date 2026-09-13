import { useEffect, useState } from "react";

// Shared motion presets, following Apple's damping/response model:
// critically damped (bounce: 0) for anything that just appears,
// slight bounce reserved for elements that carry momentum from a gesture.

// Gates whileHover the same way index.css gates :hover — a tap on a touch
// device shouldn't leave a hover-triggered animation stuck on.
export function useCanHover() {
  const [canHover, setCanHover] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handler = (e) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return canHover;
}

// Strong ease-out for one-shot tween entrances (https://easing.dev) — the
// single canonical curve for anywhere a spring would be overkill.
export const easeOut = [0.23, 1, 0.32, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const springSettle = { type: "spring", bounce: 0, duration: 0.6 };
export const springSettleFast = { type: "spring", bounce: 0, duration: 0.4 };

export const pressTap = { scale: 0.96 };
export const liftHover = { y: -4, transition: springSettleFast };
