import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolved, toggleTheme } = useTheme();
  const isDark = resolved === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`theme-toggle flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${className}`}
    >
      {isDark ? <Moon className="h-5 w-5" strokeWidth={2} /> : <Sun className="h-5 w-5" strokeWidth={2} />}
    </button>
  );
}
