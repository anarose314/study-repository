import { getMovies } from '@/lib/data';
import MovieList from './components/MovieList';

export default async function Home() {
  const { results: movies } = await getMovies();

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
