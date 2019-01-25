import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';
import ContentHeader from '../ContentHeader';

const Sizer = ({title}) => {
  return (
    <div className={style.wrapper}>
      <ContentHeader title={title}/>
      <div className={style.content}>
        <p>Some content goes here</p>
      </div>
    </div>
  );
}

Sizer.propTypes = {
  title: PropTypes.string.isRequired
};

export default Sizer;
