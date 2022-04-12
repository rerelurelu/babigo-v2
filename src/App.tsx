import { VFC } from 'react';
import { Footer } from './components/PageLayout/Footer/Footer';
import { Layout } from './components/PageLayout/Layout/Layout';

export const App: VFC = () => {
  return (
    <Layout>
      <Footer />
    </Layout>
  );
};
