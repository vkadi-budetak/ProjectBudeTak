import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderStyled } from './Header.styled';
import ContactcModal from '../Modal/ContactModal/ContactModal';

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
            <ContactcModal/>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
