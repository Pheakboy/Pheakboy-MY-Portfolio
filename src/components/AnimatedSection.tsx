import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fadeInUp"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "slideInUp";
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const animationClasses = {
    fadeInUp: "translate-y-16 opacity-0",
    fadeInLeft: "-translate-x-16 opacity-0",
    fadeInRight: "translate-x-16 opacity-0",
    scaleIn: "scale-75 opacity-0",
    slideInUp: "translate-y-32 opacity-0",
  };

  const visibleClasses = {
    fadeInUp: "translate-y-0 opacity-100",
    fadeInLeft: "translate-x-0 opacity-100",
    fadeInRight: "translate-x-0 opacity-100",
    scaleIn: "scale-100 opacity-100",
    slideInUp: "translate-y-0 opacity-100",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? visibleClasses[animation] : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
