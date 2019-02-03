import React from 'react';
import Content from '../Content';
import PositionBasics from './PositionBasics';
import PositionPercentages from './PositionPercentages';
import PositionTotal from './PositionTotal';
import style from './Size.module.scss';
import PropTypes from 'prop-types';

const Size = ({onAdd, positionChange, position, ticker, tickerChange}) => {
  return (
    <Content title='Size Position'>
      <form onSubmit={onAdd}>
        <div className="card-columns">
          <PositionBasics
            positionChange={positionChange}
            position={position}
            tickerChange={tickerChange}
            ticker={ticker}
          />
          <PositionPercentages/>
          <PositionTotal/>
        </div>

        <div className="form-group row">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary">Add Position</button>
          </div>
        </div>
      </form>
    </Content>
  );
}

Size.defaultProps = {
  onAdd: (event) => { event.preventDefault(); }
}

Size.propTypes = {
  ...PositionBasics.propTypes,
  ...PositionPercentages.propTypes,
  ...PositionTotal.propTypes,
  onAdd: PropTypes.func
};

export default Size;
