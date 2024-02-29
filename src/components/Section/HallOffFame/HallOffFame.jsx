import React from 'react';
import { HallOffFameStyled } from './HallOffFame.styled';
import {ReactComponent as Instagram} from "../../../icons/Instagram.svg"

export default function HallOffFame() {
  return (
    <HallOffFameStyled>
      <h3>Who are BudeTak?</h3>
      <div className='items'>
        <div>
          <h4>Vkadi</h4>
          <p>Kravchenko Vladyslav</p>
          <img src="/ProjectBudeTak/img/vkadi.jpg" alt="Artist-Vkadi" />
          <ul>
            <li>
              <a href="https://www.instagram.com/vkadi_budetak/" target="_blank" rel="noreferrer" >
                <Instagram/>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Bujidog</h4>
          <p>Bilokin Dmytro</p>
          <img src="/ProjectBudeTak/img/bujidog.jpg" alt="Artist-Bujidog" />
          <ul>
            <li>
              <a href="https://www.instagram.com/bujidog_budetak/" target="_blank" rel="noreferrer">
              <Instagram/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HallOffFameStyled>
  );
}
