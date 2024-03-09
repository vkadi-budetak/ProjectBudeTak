import React from 'react';
import { HeroPosterStyled } from './HeroPoster.styled';

export default function HeroPoster() {
  return (
    <HeroPosterStyled>
      <div>
        <video className="video" width="640" height="360" controls={false} autoPlay muted>
          <source
            src="/ProjectBudeTak/video/BudeTak.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="hero-subject">
          <h2 className="hero-title">Замовити виступ гурту</h2>

          {/* <p className="hero-text">Заповни форму</p> */}
        <button className="hero-btn">
          <span className="hero-btn-text">Замовити</span>
        </button>
      </div>
    </HeroPosterStyled>
  );
}
