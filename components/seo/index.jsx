import React from "react";
import Head from "next/head";

function Seo({ page, desc }) {
  let pageNew = page ? `${page} - Dityath` : "Dityath";
  let descNew = desc ? desc : "Dityat's Portofolio";

  return (
    <Head>
      <title>{pageNew}</title>
      <meta name="description" content={descNew} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
  );
}

export default Seo;
