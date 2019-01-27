import React from 'react';
import PropTypes from 'prop-types';
import style from './Menu.module.scss';
import { Link } from "react-router-dom";

const Menu = (props) => {
  let positions=props.positions;

  const links = positions.map((item, index) => (
    <li key={index}>
      <Link to={`/position/${item.uuid}`} >
        {item.ticker}
        &nbsp;
        <sup>
          {item.position}
        </sup>
      </Link>
    </li>
  ));

  return (
    <ul className={style.menu}>
      <li><Link to='/'>Overview</Link></li>
      <li><Link to='/size'>Size Position</Link></li>
      {links}
      <li><Link to='/settings'>Settings</Link></li>
    </ul>
  );
}

Menu.defaultProps = {
  positions: []
};

Menu.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.shape({
    ticker: PropTypes.string,
    uuid: PropTypes.string,
    position: PropTypes.string
  })),
};

export default Menu;
