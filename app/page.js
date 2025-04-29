import Link from 'next/link';
import { getAllSlugs } from './parseContent';

export default async function HomePage() {
  const slugs = await getAllSlugs();

  return (
    <main className="container">
      <h1 className="site-title">Scientific Markdown Site</h1>
      <p className="intro">A static site built from Markdown files using Next.js.</p>
      <ul className="page-list">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={`/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}



// import Link from 'next/link';
// import { getAllSlugs } from './parseContent.js';

// export default async function HomePage() {
//   const slugs = await getAllSlugs();

//   return (
//     <main style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
//       <h1>Welcome to the Markdown Static Site!</h1>
//       <ul>
//         {slugs.map((slug) => (
//           <li key={slug}>
//             <Link href={`/${slug}`}>{slug}</Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

