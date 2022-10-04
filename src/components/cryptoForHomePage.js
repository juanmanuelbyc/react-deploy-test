import React from 'react';
import PropTypes from 'prop-types';

const CryptoForHomePage = ({ crypto }) => {
  const { image } = crypto;
  const name = crypto.name.toUpperCase();
  const price = crypto.current_price;

  return (
    <button type="button" className="individualCryptoContainerHP" >
      <span className="rightArrow">⧁</span>
      <div className="cryptoImageContainerHP">
        <img className="cryptoIconHomePage" src={image} alt="Crypto-logo" />
      </div>
      <div className="cryptoTextsContainerHP">
        <h4>{name}</h4>
        <div className="textRow">
          <span>$</span>
          <span>{price}</span>
        </div>
      </div>
    </button>
  );
};

CryptoForHomePage.propTypes = {
  crypto: PropTypes.shape({
    name: PropTypes.string,
    current_price: PropTypes.number,
    image: PropTypes.string,
    market_cap_rank: PropTypes.number,
  }).isRequired,
};

export default CryptoForHomePage;
