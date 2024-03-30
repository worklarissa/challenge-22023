import type { Metadata } from 'next';
import Footer from './Footer/page';
import '../../public/css/style.css';
import Header from './Header/page';
import Script from 'next/script';


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
        <link rel="shortcut icon" href="/favicon.co" type="image/x-icon" />
      </head>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
        <Script src='../../../javascript/chatbot.js'/>
      </body>
    </html>
  );
}
