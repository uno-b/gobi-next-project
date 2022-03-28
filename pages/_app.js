import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

import client from '../apollo-client';
import '../styles/globals.css';
import Layout from '../components/Layout';
import AppContext from '../AppContext';

function MyApp({ Component, pageProps, router }) {
  const [token, setToken] = useState(null);

  return (
    <Layout>
      <Toaster />

      <AppContext.Provider
        value={{
          token,
          setToken,
        }}
      >
        <ApolloProvider client={client}>
          <motion.div
            key={router.route}
            initial='pageInitial'
            animate='pageAnimate'
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </ApolloProvider>
      </AppContext.Provider>
    </Layout>
  );
}

export default MyApp;
