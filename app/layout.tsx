'use client'
import './globals.css';
import { Jost } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect,useState } from 'react';
import { AuthProvider } from '../app/AuthContext';
import EnquiryForm from '@/Components/Book/EnquiryForm';
const Jostr = Jost({ weight: '400', subsets: ['latin'] });
declare global {
  interface Window {
    gbwawc: {
      url: string;
      options: {
        waId: string;
        siteName: string;
        siteTag: string;
        siteLogo: string;
        widgetPosition: string;
        welcomeMessage: string;
        brandColor: string;
        messageText: string;
        replyOptions: string[];
      };
    };
  }
}
export default function RootLayout({ children }:  { children: React.ReactNode }){
  const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowForm(true);
  //   }, 3000); // 3000 ms = 3 seconds

  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    // Check if the enquiry form has been shown in the current session
    const isFormShown = sessionStorage.getItem('enquiryFormShown');
    if (!isFormShown) {
      const timer = setTimeout(() => {
        setShowForm(true);
        // Mark enquiry form as shown in sessionStorage
        sessionStorage.setItem('enquiryFormShown', 'true');
      }, 3000); // 3000 ms = 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);
  useEffect(() => {
    if (!document.getElementById("whatsapp-widget-script")) {
      const setupScript = () => {
        window.gbwawc = {
          url: "https://waw.gallabox.com",
          options: {
            waId: "919364099489",
            siteName: "Backpackers United",
            siteTag: "Usually reply immediately",
            siteLogo: "https://files.gallabox.com/659353cd916d78603a825c25/e195c80a-f04e-4dda-afbc-e54c35d01493-Backpackerslogoweb12removebgpreviewmagicremovebgpreview11.png",
            widgetPosition: "RIGHT",
            welcomeMessage: "Welcome to Backpackers United!!!",
            brandColor: "#25D366",
            messageText: "👋 Hello ! ",
            replyOptions: ['I want to talk to a sales person.',' I have a support request!',"I'm just browsing through."],
          },
        };
        const script = document.createElement('script');
        script.id = "whatsapp-widget-script";
        script.async = true;
        script.src = "https://waw.gallabox.com/whatsapp-widget.min.js?_=" + Math.random();
        document.body.appendChild(script);
      };
      setupScript();
    }
  }, []);
  return (
    <AuthProvider>
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TRW1BNQ5YR"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TRW1BNQ5YR');
        `}} />
      </head>
      <body className={`${Jostr.className}`}>
        {children}
        {showForm && <EnquiryForm onClose={() => setShowForm(false)} source="allpage"/>}
        <Analytics />
      </body>
    </html>
     </AuthProvider>
  )
}
