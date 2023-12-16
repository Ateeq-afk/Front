import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // Function to add the GTM script
    const addGTM = (): void => {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M59NT5G8');
      `;
      document.head.appendChild(script);
    };
    addGTM();
  }, []);
  return (
    <>
      <Component {...pageProps} />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M59NT5G8"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
}
export default MyApp;