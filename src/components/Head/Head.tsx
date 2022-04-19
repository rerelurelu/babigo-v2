import { VFC } from 'react';
import { Helmet } from 'react-helmet';

const GA_TRACKING_ID: string = import.meta.env.VITE_GA_TRACKING_ID;

export const Head: VFC = () => {
  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
      <meta property="og:url" content="https://babigo.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="バビ語変換サイト" />
      <meta property="og:description" content="入力された文章をバビ語に変換できます。" />
      <meta property="og:site_name" content="バビ語変換サイト" />
    </Helmet>
  );
};
