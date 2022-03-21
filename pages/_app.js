import { ApolloProvider } from '@apollo/client';
import { Toaster } from 'react-hot-toast';

import client from '../apollo-client';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

export default MyApp;
