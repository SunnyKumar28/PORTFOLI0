import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(106, 64, 228, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(106, 64, 228, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(30, 30, 30, 0.8) 0%, transparent 50%)
            `,
          }}
          animate={{
            background: [
              `
                radial-gradient(circle at 20% 80%, rgba(106, 64, 228, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(106, 64, 228, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(30, 30, 30, 0.8) 0%, transparent 50%)
              `,
              `
                radial-gradient(circle at 80% 80%, rgba(106, 64, 228, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 20% 20%, rgba(106, 64, 228, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 60% 60%, rgba(30, 30, 30, 0.8) 0%, transparent 50%)
              `,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#6A40E4] rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(106, 64, 228, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 64, 228, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;