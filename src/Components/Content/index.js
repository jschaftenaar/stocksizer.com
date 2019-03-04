import React from 'react';
import style from './Content.module.scss';
import { PropTypes } from 'prop-types';

const Content = ({title, children, actionLabel, onAction, actionType, actionIcon}) => {
  let action = '';
  if (actionLabel) {
    const icon = actionIcon
      ? (<i className={['fas',actionIcon].join(' ')}></i>)
      : '';
    action = (<button className={['btn','btn-'+actionType,'float-right'].join(' ')} type="button" onClick={onAction}>{icon}{actionLabel}</button>);
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
  actionType: 'danger',
  actionIcon: ''
};

Content.propTypes = {
  title: PropTypes.node,
  actionLabel: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onAction: PropTypes.func,
  actionIcon: PropTypes.string,
  actionType: PropTypes.string
};

export default Content;
