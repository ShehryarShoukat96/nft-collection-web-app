import React from 'react';
import PropTypes from 'prop-types';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import Head from 'next/head';
import { MuiTheme } from '../themes';

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const NextWeb3App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <CssBaseline />
      <Head>
        <title>NFT Collection</title>
        <link rel="icon" href="/NFT_Icon.png" />
        <link rel="stylesheet" type="text/css" href="/assets/css/morphing.css" />
        <script src="/assets/js/modernizr.custom.js" />
        <script src="/assets/js/classie.js" />
        <script src="/assets/js/uiMorphingButton_fixed.js" />
      </Head>
      <MuiThemeProvider theme={MuiTheme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </Web3ReactProvider>
  );
};

NextWeb3App.propTypes = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default NextWeb3App;
