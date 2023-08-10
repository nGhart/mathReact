import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <NavLink to="/ ">
      <div className="header">
        <h1 className="title">Math Algorithms</h1>
      </div>
    </NavLink>
  );
}

export default Header;
