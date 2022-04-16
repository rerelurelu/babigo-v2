import { VFC } from 'react';
import { Description } from './components/PageFragments/Description/Description';
import { TextForm } from './components/PageFragments/TextForm/TextForm';
import { Footer } from './components/PageLayout/Footer/Footer';
import { Layout } from './components/PageLayout/Layout/Layout';

export const App: VFC = () => {
  return (
    <Layout>
      <Description />
      <TextForm />
      <Footer />
    </Layout>
  );
};
