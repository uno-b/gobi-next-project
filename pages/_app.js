import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
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
      <Head>
        <title>Gobi Swiss | Unumandakh Next Project</title>
        {/* This ways to add css on global website use local asset folder withhtml link tag */}
        <link href='../assets/font/Helvetica.ttf' rel='stylesheet' />
        <link href='../assets/font/Helvetica-Bold.ttf' rel='stylesheet' />
      </Head>

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
