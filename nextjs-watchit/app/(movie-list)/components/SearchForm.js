'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?q=${query}`);
    }
  };

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (pathname === '/') {
      setQuery('');
    }
  }, [pathname]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="q"
        type="text"
        placeholder="영화를 검색해보세요."
        className="border-0 rounded-full bg-[#505050] py-3 px-7.5 text-[#f9f9f9] text-[18px] w-100 outline-0 placeholder:text-[#b5b5b5]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="cursor-pointer ml-3.75 border-0 rounded-full bg-[#ff4869] py-2.75 px-8 text-[#ffffff] text-[18px]"
      >
        검색
      </button>
    </form>
  );
}
