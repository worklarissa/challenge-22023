import type { Metadata } from "next";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export const metadata: Metadata = {
  title: "Salesforce",
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
