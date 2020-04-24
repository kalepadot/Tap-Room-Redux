import React from 'react';
import PropTypes from "prop-types";

const Keg = (props) => {
  return (
    <div className="keg" id={props.id}>
      <button onClick={() => props.handleKegDelete(props.id)} type="button">Remove</button>
      <img src={props.image} alt=""></img>
      <h5>{props.name} - {props.brand}</h5>
      <button className="kegDetailsButton" onClick={() => props.onKegClick(props.id)}>See Details</button>
    </div>
  )
}
Keg.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string, 
  brand: PropTypes.string,
  id: PropTypes.string,
  onKegClick: PropTypes.func
}

export default Keg;