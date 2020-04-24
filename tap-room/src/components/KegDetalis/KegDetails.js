import React from 'react';
import PropTypes from 'prop-types';

const KegDetails = (props) => {
  
  function hasInventory(count) {
    return count > 0 ? <button onClick={() => props.onKegPurchase(props.keg.id)}>Pour a Drink</button> : <p>Fresh Out Bro!</p>
  }

  return (
    <div className="details" >
      <p>Details: {props.keg.price}</p>
      <p>{probs.keg.alcoholPercent}</p>
      <br />
      <div className="buttons">
        {hasInventory(props.keg.inventory)}
        <p>Quantity: {props.keg.inventory}</p>
        <button onClick={() => props.onKegRestock(props.keg.id)}>Change The Keg!</button>
      </div>
    </div>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onKegPurchase: PropTypes.func,
  onKegRestock: PropTypes.func
}

export default KegDetails;