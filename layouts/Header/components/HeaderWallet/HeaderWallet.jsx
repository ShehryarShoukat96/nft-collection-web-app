import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, withStyles } from '@material-ui/core';

import headerWalletStyle from './headerWallet.style';

const HeaderWallet = ({ triedToEagerConnect, isConnected, classes }) => (
  <Grid container className={classes.containerGrid} spacing={0}>
    <Grid item xs={12}>
      <Button className={classes.button} fullWidth variant="contained">
        Connect with wallet
      </Button>
    </Grid>
  </Grid>
);

HeaderWallet.propTypes = {
  triedToEagerConnect: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerWalletStyle, { withTheme: true })(HeaderWallet);
