"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 60;
      const dotSize = 1;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // Distance from center for radial fade
          const cx = canvas.width / 2;
          const cy = canvas.height / 2;
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          const maxDist = Math.sqrt(cx ** 2 + cy ** 2);
          const fade = Math.max(0, 1 - dist / maxDist);

          // Subtle wave animation
          const wave = Math.sin(time * 0.5 + x * 0.01 + y * 0.01) * 0.3 + 0.7;
          const opacity = fade * wave * 0.15;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(20, 184, 166, ${opacity})`;
          ctx.fill();
        }
      }

      time += 0.016;
      animationId = requestAnimationFrame(drawGrid);
    };

    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    resize();
    window.addEventListener("resize", resize);

    if (prefersReduced) {
      // Draw static grid once
      time = 0;
      const spacing = 60;
      const dotSize = 1;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const maxDist = Math.sqrt(cx ** 2 + cy ** 2);

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          const fade = Math.max(0, 1 - dist / maxDist);
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(20, 184, 166, ${fade * 0.1})`;
          ctx.fill();
        }
      }
    } else {
      drawGrid();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
