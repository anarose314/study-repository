import { getMovie, getMovieReviews } from '@/lib/data';
import MovieInfo from './components/MovieInfo';
import MovieReviewList from './components/MovieReviewList';

export default async function Movie({ params }) {
  const { id } = await params;
  const [movie, { results: movieReviews }] = await Promise.all([
    getMovie(id),
    getMovieReviews(id),
  ]);

  return (
    <div>
      <MovieInfo movie={movie} />
      <h2 style={{ marginTop: '40px' }}>리뷰 목록</h2>
      <MovieReviewList movieReviews={movieReviews} />
    </div>
  );
}
