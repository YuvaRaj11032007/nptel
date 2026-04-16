'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ pages }) {
  const pathname = usePathname();
  
  return (
    <aside className="sidebar">
      <div>
        <h2>Computational Genomics</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Interactive Knowledge Base
        </p>
      </div>
      <nav className="nav-links">
        {pages.map((page) => {
          const path = page.slug === 'index' ? '/' : `/${page.slug}`;
          const isActive = pathname === path;
          
          return (
            <Link 
              key={page.slug} 
              href={path}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              {page.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
