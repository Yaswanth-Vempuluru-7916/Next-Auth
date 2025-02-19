'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [shadows, setShadows] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShadows((prev) => [...prev, `shadow-${Date.now()}`].slice(-5));
    }, 1500); // Increased interval for smoother animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Enhanced Background with mystical aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 animate-gradient-x" />

      {/* Animated Shadow Flames */}
      {shadows.map((shadow) => (
        <motion.div
          key={shadow}
          className="absolute w-40 h-40 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-60 rounded-full filter blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0], scale: [0.5, 1.5, 2] }}
          transition={{ duration: 3 }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Enhanced Title */}
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        SOLO LEVELING
      </motion.h1>

      {/* Enhanced Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.75 }}
      >
        Awaken your power. Rise as a Hunter.
      </motion.p>

      {/* Enhanced Action Buttons */}
      <div className="mt-8 flex space-x-4">
        <Link href="/register">
          <Button
            className="px-6 py-3 text-lg font-bold text-black bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg hover:scale-110 hover:bg-purple-700 transition transform duration-300 hover:shadow-xl"
          >
            Join the Hunt
          </Button>
        </Link>
        <Link href="/login">
          <Button
            className="px-6 py-3 text-lg font-bold text-black bg-gray-700 rounded-xl shadow-lg hover:scale-110 hover:bg-gray-800 transition transform duration-300 hover:shadow-xl"
          >
            Continue Quest
          </Button>
        </Link>
      </div>
    </div>
  );
}
