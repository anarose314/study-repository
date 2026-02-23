import Button from '@/components/Button';
import Productinfo from './components/Productinfo';

export default async function Product({ params }) {
  const { id } = await params;

  return (
    <div>
      <Productinfo />
      <Button>구매하기</Button>
      <div>상품 id : {id}</div>
    </div>
  );
}
