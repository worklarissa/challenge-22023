import type { Metadata } from 'next';
import Footer from './Footer/page';
import '../../public/css/style.css';
import Header from './Header/page';


export const metadata: Metadata = {
  title: 'SalesForce',
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
