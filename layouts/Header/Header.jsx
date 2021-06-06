import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import { HeaderWallet, HeaderSocialMedia } from './components';
import headerStyle from './header.style';

const Header = ({ triedToEagerConnect, isConnected, classes }) => (
  <header>
    <Grid container>
      <Grid item xs={12}>
        <HeaderWallet triedToEagerConnect={triedToEagerConnect} isConnected={isConnected} />
        <Typography className={classes.title}>
          Ellie Pritts
        </Typography>
        <HeaderSocialMedia />
      </Grid>
    </Grid>
  </header>
);

Header.propTypes = {
  triedToEagerConnect: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle, { withTheme: true })(Header);
