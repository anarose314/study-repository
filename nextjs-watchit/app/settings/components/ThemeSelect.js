'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative w-51.25 h-11.25">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="w-full h-full px-3.75 appearance-none relative bg-[#E1E1E1] dark:bg-[#252525]"
      >
        <option value="light">라이트</option>
        <option value="dark">다크</option>
      </select>
      <p className="absolute right-3 top-1/2 -translate-y-1/2">▼</p>
    </div>
  );
}
