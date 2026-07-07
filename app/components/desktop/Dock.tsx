'use client';

export interface DockApp {
  id: string;
  name: string;
  icon: string;
}

interface DockProps {
  apps: DockApp[];
  onOpen: (id: string) => void;
}

// macOS-style dock: bottom-center rounded bar, emoji tiles that scale on
// hover with a name tooltip. Scrolls horizontally if it can't fit.
export default function Dock({ apps, onOpen }: DockProps) {
  return (
    <div className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-3 pointer-events-none">
      <div className="pointer-events-auto flex items-end gap-1.5 px-3 py-2 rounded-2xl border border-gray-300/60 dark:border-ink-600 bg-white/70 dark:bg-ink-800/70 backdrop-blur-md shadow-card dark:shadow-card-dark max-w-full overflow-x-auto">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onOpen(app.id)}
            className="group relative flex flex-col items-center shrink-0"
            aria-label={`Open ${app.name}`}
          >
            <span className="absolute -top-9 hidden group-hover:block whitespace-nowrap text-xs font-medium px-2 py-1 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              {app.name}
            </span>
            <span className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-b from-white to-gray-100 dark:from-ink-700 dark:to-ink-800 border border-gray-200 dark:border-ink-600 text-2xl transition-transform duration-150 group-hover:scale-125 group-hover:-translate-y-1.5">
              {app.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
