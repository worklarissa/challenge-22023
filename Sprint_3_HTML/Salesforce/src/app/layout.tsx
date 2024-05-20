//Larissa Araujo Gama Alvarenga -RM96496
//Larissa Lopes Oliveira -RM552628
//Luna Faustino Lima -RM552473

import type { Metadata } from 'next';
import Footer from './Footer/footer';
import Header from './Header/header';
import Script from 'next/script';
import Providers from './providers';


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
          <Providers>{children}</Providers>
          <Footer />
        </main>
        <Script src='/javascript/chatbot.js'/>
      </body>
    </html>
  );
}
