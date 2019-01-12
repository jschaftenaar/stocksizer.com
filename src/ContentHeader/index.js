import React from 'react';
import style from './ContentHeader.module.scss';

const ContentHeader = ({title}) => (
  <h1 className={style.title}>
    {title}
  </h1>
);

export default ContentHeader;
