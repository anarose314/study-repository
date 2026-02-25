import { getInitialMovies } from '@/lib/data';
import LoadMoreMovieList from './components/LoadMoreMovieList';

export default async function Home() {
  const { results: movies, next } = await getInitialMovies();

  return (
    <div>
      <LoadMoreMovieList key="all" initialMovies={movies} initialNext={next} />
    </div>
  );
}
