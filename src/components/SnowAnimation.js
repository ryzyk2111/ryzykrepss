import React from 'react';
import { motion } from 'framer-motion';

const SnowAnimation = () => {
  // Generate random snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 4,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((snowflake) => (
        <motion.div
          key={snowflake.id}
          className="absolute text-white opacity-80"
          style={{
            left: `${snowflake.x}%`,
            fontSize: `${snowflake.size}px`,
          }}
          initial={{ 
            y: -50,
            x: Math.random() * 20 - 10,
          }}
          animate={{ 
            y: window.innerHeight + 50,
            x: Math.random() * 20 - 10,
          }}
          transition={{
            duration: snowflake.duration,
            delay: snowflake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❄
        </motion.div>
      ))}
      
      {/* Additional smaller snowflakes */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute text-white opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 3 + 1}px`,
          }}
          initial={{ 
            y: -30,
            x: Math.random() * 15 - 7.5,
          }}
          animate={{ 
            y: window.innerHeight + 30,
            x: Math.random() * 15 - 7.5,
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          •
        </motion.div>
      ))}
    </div>
  );
};

export default SnowAnimation;
