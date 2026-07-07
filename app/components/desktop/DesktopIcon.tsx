'use client';

interface DesktopIconProps {
  icon: string;
  label: string;
  onOpen: () => void;
  /** Absolute position on md+ screens, e.g. { right: '6%', top: '22%' } */
  position?: React.CSSProperties;
}

// A labeled desktop item (double-clickable feel, single click opens).
export default function DesktopIcon({ icon, label, onOpen, position }: DesktopIconProps) {
  return (
    <button
      onClick={onOpen}
      style={position}
      className="md:absolute flex flex-col items-center gap-1.5 w-24 group"
      aria-label={`Open ${label}`}
    >
      <span className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 border-blue-500/70 dark:border-blue-400/70 bg-white/50 dark:bg-ink-900/50 text-3xl transition-transform duration-150 group-hover:scale-110">
        {icon}
      </span>
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 px-1.5 py-0.5 rounded bg-white/60 dark:bg-ink-900/60">
        {label}
      </span>
    </button>
  );
}
