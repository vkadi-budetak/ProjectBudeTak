import React from 'react';
import {
  ContentStyled,
  SendMessageVodalStyled,
} from './SendMessageVodal.styled';

export default function SendMessageVodal() {
  // const [isModalOpen, setModalOpen] = useState(false);
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <SendMessageVodalStyled>
      <ContentStyled>
        <span className="close-btn">&times;</span>
        <h3>Шапка</h3>
        <div>
          Натисни на відправити, закріпи свою демві і напиши про себе: .....
        </div>

        <button>
          <a href="mailto:budetak.music@gmail.com">Відправити пропозицію</a>
        </button>
      </ContentStyled>
    </SendMessageVodalStyled>
  );
}
