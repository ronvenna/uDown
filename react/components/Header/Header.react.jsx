import React from 'react';
import Logo from '../Logo/Logo.react.jsx';
import User from '../User/User.react.jsx';

class Header extends React.Component {
  render() {
    return (
      <nav className="my-header navbar">
        <div className="navbar-left">
          <div className="navbar-item">
            <Logo />
          </div>
        </div>

        <User />
      </nav>
    )
  }
}

export default Header;
