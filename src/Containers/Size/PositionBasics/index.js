import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PositionBasics from '../../../Components/PositionBasics';
import axios from 'axios';
import { positionTypeChange, tickerChange, priceChange } from '../../../Actions/Size';

const  mapStateToProps = ({size}, {match}) => {
  return {
    positionType: size.positionType,
    ticker: size.ticker,
    price: size.price
  };
}

const mapDispatchToProps = dispatch => {
  const preventDefaultDispatch = (event, value) => {
    event.preventDefault();
    dispatch(value);
  };
  return {
    positionTypeChange: event => dispatch(positionTypeChange(event.target.value)),
    tickerChange: event => preventDefaultDispatch(event, tickerChange(event.target.value)),
    priceChange: event => preventDefaultDispatch(event, priceChange(event.target.value)),
    onAction: (event, ticker) => {
      event.preventDefault();
      const url = `/data/ticker/${ticker.toUpperCase()}`;
      axios.get(url)
        .then(response => {
          const price = response.data.price.toString();
          dispatch(priceChange(price));
      });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionBasics);
