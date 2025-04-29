import './globals.css';
import '../styles/markdown.css';

export const metadata = {
  title: 'Markdown Site',
  description: 'Static site with styled markdown content',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


// import './globals.css';

// export const metadata = {
//   title: 'Markdown Static Site',
//   description: 'Generates html pages from markdown files',
// };


// const header = {
//   fontSize: '2rem',
//   marginBottom: '1rem',
// };
// const footer = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   padding: '1rem',
//   backgroundColor: '#f8f8f8',
//   borderTop: '1px solid #eaeaea',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

