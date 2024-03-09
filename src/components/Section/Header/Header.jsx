import React from 'react';

import { HeaderStyled } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <nav className="header-title ">
        <a href="./index.html">
          <img
            className="header-logo"
            src="/ProjectBudeTak/img/logo/logo_black.png"
            alt="BudeTakLogo"
          />
        </a>
        <ul className="header-iteams">
          <li className="list">
            <a className="header-iteam " href="./index.html">
              Сcollaboration
            </a>
          </li>
          <li className="list">
            <a className="header-iteam " href="./index.html">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
