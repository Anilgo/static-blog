import { getMarkdownContent, getAllSlugs, getMarkdownMeta } from '../parseContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const meta = await getMarkdownMeta(params.slug).catch(() => null);
  if (!meta) return { title: '404', description: 'Not found' };
  return {
    title: meta.title || params.slug,
    description: meta.description || '',
  };
}

export default async function SlugPage({ params }) {
  const contentHtml = await getMarkdownContent(params.slug).catch(() => null);
  if (!contentHtml) notFound();

  return (
    <main className="container">
      <article
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}


// import { getMarkdownContent, getAllSlugs } from '../parseContent.js';

// export async function generateStaticParams() {
//   const slugs = await getAllSlugs();
//   return slugs.map((slug) => ({ slug }));
// }

// export default async function SlugPage({ params }) {
//   const contentHtml = await getMarkdownContent(params.slug);

//   return (
//     <main style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
//       <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
//     </main>
//   );
// }
