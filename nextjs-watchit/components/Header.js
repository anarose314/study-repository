import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-[#c0c0c0] p-4">
      <Link href="/">홈</Link>
      <Link href="/settings">설정</Link>
    </header>
  );
}
