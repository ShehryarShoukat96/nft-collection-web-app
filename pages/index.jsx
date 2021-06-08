import React from 'react';
import PropTypes from 'prop-types';
import { useWeb3React } from '@web3-react/core';
import { withStyles } from '@material-ui/core';

import useEagerConnect from '../hooks/useEagerConnect';

import { Header, Main } from '../layouts';
import homeStyle from './index.style';

import './index.module.css';

const Home = ({ classes }) => {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === 'string' && !!library;

  return (
    <div className={classes.appContainer}>
      <Header triedToEagerConnect={triedToEagerConnect} isConnected={isConnected} />
      <Main />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(homeStyle, { withTheme: true })(Home);
