"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function FadeInContainer({
  children,
  delay = 0,
  className = "",
  as = "div"
}: FadeInContainerProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const MotionComponent = motion(as as keyof JSX.IntrinsicElements);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <MotionComponent className={className}>{children}</MotionComponent>;
  }

  if (prefersReducedMotion) {
    return <MotionComponent className={className}>{children}</MotionComponent>;
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
