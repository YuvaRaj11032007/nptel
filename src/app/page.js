import { getPageContent } from '@/lib/markdown';
import MarkdownViewer from '@/components/MarkdownViewer';

export default function Home() {
  const content = getPageContent('index');
  
  return (
    <div className="page-container">
      {content ? (
        <MarkdownViewer content={content} />
      ) : (
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>
          <h1>Welcome to the Computational Genomics Wiki</h1>
          <p>Please select a week from the sidebar to begin learning.</p>
        </div>
      )}
    </div>
  );
}
