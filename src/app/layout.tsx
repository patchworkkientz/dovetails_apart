import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Autonomous Protocol Assembly and Related Transactions (APART)</title>
      </head>
      <body className="sm0-1">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
