import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { Grid, withStyles } from '@material-ui/core';

import mainStyle from './main.style';
import { NftCard } from '../../components';
import { initMorphingButton } from '../../utils/morphing.utils';

const Main = ({ classes }) => {
  const [isLoading, setIsloading] = React.useState(false);
  const [nfts, setNfts] = React.useState([
    {
      id: 23048565,
      token_id: '31461',
      num_sales: 0,
      background_color: null,
      image_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k',
      image_preview_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k=s250',
      image_thumbnail_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k=s128',
      image_original_url: 'https://fnd.fleek.co/fnd-prod/Qme6mpiY5gHGSh4F9rhZc9fz7omsPRjVM9CMpE4pPwSXG7/nft.gif',
      animation_url: 'https://storage.opensea.io/files/63f6ed7f5040d15e7fbdda44bbc2bae7.mp4',
      animation_original_url: 'https://ipfs.io/ipfs/Qme6mpiY5gHGSh4F9rhZc9fz7omsPRjVM9CMpE4pPwSXG7/nft.mp4',
      name: '3dtoilet x PISSCOIN($PISS)',
      description: 'Own this piece of NFT history by artist 3dtoilet. Celebrating the new movement of PISSCOIN($PISS) and all the GUZZLERS who follow it. \n\nhttps://pisscoin.lol\nhttps://instagram.com/3dtoilet',
      external_link: 'https://foundation.app/spumantelol/3dtoilet-x-pisscoin-piss-31461',
      asset_contract: {
        address: '0x3b3ee1931dc30c1957379fac9aba94d1c48a5405',
        asset_contract_type: 'non-fungible',
        created_date: '2021-01-20T21:10:25.832726',
        name: 'FND NFT',
        nft_version: '3.0',
        opensea_version: null,
        owner: null,
        schema_name: 'ERC721',
        symbol: 'FNDNFT',
        total_supply: '1',
        description: 'Foundation is building the new creative economy. Create, explore & collect digital art NFTs.',
        external_link: 'https://foundation.app/',
        image_url: 'https://lh3.googleusercontent.com/uUdrzISpIJJVRbm_g6mmu-TUaOERBbPJcNA8KeuwI1HNgXy8Kje3c2XhoMIndnPmyono9NUJE8A2_bTd95iqAcjo9pyy-e47flJy=s120',
        default_to_fiat: false,
        dev_buyer_fee_basis_points: 0,
        dev_seller_fee_basis_points: 1000,
        only_proxied_transfers: false,
        opensea_buyer_fee_basis_points: 0,
        opensea_seller_fee_basis_points: 250,
        buyer_fee_basis_points: 0,
        seller_fee_basis_points: 1250,
        payout_address: '0x9d9c46aca6a2c5ff6824a92d521b6381f9f8f1a9',
      },
      permalink: 'https://opensea.io/assets/0x3b3ee1931dc30c1957379fac9aba94d1c48a5405/31461',
      collection: {
        banner_image_url: 'https://lh3.googleusercontent.com/AlryV7Yh-BmKx1Y_4kcr86f-vyeQ6WWP2c0zDICL_Qp6KsYtxDb1yCocxCstmnZq3jacgCyqVxRAFzb6FbHSbflMXwqsWB-6in8C=s2500',
        chat_url: null,
        created_date: '2021-01-20T21:10:26.324044',
        default_to_fiat: false,
        description: 'Foundation is building the new creative economy. Create, explore & collect digital art NFTs.',
        dev_buyer_fee_basis_points: '0',
        dev_seller_fee_basis_points: '1000',
        discord_url: 'https://discord.gg/AQ3VtFh',
        display_data: {
          card_display_style: 'cover',
        },
        external_url: 'https://foundation.app/',
        featured: false,
        featured_image_url: 'https://lh3.googleusercontent.com/qWWg_VLDPugD09rVOJuYbwOSNW5pbW13Adc-PiH3tSKvl0JgvmnByeEpcDaQ_JTtDxrXHCyA1rTEp2Kr630IramlmBy6yrc2-oa5Hq4=s300',
        hidden: false,
        safelist_request_status: 'verified',
        image_url: 'https://lh3.googleusercontent.com/uUdrzISpIJJVRbm_g6mmu-TUaOERBbPJcNA8KeuwI1HNgXy8Kje3c2XhoMIndnPmyono9NUJE8A2_bTd95iqAcjo9pyy-e47flJy=s120',
        is_subject_to_whitelist: false,
        large_image_url: 'https://lh3.googleusercontent.com/qWWg_VLDPugD09rVOJuYbwOSNW5pbW13Adc-PiH3tSKvl0JgvmnByeEpcDaQ_JTtDxrXHCyA1rTEp2Kr630IramlmBy6yrc2-oa5Hq4=s300',
        medium_username: null,
        name: 'Foundation (FND)',
        only_proxied_transfers: false,
        opensea_buyer_fee_basis_points: '0',
        opensea_seller_fee_basis_points: '250',
        payout_address: '0x9d9c46aca6a2c5ff6824a92d521b6381f9f8f1a9',
        require_email: false,
        short_description: null,
        slug: 'fnd',
        telegram_url: null,
        twitter_username: 'withFND',
        instagram_username: null,
        wiki_url: null,
      },
      decimals: 0,
      token_metadata: 'https://api.foundation.app/opensea/31461',
      owner: {
        user: {
          username: 'elliepritts',
        },
        profile_img_url: 'https://storage.googleapis.com/opensea-static/opensea-profile/33.png',
        address: '0x334022d77bfc9e8aa5b34907873457c545d9faf2',
        config: '',
        discord_id: '',
      },
      sell_orders: null,
      creator: {
        user: {
          username: null,
        },
        profile_img_url: 'https://storage.googleapis.com/opensea-static/opensea-profile/23.png',
        address: '0xf73a4da8d034774d5b18de694e5d2b0fbb0aaff4',
        config: '',
        discord_id: '',
      },
      traits: [],
      last_sale: null,
      top_bid: null,
      listing_date: null,
      is_presale: false,
      transfer_fee_payment_token: null,
      transfer_fee: null,
    },
    {
      id: 23048566,
      token_id: '31461',
      num_sales: 0,
      background_color: null,
      image_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k',
      image_preview_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k=s250',
      image_thumbnail_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k=s128',
      image_original_url: 'https://fnd.fleek.co/fnd-prod/Qme6mpiY5gHGSh4F9rhZc9fz7omsPRjVM9CMpE4pPwSXG7/nft.gif',
      animation_url: 'https://storage.opensea.io/files/63f6ed7f5040d15e7fbdda44bbc2bae7.mp4',
      animation_original_url: 'https://ipfs.io/ipfs/Qme6mpiY5gHGSh4F9rhZc9fz7omsPRjVM9CMpE4pPwSXG7/nft.mp4',
      name: '3dtoilet x PISSCOIN($PISS)',
      description: 'Own this piece of NFT history by artist 3dtoilet. Celebrating the new movement of PISSCOIN($PISS) and all the GUZZLERS who follow it. \n\nhttps://pisscoin.lol\nhttps://instagram.com/3dtoilet',
      external_link: 'https://foundation.app/spumantelol/3dtoilet-x-pisscoin-piss-31461',
      asset_contract: {
        address: '0x3b3ee1931dc30c1957379fac9aba94d1c48a5405',
        asset_contract_type: 'non-fungible',
        created_date: '2021-01-20T21:10:25.832726',
        name: 'FND NFT',
        nft_version: '3.0',
        opensea_version: null,
        owner: null,
        schema_name: 'ERC721',
        symbol: 'FNDNFT',
        total_supply: '1',
        description: 'Foundation is building the new creative economy. Create, explore & collect digital art NFTs.',
        external_link: 'https://foundation.app/',
        image_url: 'https://lh3.googleusercontent.com/uUdrzISpIJJVRbm_g6mmu-TUaOERBbPJcNA8KeuwI1HNgXy8Kje3c2XhoMIndnPmyono9NUJE8A2_bTd95iqAcjo9pyy-e47flJy=s120',
        default_to_fiat: false,
        dev_buyer_fee_basis_points: 0,
        dev_seller_fee_basis_points: 1000,
        only_proxied_transfers: false,
        opensea_buyer_fee_basis_points: 0,
        opensea_seller_fee_basis_points: 250,
        buyer_fee_basis_points: 0,
        seller_fee_basis_points: 1250,
        payout_address: '0x9d9c46aca6a2c5ff6824a92d521b6381f9f8f1a9',
      },
      permalink: 'https://opensea.io/assets/0x3b3ee1931dc30c1957379fac9aba94d1c48a5405/31461',
      collection: {
        banner_image_url: 'https://lh3.googleusercontent.com/AlryV7Yh-BmKx1Y_4kcr86f-vyeQ6WWP2c0zDICL_Qp6KsYtxDb1yCocxCstmnZq3jacgCyqVxRAFzb6FbHSbflMXwqsWB-6in8C=s2500',
        chat_url: null,
        created_date: '2021-01-20T21:10:26.324044',
        default_to_fiat: false,
        description: 'Foundation is building the new creative economy. Create, explore & collect digital art NFTs.',
        dev_buyer_fee_basis_points: '0',
        dev_seller_fee_basis_points: '1000',
        discord_url: 'https://discord.gg/AQ3VtFh',
        display_data: {
          card_display_style: 'cover',
        },
        external_url: 'https://foundation.app/',
        featured: false,
        featured_image_url: 'https://lh3.googleusercontent.com/qWWg_VLDPugD09rVOJuYbwOSNW5pbW13Adc-PiH3tSKvl0JgvmnByeEpcDaQ_JTtDxrXHCyA1rTEp2Kr630IramlmBy6yrc2-oa5Hq4=s300',
        hidden: false,
        safelist_request_status: 'verified',
        image_url: 'https://lh3.googleusercontent.com/uUdrzISpIJJVRbm_g6mmu-TUaOERBbPJcNA8KeuwI1HNgXy8Kje3c2XhoMIndnPmyono9NUJE8A2_bTd95iqAcjo9pyy-e47flJy=s120',
        is_subject_to_whitelist: false,
        large_image_url: 'https://lh3.googleusercontent.com/qWWg_VLDPugD09rVOJuYbwOSNW5pbW13Adc-PiH3tSKvl0JgvmnByeEpcDaQ_JTtDxrXHCyA1rTEp2Kr630IramlmBy6yrc2-oa5Hq4=s300',
        medium_username: null,
        name: 'Foundation (FND)',
        only_proxied_transfers: false,
        opensea_buyer_fee_basis_points: '0',
        opensea_seller_fee_basis_points: '250',
        payout_address: '0x9d9c46aca6a2c5ff6824a92d521b6381f9f8f1a9',
        require_email: false,
        short_description: null,
        slug: 'fnd',
        telegram_url: null,
        twitter_username: 'withFND',
        instagram_username: null,
        wiki_url: null,
      },
      decimals: 0,
      token_metadata: 'https://api.foundation.app/opensea/31461',
      owner: {
        user: {
          username: 'elliepritts',
        },
        profile_img_url: 'https://storage.googleapis.com/opensea-static/opensea-profile/33.png',
        address: '0x334022d77bfc9e8aa5b34907873457c545d9faf2',
        config: '',
        discord_id: '',
      },
      sell_orders: null,
      creator: {
        user: {
          username: null,
        },
        profile_img_url: 'https://storage.googleapis.com/opensea-static/opensea-profile/23.png',
        address: '0xf73a4da8d034774d5b18de694e5d2b0fbb0aaff4',
        config: '',
        discord_id: '',
      },
      traits: [],
      last_sale: null,
      top_bid: null,
      listing_date: null,
      is_presale: false,
      transfer_fee_payment_token: null,
      transfer_fee: null,
    },
    {
      id: 23048567,
      token_id: '31461',
      num_sales: 0,
      background_color: null,
      image_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k',
      image_preview_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k=s250',
      image_thumbnail_url: 'https://lh3.googleusercontent.com/ViAIjNyefUh50RFlu-RZlHCNFL4TnD9MwxKpKBS9FzZp-Ys5uwWnpTkb_nXa58ZNNEE-kEImPfo-qWpdeXhrVBV0nF3FEBrokosni9k=s128',
      image_original_url: 'https://fnd.fleek.co/fnd-prod/Qme6mpiY5gHGSh4F9rhZc9fz7omsPRjVM9CMpE4pPwSXG7/nft.gif',
      animation_url: 'https://storage.opensea.io/files/63f6ed7f5040d15e7fbdda44bbc2bae7.mp4',
      animation_original_url: 'https://ipfs.io/ipfs/Qme6mpiY5gHGSh4F9rhZc9fz7omsPRjVM9CMpE4pPwSXG7/nft.mp4',
      name: '3dtoilet x PISSCOIN($PISS)',
      description: 'Own this piece of NFT history by artist 3dtoilet. Celebrating the new movement of PISSCOIN($PISS) and all the GUZZLERS who follow it. \n\nhttps://pisscoin.lol\nhttps://instagram.com/3dtoilet',
      external_link: 'https://foundation.app/spumantelol/3dtoilet-x-pisscoin-piss-31461',
      asset_contract: {
        address: '0x3b3ee1931dc30c1957379fac9aba94d1c48a5405',
        asset_contract_type: 'non-fungible',
        created_date: '2021-01-20T21:10:25.832726',
        name: 'FND NFT',
        nft_version: '3.0',
        opensea_version: null,
        owner: null,
        schema_name: 'ERC721',
        symbol: 'FNDNFT',
        total_supply: '1',
        description: 'Foundation is building the new creative economy. Create, explore & collect digital art NFTs.',
        external_link: 'https://foundation.app/',
        image_url: 'https://lh3.googleusercontent.com/uUdrzISpIJJVRbm_g6mmu-TUaOERBbPJcNA8KeuwI1HNgXy8Kje3c2XhoMIndnPmyono9NUJE8A2_bTd95iqAcjo9pyy-e47flJy=s120',
        default_to_fiat: false,
        dev_buyer_fee_basis_points: 0,
        dev_seller_fee_basis_points: 1000,
        only_proxied_transfers: false,
        opensea_buyer_fee_basis_points: 0,
        opensea_seller_fee_basis_points: 250,
        buyer_fee_basis_points: 0,
        seller_fee_basis_points: 1250,
        payout_address: '0x9d9c46aca6a2c5ff6824a92d521b6381f9f8f1a9',
      },
      permalink: 'https://opensea.io/assets/0x3b3ee1931dc30c1957379fac9aba94d1c48a5405/31461',
      collection: {
        banner_image_url: 'https://lh3.googleusercontent.com/AlryV7Yh-BmKx1Y_4kcr86f-vyeQ6WWP2c0zDICL_Qp6KsYtxDb1yCocxCstmnZq3jacgCyqVxRAFzb6FbHSbflMXwqsWB-6in8C=s2500',
        chat_url: null,
        created_date: '2021-01-20T21:10:26.324044',
        default_to_fiat: false,
        description: 'Foundation is building the new creative economy. Create, explore & collect digital art NFTs.',
        dev_buyer_fee_basis_points: '0',
        dev_seller_fee_basis_points: '1000',
        discord_url: 'https://discord.gg/AQ3VtFh',
        display_data: {
          card_display_style: 'cover',
        },
        external_url: 'https://foundation.app/',
        featured: false,
        featured_image_url: 'https://lh3.googleusercontent.com/qWWg_VLDPugD09rVOJuYbwOSNW5pbW13Adc-PiH3tSKvl0JgvmnByeEpcDaQ_JTtDxrXHCyA1rTEp2Kr630IramlmBy6yrc2-oa5Hq4=s300',
        hidden: false,
        safelist_request_status: 'verified',
        image_url: 'https://lh3.googleusercontent.com/uUdrzISpIJJVRbm_g6mmu-TUaOERBbPJcNA8KeuwI1HNgXy8Kje3c2XhoMIndnPmyono9NUJE8A2_bTd95iqAcjo9pyy-e47flJy=s120',
        is_subject_to_whitelist: false,
        large_image_url: 'https://lh3.googleusercontent.com/qWWg_VLDPugD09rVOJuYbwOSNW5pbW13Adc-PiH3tSKvl0JgvmnByeEpcDaQ_JTtDxrXHCyA1rTEp2Kr630IramlmBy6yrc2-oa5Hq4=s300',
        medium_username: null,
        name: 'Foundation (FND)',
        only_proxied_transfers: false,
        opensea_buyer_fee_basis_points: '0',
        opensea_seller_fee_basis_points: '250',
        payout_address: '0x9d9c46aca6a2c5ff6824a92d521b6381f9f8f1a9',
        require_email: false,
        short_description: null,
        slug: 'fnd',
        telegram_url: null,
        twitter_username: 'withFND',
        instagram_username: null,
        wiki_url: null,
      },
      decimals: 0,
      token_metadata: 'https://api.foundation.app/opensea/31461',
      owner: {
        user: {
          username: 'elliepritts',
        },
        profile_img_url: 'https://storage.googleapis.com/opensea-static/opensea-profile/33.png',
        address: '0x334022d77bfc9e8aa5b34907873457c545d9faf2',
        config: '',
        discord_id: '',
      },
      sell_orders: null,
      creator: {
        user: {
          username: null,
        },
        profile_img_url: 'https://storage.googleapis.com/opensea-static/opensea-profile/23.png',
        address: '0xf73a4da8d034774d5b18de694e5d2b0fbb0aaff4',
        config: '',
        discord_id: '',
      },
      traits: [],
      last_sale: null,
      top_bid: null,
      listing_date: null,
      is_presale: false,
      transfer_fee_payment_token: null,
      transfer_fee: null,
    },
  ]);

  React.useEffect(() => {
    const { scrollHandler, noScrollFn } = initMorphingButton();

    return () => {
      // Just to be double sure
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('scroll', noScrollFn);
    };
  }, []);

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
        {isLoading ? <LoadSkeletonDivs />
          : (
            <>
              {nfts.map((nft, index) => (
                <Grid className={classes.contentItems} key={nft.id} item xs={6}>
                  <NftCard nft={nft} />
                </Grid>
              ))}
            </>
          )}
      </Grid>
    </main>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(mainStyle, { withTheme: true })(Main);
