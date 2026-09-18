"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface CountUpProps {
  end: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ end, duration = 1.5, className }: CountUpProps) {
  const [display, setDisplay] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || hasAnimated.current) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  const animate = () => {
    // Extract numeric part and suffix
    const match = end.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(end);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2]; // e.g. "%", "K+", etc.
    const startTime = performance.now();
    const durationMs = duration * 1000;
    const isFloat = match[1].includes(".");
    const decimals = isFloat ? (match[1].split(".")[1]?.length || 0) : 0;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;

      if (isFloat) {
        setDisplay(current.toFixed(decimals) + suffix);
      } else {
        setDisplay(Math.floor(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(end);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
