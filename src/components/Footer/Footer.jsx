import React from 'react';
import { FooterStyled } from './Footer.styled';
import {ReactComponent as Instagram} from "../../../src/icons/Footer/Instagram.svg"
import {ReactComponent as FaceBook} from "../../../src/icons/Footer/FaceBook.svg"
import {ReactComponent as Telegram} from "../../../src/icons/Footer/Telegram.svg"

export default function Footer() {
  return (
    <FooterStyled>
      <div className='footer-title'>
        <a href="./index.html">
        <img className="footer-logo" src="/ProjectBudeTak/img/logo_white.png" alt="BudeTakLogo"/>
        </a>
        <p className='footer-text'>
        Слухайте українську музику, підписуйтесь на наші канали, щоб не пропустити
жодного релізу!
        </p>
      </div>
      <div>
        <ul className='footer-social-items'>
          <li>
          <a href="https://www.instagram.com/bude_tak/" target="_blank" rel="noreferrer" >
                <Instagram className='footer-social-svg'/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/budetak" target="_blank" rel="noreferrer">
              <FaceBook className='footer-social-svg'/>
            </a>
          </li>
          <li>
            <a href="https://t.me/budetak" target="_blank" rel="noreferrer">
              <Telegram className='footer-social-svg'/>
            </a>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
}
