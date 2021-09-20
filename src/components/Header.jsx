import React from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/image/header-logo.svg';

function Header() {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <header className="header">
      <Link to="/">
        <div className="header-logo">
          <img src={logo} alt="Header-logo" />
          <div className="header-title">perfume react</div>
        </div>
      </Link>
      <div className="header-right">
        <Link to="/favorites">
          <div className="favorite header-button">избранное</div>{' '}
        </Link>
        <div className="header-line"></div>
        <Link to="/cart">
          <div className="header-cart header-button">
            <LocalMallIcon />
            <span className="total-price">{totalPrice} руб</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
