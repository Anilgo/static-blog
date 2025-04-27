import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs/promises';
import path from 'path';

export async function getMarkdownContent(slug) {
  const fullPath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const processedContent = await remark().use(html).process(fileContents);
  return processedContent.toString();
}

export async function getAllSlugs() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = await fs.readdir(contentDir);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}
