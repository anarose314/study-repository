import Header from '@/components/Header';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider>
          <Header />
          <div className="max-w-237.5 my-25 mx-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
