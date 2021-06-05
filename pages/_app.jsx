import React from 'react';
import PropTypes from 'prop-types';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const NextWeb3App = ({ Component, pageProps }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Component {...pageProps} />
  </Web3ReactProvider>
);

NextWeb3App.propTypes = {
  Component: PropTypes.array.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default NextWeb3App;
