import { useEffect, useRef, useState } from "react";

export function useAutoScroll(delay = 3000) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Initial nudge to show it's a carousel
    const nudgeTimeout = setTimeout(() => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
      }
    }, 1000);

    return () => clearTimeout(nudgeTimeout);
  }, []);

  useEffect(() => {
    // Do not set interval if paused
    if (isPaused || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // If container does not overflow (e.g. on Desktop where it is a grid), do nothing.
        if (scrollWidth <= clientWidth) return;

        // If we have reached the end of the scrollable area
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // scroll forward by one card (approx 340px or clientWidth portion)
          // We use a slightly smaller increment to ensure the snap catches the next card well
          const scrollAmount = Math.min(340, clientWidth * 0.8);
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, delay);

    return () => clearInterval(interval);
  }, [isPaused, delay]);

  const autoScrollProps = {
    ref: scrollRef,
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onTouchStart: () => setIsPaused(true),
    onTouchEnd: () => setIsPaused(false),
  };

  return autoScrollProps;
}
