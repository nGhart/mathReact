import React from 'react';
import Row from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navSection">
      <div>
        <h1 className="learn">Let's learn about Math !!!</h1>
        <Row>
          <div className="navContainer fib">
            <h2 className="fibHeader">FIBONACCI SEQUENCE</h2>
            <div className="board">
              <h1 className="boardText">123</h1>
            </div>
            <NavLink to="fibonacci">
              <button className="navButtons">Start</button>
            </NavLink>
          </div>
          <div className="navContainer fact">
            <h2 className="factHeader">FACTORIALS</h2>
            <div className="board">
              <h1 className="boardText">123</h1>
            </div>
            <NavLink to="factorial">
              <button className="navButtons">Start</button>
            </NavLink>
          </div>
          <div className="navContainer prime">
            <h2 className="primeHeader">PRIME NUMBERS</h2>
            <div className="board">
              <h1 className="boardText">123</h1>
            </div>
            <NavLink to="prime">
              <button className="navButtons">Start</button>
            </NavLink>
          </div>
          <div className="navContainer power">
            <h2 className="power2Header">POWER OF TWO</h2>
            <div className="board">
              <h1 className="boardText">123</h1>
            </div>
            <NavLink to="power">
              <button className="navButtons">Start</button>
            </NavLink>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Navigation;
