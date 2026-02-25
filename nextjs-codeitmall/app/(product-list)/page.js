import ProductList from './components/ProductList';
import { getProducts } from '@/lib/data';

export default async function Home() {
  const { results: products } = await getProducts();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
