import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, CircularProgress, withStyles,
} from '@material-ui/core';

import { useWeb3React } from '@web3-react/core';
import MetaMaskOnboarding from '@metamask/onboarding';
import { UserRejectedRequestError } from '@web3-react/injected-connector';
import headerWalletStyle from './headerWallet.style';

import { injected } from '../../../../connectors';
import useENSName from '../../../../hooks/useENSName';
import { formatEtherscanLink, shortenHex } from '../../../../utils/web3.utils';
import useOpenSeaAsset from '../../../../hooks/useOpenSeaAsset';

const HeaderWallet = ({ triedToEagerConnect, isConnected, classes }) => {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError,
  } = useWeb3React();

  const { data: nftData } = useOpenSeaAsset(account);
  // initialize metamask onboarding
  const onboarding = useRef();

  useEffect(() => {
    onboarding.current = new MetaMaskOnboarding();
  }, []);

  // manage connecting state for injected connector
  const [, setConnecting] = useState(false);

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      onboarding.current?.stopOnboarding();
    }
  }, [active, error]);

  const connectToMetaMask = () => {
    setConnecting(true);

    activate(injected, undefined, true).catch((error) => {
      // ignore the error if it's a user rejected request
      if (error instanceof UserRejectedRequestError) {
        setConnecting(false);
      } else {
        setError(error);
      }
    });
  };

  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== 'string') {
    const hasMetaMaskOrWeb3Available = MetaMaskOnboarding.isMetaMaskInstalled()
      || window?.ethereum
      || window?.web3;

    return (
      <Grid container className={classes.containerGrid} spacing={0}>
        <Grid item xs={12}>
          {hasMetaMaskOrWeb3Available
            ? (
              <Button className={classes.button} onClick={connectToMetaMask} fullWidth variant="contained">
                Connect with wallet
              </Button>
            )
            : (
              <Button
                className={classes.button}
                fullWidth
                variant="contained"
                onClick={() => onboarding.current?.startOnboarding()}
              >
                Install MetaMask
              </Button>
            )}
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container className={classes.containerGrid} spacing={0} justify="space-between">
      <Grid item xs={6}>
        <a
          {...{
            href: formatEtherscanLink('Account', [chainId, account]),
            target: '_blank',
            rel: 'noopener noreferrer',
            className: classes.ensLink,
          }}
        >
          <Button className={classes.button}>
            {ENSName || `${shortenHex(account, 8)}`}
          </Button>
        </a>
      </Grid>
      <Grid item xs={4}>
        <Button className={classes.button}>
          Balance:
          {' '}
          { isConnected && nftData && nftData.assets
            ? nftData.assets.length
            : <CircularProgress color="#fff" size={16} /> }
        </Button>
      </Grid>
    </Grid>
  );
};

HeaderWallet.propTypes = {
  triedToEagerConnect: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerWalletStyle, { withTheme: true })(HeaderWallet);
