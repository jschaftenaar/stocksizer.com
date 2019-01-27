import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';
import ContentHeader from '../ContentHeader';

const Position = ({ticker}) => {
  return (
    <div className={style.wrapper}>
      <ContentHeader title={ticker}/>
      <div className={style.content}>
        <p>Some content goes here</p>
      </div>
    </div>
  );
}

Position.propTypes = {
  ticker: PropTypes.string.isRequired
};

export default Position;
