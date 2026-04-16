import { getAllPages } from '@/lib/markdown';
import Sidebar from '@/components/Sidebar';
import Assistant from '@/components/Assistant';
import './globals.css';

export const metadata = {
  title: 'Computational Genomics Wiki',
  description: 'AI-assisted wiki for Computational Genomics',
};

export default function RootLayout({ children }) {
  const pages = getAllPages();

  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar pages={pages} />
          <main className="main-content">
            {children}
          </main>
          <Assistant />
        </div>
      </body>
    </html>
  );
}
