"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function DirectionalLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (prefersReducedMotion) return;

    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updateMousePosition);

    const handleMouseLeave = () => setIsVisible(false);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  if (!mounted) {
    return null; // Avoid rendering anything interactive/motion on server that depends on mouse
  }

  if (prefersReducedMotion) {
    // Static fallback for reduced motion
    return (
      <div
        className="fixed inset-0 pointer-events-none z-20 opacity-20"
        style={{
          background: "radial-gradient(600px circle at 50% 0%, rgba(255,176,0,0.1), transparent 80%)"
        }}
      />
    );
  }

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-20"
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,176,0,0.06), transparent 80%)`
      }}
    />
  );
}
