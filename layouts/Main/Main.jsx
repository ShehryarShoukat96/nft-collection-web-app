import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { Grid, withStyles } from '@material-ui/core';

import mainStyle from './main.style';
import { NftCard } from '../../components';
import { initMorphingButton } from '../../utils/morphing.utils';
import useOpenSeaAsset from '../../hooks/useOpenSeaAsset';

const Main = ({ classes, address }) => {
  const { data: nftData } = useOpenSeaAsset(address);

  React.useEffect(() => {
    if (nftData && nftData.assets) {
      const { scrollHandler, noScrollFn } = initMorphingButton();

      return () => {
        // Just to be double sure
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('scroll', noScrollFn);
      };
    }

    return undefined;
  }, [nftData]);

  const LoadSkeletonDivs = () => (
    <>
      {Array(6).fill(0).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid className={classes.contentItems} key={index} item xs={6}>
          <Skeleton sx={{ bgcolor: 'white' }} variant="rect" width={180} height={180} />
        </Grid>
      ))}
    </>
  );

  return (
    <main>
      <Grid className={classes.mainContainer} justify="center" container>
        {nftData && nftData.assets ? (
          <>
            {nftData.assets.map((nft) => (
              <Grid className={classes.contentItems} key={nft.id} item xs={6}>
                <NftCard nft={nft} />
              </Grid>
            ))}
          </>
        )
          : <LoadSkeletonDivs /> }
      </Grid>
    </main>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  address: PropTypes.string,
};

Main.defaultProps = {
  address: '0x334022D77BFc9e8Aa5B34907873457c545d9faF2',
};

export default withStyles(mainStyle, { withTheme: true })(Main);
