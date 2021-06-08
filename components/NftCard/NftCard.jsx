import React from 'react';

import PropTypes from 'prop-types';
import { CardModal } from './components';

const NftCard = ({ nft }) => {
  React.useEffect(() => {
  }, []);

  return (
    <div className="morph-button morph-button-modal morph-button-modal-2 morph-button-fixed">
      <button type="button">
        <img
          src={nft.image_thumbnail_url}
          height="100%"
          width="100%"
          alt={`${nft.id}`}
        />
      </button>
      <CardModal nft={nft} />
    </div>
  );
};

NftCard.propTypes = {
  nft: PropTypes.object.isRequired,
};

export default NftCard;
