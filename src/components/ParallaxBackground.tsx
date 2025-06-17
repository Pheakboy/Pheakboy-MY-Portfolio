import React from "react";
import { useParallax } from "../hooks/useScrollAnimation";

const ParallaxBackground: React.FC = () => {
  const offset1 = useParallax(0.2);
  const offset2 = useParallax(0.4);
  const offset3 = useParallax(0.6);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Orbs */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        style={{
          top: "10%",
          left: "10%",
          transform: `translateY(${offset1}px) rotate(${offset1 * 0.1}deg)`,
        }}
      />
      <div
        className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        style={{
          top: "60%",
          right: "10%",
          transform: `translateY(${offset2}px) rotate(${-offset2 * 0.1}deg)`,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
        style={{
          bottom: "20%",
          left: "20%",
          transform: `translateY(${offset3}px) rotate(${offset3 * 0.15}deg)`,
        }}
      />

      {/* Geometric Shapes */}
      <div
        className="absolute w-32 h-32 border border-cyan-500/30 rotate-45"
        style={{
          top: "30%",
          right: "30%",
          transform: `translateY(${offset1 * 0.5}px) rotate(${
            45 + offset1 * 0.2
          }deg)`,
        }}
      />
      <div
        className="absolute w-24 h-24 border border-purple-500/30 rounded-full"
        style={{
          bottom: "40%",
          right: "20%",
          transform: `translateY(${offset2 * 0.3}px) scale(${
            1 + Math.sin(offset2 * 0.01) * 0.1
          })`,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translateY(${offset1 * 0.1}px)`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
