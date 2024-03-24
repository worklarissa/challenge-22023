import type { Metadata } from "next";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import "../../public/css/global.css";
import Script from "next/script";


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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
      </head>

      <body>
        <Header/>
        {children}
        <Footer/>
        <Script src="../../../javascript/chatbot.js"/>
        
      </body>
    </html>
  );
}
