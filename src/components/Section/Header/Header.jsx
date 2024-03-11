import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderStyled } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <nav className="header-title ">
        <NavLink to='/'>
          <img
            className="header-logo"
            src="/ProjectBudeTak/img/logo/logo_black.png"
            alt="BudeTakLogo"
          />
        </NavLink>
        <ul className="header-iteams">
          <li className="list">
            <NavLink to="/collaboration" className="header-iteam ">
              Сollaboration
            </NavLink>
          </li>
          <li className="list">
            <span className="header-iteam">
              Contacts
            </span>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
