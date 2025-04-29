import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getMarkdownContent(slug) {
  const fullPath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

export async function getMarkdownMeta(slug) {
  const fullPath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data } = matter(fileContents);
  return data;
}

export async function getAllSlugs() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = await fs.readdir(contentDir);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}
