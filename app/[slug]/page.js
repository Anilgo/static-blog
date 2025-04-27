import { getMarkdownContent, getAllSlugs } from '../parseContent.js';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function SlugPage({ params }) {
  const contentHtml = await getMarkdownContent(params.slug);

  return (
    <main style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
