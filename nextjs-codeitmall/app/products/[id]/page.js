import Productinfo from './components/Productinfo';
import SizeReviewList from './components/SizeReviewList';
import { getProduct, getSizeReviews } from '@/lib/data';

export default async function Product({ params }) {
  const { id } = await params;
  const [product, { results: sizeReviews }] = await Promise.all([
    getProduct(id),
    getSizeReviews(id),
  ]);

  return (
    <div>
      <Productinfo product={product} />
      {sizeReviews?.length > 0 && <SizeReviewList sizeReviews={sizeReviews} />}
    </div>
  );
}
