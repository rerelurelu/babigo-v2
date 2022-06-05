import { VFC } from 'react';
import { Head } from './components/Head/Head';
import { Description } from './components/PageFragments/Description/Description';
import { GooLogo } from './components/PageFragments/GooLogo/GooLogo';
import { TextForm } from './components/PageFragments/TextForm/TextForm';
import { Footer } from './components/PageLayout/Footer/Footer';
import { Layout } from './components/PageLayout/Layout/Layout';

export const App: VFC = () => {
  return (
    <Layout>
      <Head />
      <Description />
      <TextForm />
      <Footer />
    </Layout>
  );
};
