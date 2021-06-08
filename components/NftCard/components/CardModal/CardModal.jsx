import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Avatar,
  Button,
  Box,
  colors,
  Card,
  CardContent,
  CardActionArea,
  CardHeader,
  Typography,
  withStyles,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

import cardModalStyle from './cardModal.style';

const CardModal = ({ classes, nft }) => {
  const [showMore, setShowMore] = React.useState(true);

  // eslint-disable-next-line react/prop-types
  const Owners = ({ avatarSrc, name, creator = true }) => (
    <Box display="flex" className={classes.owners} alignItems="center">
      <Typography
        variant="subtitle1"
        className={classnames(classes.sfFont, classes.lightFont)}
      >
        { creator ? 'Created' : 'Owned' }
        {' '}
        by
      </Typography>
      <Avatar
        className={classes.avatar}
        alt={name}
        src={avatarSrc}
      />
      <Typography
        variant="subtitle1"
        className={classnames(classes.sfFont, classes.normalFont)}
        color="textSecondary"
      >
        @
        {name || 'John Doe'}
      </Typography>
    </Box>
  );

  return (
    <div className="morph-content">
      <div>
        <Card>
          <CardHeader
            className={classes.cardHeader}
            action={(<CancelIcon className="nft-modal-close" style={{ color: colors.red[400] }} />)}
            title={(
              <Typography noWrap className={classnames(classes.sfFont, classes.normalFont)} variant="subtitle1">
                {nft.name.length > 30 ? `${nft.name.substring(0, 30)}...` : nft.name }
              </Typography>
            )}
          />
          <CardActionArea>
            { nft.animation_url
              ? (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video
                  height="280"
                  width="100%"
                  controls
                >
                  <source src={nft.animation_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
              : (
                <img
                  src={nft.image_original_url || nft.image_preview_url || nft.image_thumbnail_url}
                  height="280"
                  width="100%"
                  alt={nft.name}
                />
              )}

            <CardContent className={classes.cardContent}>
              <Box>
                <Typography
                  className={classnames(classes.sfFont, classes.lightFont, classes.cardContentText)}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  noWrap={showMore}
                >
                  {nft.description}
                </Typography>
                {nft.description.length > 20
                && (
                  <Button
                    className={classes.showMoreButton}
                    onClick={() => setShowMore((val) => !val)}
                  >
                    <Typography
                      className={classnames(classes.sfFont, classes.lightFont)}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      { showMore ? 'Show More' : 'Show Less' }
                    </Typography>
                  </Button>
                ) }
              </Box>
              <Owners
                avatarSrc={nft.creator.profile_img_url}
                name={nft.creator.user.username}
                creator
              />
              <Owners
                avatarSrc={nft.owner.profile_img_url}
                name={nft.owner.user.username}
              />
              <Button className={classes.bidButton} variant="contained" fullWidth color="primary">
                <Typography variant="body1" component="span" className={classnames(classes.sfFont, classes.lightFont, classes.bidButtonText)}>
                  Bid on
                  {' '}
                  <span className={classnames(classes.sfFont, classes.normalFont)}>Foundation</span>
                </Typography>
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

CardModal.propTypes = {
  classes: PropTypes.object.isRequired,
  nft: PropTypes.object.isRequired,
};

export default withStyles(cardModalStyle, { withTheme: true })(CardModal);
