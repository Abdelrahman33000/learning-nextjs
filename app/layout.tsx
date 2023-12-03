import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Script from "next/script";
import Image from "next/image";
import test from "../public/next.svg";
import Footer from "./Components/Footer/Footer";
// import { Providers } from "./GlobalRedux/provider";
import { Provider } from "react-redux";
import { Store } from "./GlobalRedux/store";
import { Providers } from "./GlobalRedux/provider";
const inter = Inter({ subsets: ["latin"] });
import ChatApp from "./Components/chatApp"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import ProvidersWrapper from "./ProviderWrappers";
import { getServerSession } from "next-auth";
import DeafultButton from "./Components/DeafultButton/DeafultButton";
import { signOut } from "next-auth/react";
import Logout from "./Components/Logout/logout";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Hobbies",
  description: "Generated by create next app",
  icons:{
    icon:"public/Boy.svg"
  }
};

export default  async function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  function isAuthnticated() {
   
        if(!session){
          return false;
        } 
        else{
          return true
        }
        
    return 
  }
  return (
    <html lang="en">
      <Head > <link rel="icon" sizes="32x32" href="/favicon.ico" /> </Head>
      <body className={inter.className}>
      
      <Providers> 
        
        <Navbar isAuthnticated={isAuthnticated()}/>
       
        {children}
       
        <Footer />
        <ChatApp/>
       
      
        </Providers>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <script src="https://getchat.app/assets/js/min/getchatapp.js"></script>
        
        {/* <Script
          defer
          src="https://webkeyz.github.io/stand-with-palestine/dist/stand-with-palestine-widget.js"
        /> */}
      </body>
    </html>
  );
}