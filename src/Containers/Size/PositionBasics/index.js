import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PositionBasics from '../../../Components/Size/PositionBasics';
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
      const url = `https://api.iextrading.com/1.0/stock/${ticker.toUpperCase()}/price`;
      axios.get(url)
        .then(response => {
          dispatch(priceChange(response.data.toString()));
      });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionBasics);
