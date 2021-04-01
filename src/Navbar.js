import React from 'react';
import logo from './logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav__left">
        <h4 className="nav__menu">
          <MenuIcon />
        </h4>
        <img className="nav__logo" src={logo} alt="LOGO" />
      </div>
      <div className="nav__input">
        <input placeholder="Titles, people, genres" type="text" />
        <h4 className="nav__input__button">
          <SearchIcon />
        </h4>
      </div>
      <div className="nav__icons">
        <h4 className="nav__icon">
          <NotificationsIcon />
        </h4>
        <h4 className="nav__icon">
          <LiveTvIcon />
        </h4>
        <h4 className="nav__icon">
          <TheatersIcon />
        </h4>
        <h4 className="nav__icon">
          <CardGiftcardIcon />
        </h4>
        <h4 className="nav__avatar">
          <AccountCircleIcon />
        </h4>
      </div>
    </div>
  );
}

export default Navbar;
