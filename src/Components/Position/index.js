import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';
import Content from '../Content';

const Position = ({ticker}) => {
  return (
  	<Content title={ticker}>
        <p>Some content goes here</p>
    </Content>
  );
}

Position.propTypes = {
  ticker: PropTypes.string.isRequired
};

export default Position;
