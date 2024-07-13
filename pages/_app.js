import "@/styles/globals.css";

import {  Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import Header from "../components/Header.js";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer.js";

const inter = Poppins({ subsets: ["latin"], weight:'400' });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
//   return <main className={`mx-auto max-w-screen-7xl px-4 sm:px-6 lg:px-8 ${inter.className}`}>
//         <SessionProvider session={session}>
// <Header/>
//     <Component {...pageProps} />
//     </SessionProvider>


//   </main>
return (
  <SessionProvider session={session}>
  <main className={`${inter.className}`}>
    <Header />
    <div className="min-h-screen max-w-screen-2xl mx-auto">
      <Component {...pageProps} />
      <Toaster position='top-center'  />
    </div>
    <Footer />
  </main>
</SessionProvider>
)
}
