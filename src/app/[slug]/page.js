import { getPageContent, getAllPages } from '@/lib/markdown';
import MarkdownViewer from '@/components/MarkdownViewer';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default function Page({ params }) {
  const content = getPageContent(params.slug);
  
  if (!content) {
    notFound();
  }
  
  return (
    <div className="page-container">
      <MarkdownViewer content={content} />
    </div>
  );
}
