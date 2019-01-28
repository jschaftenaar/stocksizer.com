import React from 'react';
import style from './Content.module.scss';

const Content = ({title, children}) => (
  <div className={style.wrapper}>
    <h1 className={style.title}>
      {title}
    </h1>
    <div className={style.content}>
      {children}
    </div>
  </div>
);

export default Content;
