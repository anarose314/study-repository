export default async function Movie({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>영화 상세 페이지</h1>
      <div>영화 id: {id}</div>
    </div>
  );
}
