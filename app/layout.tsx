'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

// Runs before paint so the page never flashes the wrong theme. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  // The homepage is the valentinOS desktop — it brings its own menu bar
  // and dock, so skip the regular site header/footer there.
  const isDesktop = pathname === '/';

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
        <title>Valentin Houssais — Building AI products in public</title>
        <meta name="description" content="Portfolio of AI projects and a journal documenting the path — no hype, no shortcuts, just honest building." />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {isDesktop ? (
          <>
            {children}
            <Analytics />
          </>
        ) : (
        <>
        <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-ink-800 bg-white/80 dark:bg-ink-950/80 backdrop-blur-md">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">

            {/* Logo */}
            <a href="/" className="font-display font-bold text-lg no-underline text-gray-900 dark:text-white hover:text-blue-500 hover:no-underline transition-colors">
              Valentin Houssais
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="no-underline text-sm transition-colors hover:no-underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
                    className="no-underline text-sm py-1 text-gray-600 dark:text-gray-400"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              <div>
                <h3 className="font-display font-bold mb-3 text-gray-900 dark:text-white">Valentin Houssais</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Building AI products in public — the wins, the failures, and everything in between.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold mb-4 text-gray-900 dark:text-white">Navigate</h3>
                <ul className="space-y-2">
                  <li><a href="/projects" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">Work</a></li>
                  <li><a href="/journal" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">Journal</a></li>
                  <li><a href="/contact" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">Contact</a></li>
                  <li><a href="/setup" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">Setup guide</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold mb-4 text-gray-900 dark:text-white">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.linkedin.com/in/valentin-houssais/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="mailto:valentin.houssais@gmail.com?subject=Code access request" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                      Source code (on request)
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-600 dark:text-gray-400 no-underline hover:text-blue-500 text-sm">
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-ink-800 pt-8">
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                © 2026 Valentin Houssais. Built with Next.js & Claude, deployed on Vercel.
              </p>
            </div>
          </div>
        </footer>
        </>
        )}
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
