import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PositionBasics from '../../../Components/Size/PositionBasics';
import axios from 'axios';
import { SizePositionChange, SizeTickerChange, SizeSetPriceLoading, SizeSetPrice } from '../../../Actions';

const  mapStateToProps = ({size}, {match}) => {
  return {
    position: size.position,
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
    positionChange: event => dispatch(SizePositionChange(event.target.value)),
    tickerChange: event => preventDefaultDispatch(event, SizeTickerChange(event.target.value)),
    priceChange: event => preventDefaultDispatch(event, SizeSetPrice(event.target.value)),
    onAction: (event, ticker) => {
      event.preventDefault();
      dispatch(SizeSetPriceLoading());
      const url = `https://api.iextrading.com/1.0/stock/${ticker.toUpperCase()}/price`;
      axios.get(url)
        .then(response => {
          dispatch(SizeSetPrice(response.data.toString()));
      });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionBasics);
