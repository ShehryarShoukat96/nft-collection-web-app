import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import mediaIconStyle from './mediaIcon.style';

const MediaIcon = ({
  classes, link, src, alt,
}) => (
  <a className={classes.socialLink} href={link} target="_blank" rel="noreferrer">
    <img src={src} alt={alt} className={classes.icon} />
  </a>
);

MediaIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

MediaIcon.defaultProps = {
  link: '#',
};

export default withStyles(mediaIconStyle, { withTheme: true })(MediaIcon);
