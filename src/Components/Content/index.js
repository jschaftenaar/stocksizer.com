import React from 'react';
import style from './Content.module.scss';

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

export default Content;
