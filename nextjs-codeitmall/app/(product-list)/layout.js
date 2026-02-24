import SearchFrom from './components/SearchFrom';
import styles from './layout.module.css';

export default function ProductListLayout({ children }) {
  return (
    <div>
      <SearchFrom />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
