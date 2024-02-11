import React from 'react';

import { HeaderStyled } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <nav className="header-title link">
        <a className="header-logo link list" href="./index.html">BudeTak</a>
        <ul className="header-iteams">
          <li className="list">
            <a className='header-iteam link' href="./index.html">Music</a>
          </li>
          <li className="list">
            <a className='header-iteam link' href="./index.html">Photo</a>
          </li>
          <li className="list">
            <a className='header-iteam link' href="./index.html">Clips</a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
