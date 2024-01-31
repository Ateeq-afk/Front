'use client'
import './globals.css';
import { Jost } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect } from 'react';
import { AuthProvider } from '../app/AuthContext';

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
  useEffect(() => {
    // Check if the script is already loaded to avoid re-loading it
    if (!document.getElementById("whatsapp-widget-script")) {
      // Define the script content in a function
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

      // Execute the script setup function
      setupScript();
    }
  }, []);
  return (
    <AuthProvider>
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TRW1BNQ5YR"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TRW1BNQ5YR');
        `}} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${Jostr.className}`}>
        {children}
   
        <Analytics />
      </body>
    </html>
     </AuthProvider>
  )
}
