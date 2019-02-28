import React from 'react';
import style from './Content.module.scss';
import { PropTypes } from 'prop-types';

const Content = ({title, children, actionLabel, onAction, actionType}) => {
  let action = '';
  if (actionLabel) {
    action = (<button className="btn btn-danger float-right" type="button" onClick={onAction}>{actionLabel}</button>);
  }
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}{action}</h1>
      <div className={style.content}>{children}</div>
    </div>
  );
}

Content.defaultProps = {
  title: '',
  actionLabel: '',
  onAction: () => {},
  actionType: ''
};

Content.propTypes = {
  title: PropTypes.node,
  actionLabel: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onAction: PropTypes.func,
  actionType: PropTypes.string
};

export default Content;
