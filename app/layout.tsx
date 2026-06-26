'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#upcoming', label: "What's next" },
  { href: '/setup', label: 'Setup guide', highlight: true },
];

// Runs before paint so the page never flashes the wrong theme. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDark);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Practical AI 101 | Shipping AI Products in Public</title>
        <meta name="description" content="Building practical AI tools from scratch — no hype, no shortcuts. Documenting everything honestly." />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-ink-800 bg-white/80 dark:bg-ink-950/80 backdrop-blur-md">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">

            {/* Logo */}
            <a href="/" className="font-display font-bold text-lg no-underline text-gray-900 dark:text-white hover:text-blue-500 hover:no-underline transition-colors">
              Practical AI 101
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`no-underline text-sm transition-colors hover:no-underline ${
                    link.highlight
                      ? 'text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-gray-200 dark:border-ink-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </button>
              )}
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-gray-200 dark:border-ink-700 text-gray-700 dark:text-gray-300"
                  aria-label="Toggle theme"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </button>
              )}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-full border border-gray-200 dark:border-ink-700 text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-ink-800 bg-white dark:bg-ink-950">
              <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`no-underline text-sm py-1 ${
                      link.highlight
                        ? 'text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {children}
        <Analytics />

        <footer className="border-t border-gray-200 dark:border-ink-800 bg-gray-50 dark:bg-ink-900 mt-24">
          <div className="max-w-4xl mx-auto px-4 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-display font-bold mb-4 text-gray-900 dark:text-white">Navigate</h3>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold mb-4 text-gray-900 dark:text-white">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:valentin.houssais@gmail.com?subject=Code access request" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                      Source code (on request)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/valentin-houssais/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold mb-4 text-gray-900 dark:text-white">Made with</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Markdown</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-ink-800 pt-8">
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                © 2025 Practical AI 101 — by{' '}
                <a href="https://www.linkedin.com/in/valentin-houssais/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 no-underline">
                  Valentin Houssais
                </a>
                . Built with Next.js & deployed on Vercel.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
