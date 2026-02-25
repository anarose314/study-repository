'use client';

import { useState } from 'react';
import { get } from '@/lib/fetch';
import MovieList from './MovieList';

export default function LoadMoreMovieList({
  initialMovies = [],
  initialNext = null,
}) {
  const [movies, setMovies] = useState(initialMovies);
  const [next, setNext] = useState(initialNext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      setError(null);

      // `next` URL에 GET 리퀘스트를 보내세요
      // 리스폰스로 도착한 결과로 `movies`와 `next` state를 업데이트해 주세요
      const { results: moreMovies, next: nextUrl } = await get(next);
      setMovies((prev) => [...prev, ...moreMovies]);
      setNext(nextUrl);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MovieList movies={movies} />
      {next && (
        <button
          style={{ marginTop: '20px' }}
          onClick={handleLoadMore}
          disabled={loading}
        >
          영화 더 불러오기
        </button>
      )}
      {error && <div>영화를 더 불러오는데 실패했습니다.</div>}
    </div>
  );
}
