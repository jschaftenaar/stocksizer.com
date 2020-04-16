import React from 'react';
import style from './Header.module.scss';

const Header = () => (
  <div className={style.header}>
    <h1 className={style.title}>
      <span className="fa-stack">
        <i className={['fas', 'fa-circle', 'fa-stack-1x', style.icon_back].join(' ')}></i>
        <i className={['fas', 'fa-circle', 'fa-stack-1x', style.icon_middle].join(' ')}></i>
        <i className={['fas','fa-random', 'fa-stack-1x',style.icon_front].join(' ')}></i>
      </span>
      Stock Sizer
    </h1>
  </div>
);

export default Header;
