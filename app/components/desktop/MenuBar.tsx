'use client';

import { useEffect, useState } from 'react';

interface MenuBarProps {
  onOpenContact: () => void;
}

export default function MenuBar({ onOpenContact }: MenuBarProps) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
    const tick = () =>
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDark);
  };

  return (
    <div className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 py-2 border-b border-gray-200/60 dark:border-ink-800 bg-white/70 dark:bg-ink-950/70 backdrop-blur-md">
      <span className="font-display font-bold text-sm text-gray-900 dark:text-white">
        valentinOS
      </span>
      <div className="flex items-center gap-4 text-sm">
        <button
          onClick={onOpenContact}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          contact
        </button>
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        )}
        {mounted && <span className="text-gray-500 dark:text-gray-400 tabular-nums hidden sm:inline">{time}</span>}
      </div>
    </div>
  );
}
