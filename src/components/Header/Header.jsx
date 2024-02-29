import React from 'react';

import { HeaderStyled } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <nav className="header-title ">
        <a href="./index.html">
        <img className="header-logo" src="/ProjectBudeTak/img/logo_black.png" alt="BudeTakLogo"/>
        </a>
        <ul className="header-iteams">
          <li className="list">
            <a className="header-iteam " href="./index.html">
              Music
            </a>
          </li>
          <li className="list">
            <a className="header-iteam " href="./index.html">
              Photo
            </a>
          </li>
          <li className="list">
            <a className="header-iteam " href="./index.html">
              Clips
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
