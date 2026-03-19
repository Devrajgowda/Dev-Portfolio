import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — triggers when element enters the viewport.
 * @param {number} threshold 0–1, default 0.15
 * @param {string} rootMargin e.g. "0px 0px -80px 0px"
 */
export default function useScrollReveal(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}
