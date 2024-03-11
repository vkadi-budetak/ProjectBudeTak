import React, { useState } from 'react';
import { HeroPosterStyled } from './HeroPoster.styled';
import SendMessageVodal from '../Modal/SendMessageModal/SendMessageVodal';

export default function HeroPoster() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <HeroPosterStyled>
      <video
        className="video"
        width="640"
        height="360"
        controls={false}
        autoPlay
        muted
      >
        <source src="/ProjectBudeTak/video/BudeTak.mp4" type="video/mp4" />
      </video>
      <div className="hero-subject">
        <h2 className="hero-title">Замовити виступ гурту</h2>
        <button className="hero-btn" onClick={openModal}>
          <span className="hero-btn-text">Замовити</span>
        </button>
        {isModalOpen && <SendMessageVodal />}
      </div>
    </HeroPosterStyled>
  );
}
