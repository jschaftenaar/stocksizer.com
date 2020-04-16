import React from 'react';
import Content from '../Content';
import PositionBasics from '../../Containers/Size/PositionBasics';
import PositionPercentages from '../../Containers/Size/PositionPercentages';
import PositionTotal from '../../Containers/Size/PositionTotal';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

const Size = ({
  onAdd,
  position,
  redirect,
  onReset
}) => {
  if (redirect) {
    return (<Redirect to={redirect} />);
  }

  return (
    <Content title='Size Position'
      actionLabel='Reset'
      actionIcon='fa-refresh'
      onAction = {(event) => onReset(event)}
    >
      <form onSubmit={(event) => onAdd(event, position)}>
        <div className="card-columns">
          <PositionBasics/>
          <PositionPercentages/>
          <PositionTotal/>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary"><i className="fas fa-plus-square"></i> Add Position</button>
          </div>
        </div>
      </form>
    </Content>
  );
}

Size.defaultProps = {
  onAdd: () => {},
  onReset: () => {},
  redirect: undefined,
  position: {
    type: '',
    ticker: '',
    price: '',
    profit: '',
    stoploss: '',
    shares: '',
    commissions: '',
    commissionsType: ''
  }
}

Size.propTypes = {
  redirect: PropTypes.string,
  onAdd: PropTypes.func,
  onReset: PropTypes.func,
  position: PropTypes.shape({
    type: PropTypes.string,
    ticker: PropTypes.string,
    price: PropTypes.string,
    profit: PropTypes.string,
    stoploss: PropTypes.string,
    shares: PropTypes.string,
    commissions: PropTypes.string,
  })
};

export default Size;
