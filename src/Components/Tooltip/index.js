import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const Tooltip = ({children, content}) => {

  return (
    <div className={style.wrapper}>
      {children}
      <div className={style.content}>{content}</div>
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired
};

export default Tooltip;
