import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src/content');

export function getAllPages() {
  if (!fs.existsSync(contentDir)) return [];
  const fileNames = fs.readdirSync(contentDir);
  const pages = fileNames.filter(name => name.endsWith('.md')).map(name => {
    const slug = name.replace(/\.md$/, '');
    // Nicer formatting for title
    let title = slug.replace(/-/g, ' ');
    if (title.toLowerCase().startsWith('week')) {
      title = 'Week ' + title.slice(4);
    } else if (title === 'index') {
      title = 'Home / Index';
    } else if (title === 'log') {
      title = 'Dev Log';
    }
    return {
      slug: slug,
      title: title,
    };
  });
  
  // Sort pages: index first, then weeks sequentially, then log.
  return pages.sort((a, b) => {
    if (a.slug === 'index') return -1;
    if (b.slug === 'index') return 1;
    if (a.slug === 'log') return 1;
    if (b.slug === 'log') return -1;
    // Extract numbers if both are weeks
    const matchA = a.slug.match(/week(\d+)/i);
    const matchB = b.slug.match(/week(\d+)/i);
    if (matchA && matchB) {
      return parseInt(matchA[1], 10) - parseInt(matchB[1], 10);
    }
    return a.title.localeCompare(b.title);
  });
}

export function getPageContent(slug) {
  const fullPath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf8');
}
