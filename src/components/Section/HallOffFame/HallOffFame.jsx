import React from 'react';
import { HallOffFameStyled } from './HallOffFame.styled';
import {ReactComponent as Instagram} from "../../../icons/Instagram.svg"

export default function HallOffFame() {
  return (
    <HallOffFameStyled>
      <div className='items'>
        <div>
          <img src="/ProjectBudeTak/img/artist/vkadi.png" alt="Artist-Vkadi" />
          <div className='HallOffFame-subtitle'>
            <h4 className="HallOffFame-title">Vkadi</h4>
            <p className="HallOffFame-title-text">Kravchenko Vladyslav</p>
            <ul>
              <li>
                <a href="https://www.instagram.com/vkadi_budetak/" target="_blank" rel="noreferrer" >
                  <Instagram/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src="/ProjectBudeTak/img/artist/bujidog.png" alt="Artist-Bujidog" />
          <h4 className="HallOffFame-title">Bujidog</h4>
          <p className="HallOffFame-title-text">Bilokin Dmytro</p>
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
