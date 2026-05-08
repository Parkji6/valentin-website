'use client';

import { useState } from 'react';

export default function HeroMedia() {
  const [active, setActive] = useState<'image' | 'video'>('image');

  return (
    <div>
      {/* Toggle buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActive('image')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === 'image'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          🖼 Image
        </button>
        <button
          onClick={() => setActive('video')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === 'video'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          🎬 Video
        </button>
      </div>

      {/* Media frame — 16:9 */}
      <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800" style={{ aspectRatio: '16/9' }}>
        {active === 'image' ? (
          <img
            src="/images/hero.png"
            alt="The beginning of the AI journey — building instead of scrolling"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <video
            key="hero-video"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
            <img
              src="/images/hero.png"
              alt="Fallback image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
        )}
      </div>
    </div>
  );
}
