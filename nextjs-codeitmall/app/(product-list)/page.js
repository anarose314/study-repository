import LoadMoreProductList from './components/LoadMoreProductList';
import { getInitialProducts } from '@/lib/data';

export default async function Home() {
  const { results: products, next } = await getInitialProducts();

  return (
    <div>
      <LoadMoreProductList
        key="all"
        initialProducts={products}
        initialNext={next}
      />
    </div>
  );
}
