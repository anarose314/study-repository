import SearchForm from './components/SearchForm';

export default function MovieListLayout({ children }) {
  return (
    <div>
      <SearchForm />
      <div className="mt-4">{children}</div>
    </div>
  );
}
