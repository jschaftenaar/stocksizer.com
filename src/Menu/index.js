import React from 'react';
import style from './Menu.module.scss';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className={style.menu}>
      <li><Link to='/'>Overview</Link></li>
      <li><Link to='/add'>Size Position</Link></li>
      <li><Link to='/settings'>Settings</Link></li>
    </ul>
  );
}

export default Menu;
