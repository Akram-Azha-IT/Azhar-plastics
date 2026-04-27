import { useEffect, useRef, useState, useCallback } from "react";

export function useAutoScroll(delay = 3000) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth, children } = scrollRef.current;
    
    // If not scrollable (e.g. desktop), no active index
    if (scrollWidth <= clientWidth + 10) {
      if (activeIndex !== -1) setActiveIndex(-1);
      return;
    }

    const containerCenter = scrollLeft + clientWidth / 2;
    let minDiff = Infinity;
    let closestIndex = 0;

    Array.from(children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft + childElement.offsetWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateActiveIndex, { passive: true });
      setTimeout(updateActiveIndex, 100);
      return () => el.removeEventListener('scroll', updateActiveIndex);
    }
  }, [updateActiveIndex]);

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

  return { autoScrollProps, activeIndex };
}
