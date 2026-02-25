import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="max-w-237.5 my-25 mx-auto">{children}</div>
      </body>
    </html>
  );
}
