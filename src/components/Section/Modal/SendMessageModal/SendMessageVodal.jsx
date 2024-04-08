import React from 'react';
import {
  ContentStyled,
  SendMessageVodalStyled,
} from './SendMessageVodal.styled';

export default function SendMessageVodal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  // useEffect(() => {
  //   const handleKeyDown = event => {
  //     if (event.code === 'Escape') {
  //       closeModal();
  //     }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [closeModal]);

  // const handleOverlayClick = event => {
  //   if (event.currentTarget === event.target) {
  //     closeModal();
  //   }
  // };

  return (
    <SendMessageVodalStyled>
      <ContentStyled>
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <div className='modal-text'>
          <h3>Заповни форму</h3>
          <p>Перейди за посиланням</p>
          <div>
            Натисни на відправити, закріпи свою демку і напиши про себе: .....
          </div>

          <button>
            <a href="mailto:budetak.music@gmail.com">Відправити пропозицію</a>
          </button>
        </div>
      </ContentStyled>
    </SendMessageVodalStyled>
  );
}
