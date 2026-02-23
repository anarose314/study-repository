import SearchFrom from './components/SearchFrom';

export default function ProductListLayout({ children }) {
  return (
    <div>
      <SearchFrom />
      <div style={{ marginTop: '16px' }}>{children}</div>
    </div>
  );
}
