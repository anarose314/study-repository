import { getInitialMovies } from '@/lib/data';
import LoadMoreMovieList from '../components/LoadMoreMovieList';

export default async function Search({ searchParams }) {
  const { q } = await searchParams;
  const { results: movies, next } = await getInitialMovies(q);

  return (
    <div>
      <div>검색어: {q}</div>
      <LoadMoreMovieList
        key={q || 'all'}
        initialMovies={movies}
        initialNext={next}
      />
    </div>
  );
}
