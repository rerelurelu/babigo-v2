import { VFC } from 'react';
import { Description } from './components/PageFragments/Description/Description';
import { Footer } from './components/PageLayout/Footer/Footer';
import { Layout } from './components/PageLayout/Layout/Layout';
import { TextForm } from './components/TextForm/TextForm';

export const App: VFC = () => {
  return (
    <Layout>
      <Description />
      <TextForm />
      <Footer />
    </Layout>
  );
};
