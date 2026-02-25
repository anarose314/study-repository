import { getMovies } from '@/lib/data';
import MovieList from '../components/MovieList';

export default async function Search({ searchParams }) {
  const { q } = await searchParams;
  const { results: movies } = await getMovies(q);

  return (
    <div>
      <h1>검색 페이지</h1>
      <div>검색어: {q}</div>
      <MovieList movies={movies} />
    </div>
  );
}
