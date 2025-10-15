   import type { Metadata } from "next";
   import { Inter } from "next/font/google";
   import "./globals.css";
   import Header from "./components/Header";  // Ajusta la ruta si es necesario
   import Footer from "./components/Footer";

   const inter = Inter({ subsets: ["latin"] });

   export const metadata: Metadata = {
     title: "Jose Lucero - Portfolio",
     description: "Backend Developer Portfolio",
   };

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang="es">
         <body className={inter.className}>
           <Header />
           <main className="pt-20 pb-20">  {/* Padding para header fijo y footer */}
             {children}
           </main>
           <Footer />
         </body>
       </html>
     );
   }
   