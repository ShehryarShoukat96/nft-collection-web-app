import React from 'react';
import PropTypes from 'prop-types';
import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
import { withStyles } from '@material-ui/core';

import useEagerConnect from '../hooks/useEagerConnect';

import { Header } from '../layouts';
import HomeStyle from './index.style';

import './index.module.css';

const Home = ({ classes }) => {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === 'string' && !!library;

  return (
    <div className={classes.mainContainer}>
      <Header triedToEagerConnect={triedToEagerConnect} isConnected={isConnected} />

      <main>
        <div>DABA</div>
      </main>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(HomeStyle, { withTheme: true })(Home);
