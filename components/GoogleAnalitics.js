import Script from 'next/script';

const GAScript = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F786M9B6B9" />

      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-F786M9B6B9')`,
        }}
      />
    </>
  );
};
export default GAScript;
