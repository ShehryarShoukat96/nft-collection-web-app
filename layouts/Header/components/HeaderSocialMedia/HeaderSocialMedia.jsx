import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, withStyles } from '@material-ui/core';

import headerSocialMediaStyle from './headerSocialMedia.style';
import { MediaIcon } from '../../../../components';

const mediaImagePrefix = '/assets/images/';

const mediaIcons = [
  {
    src: `${mediaImagePrefix}IG.png`,
    link: 'https://www.instagram.com/elliepritts',
    alt: 'Instagram',
  },
  {
    src: `${mediaImagePrefix}TikTok.png`,
    link: 'https://www.tiktok.com/@elliepritts',
    alt: 'TikTok',
  },
  {
    src: `${mediaImagePrefix}Twitter.png`,
    link: 'https://twitter.com/elliepritts',
    alt: 'Twitter',
  },
  {
    src: `${mediaImagePrefix}Snapchat.png`,
    link: 'https://www.snapchat.com/add/elliepritts',
    alt: 'Snapchat',
  },
  {
    src: `${mediaImagePrefix}Vimeo.png`,
    link: 'https://vimeo.com/elliepritts',
    alt: 'Vimeo',
  },
  {
    src: `${mediaImagePrefix}Youtube.png`,
    link: 'https://www.youtube.com/channel/UC5AGFmvVder22_TRLrQorCg',
    alt: 'Youtube',
  },
  {
    src: `${mediaImagePrefix}Twitch.png`,
    link: 'https://www.twitch.tv/elliepritts',
    alt: 'Twitch',
  },
  {
    src: `${mediaImagePrefix}LinkedIn.png`,
    link: 'https://www.linkedin.com/in/elliepritts/',
    alt: 'LinkedIn',
  },
];

const HeaderSocialMedia = ({ classes }) => (
  <Grid container justify="center">
    <Grid className={classes.mediaContainer} item xs={11}>
      <Box
        display="flex"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="center"
      >
        { mediaIcons.map(({ link, src, alt }) => (
          <Box key={`social-media-${link}`}>
            <MediaIcon src={src} alt={alt} link={link} />
          </Box>
        ))}
      </Box>
    </Grid>
  </Grid>
);

HeaderSocialMedia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerSocialMediaStyle, { withTheme: true })(HeaderSocialMedia);
