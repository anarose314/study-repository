'use client';

import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';
import settingBlack from '@/assets/setting-black.svg';
import settingWhite from '@/assets/setting-white.svg';

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="flex justify-between items-center border-b border-[#e1e1e1] dark:border-[#c0c0c0] p-4">
      <Link href="/">홈</Link>
      <Link href="/settings">
        <img src={theme === 'light' ? settingBlack.src : settingWhite.src} />
      </Link>
    </header>
  );
}
