import React from 'react';

import { СollaborationStyled } from '../СollaborationPage/СollaborationPage.styled';

export default function СollaborationPage() {
  return (
    <СollaborationStyled>
      <div className="forGroup-fon">
        <img
          className="forGroup-img-fon"
          src="/ProjectBudeTak/img/logo/logo_black.png"
          alt="BudeTakLogo"
        />
      </div>
      <h3 className="title">Привіт, ми пропонуємо записати з нами трек!</h3>
      <p className="title-text">Що для цього потрібно?</p>
      <p className="item-text">
        Все просто! НАПИШИ у повідомлені свою сторінку Instagram, TikTok,
        YouTube. Прикріпити демку з яким би треком хотіли зробити спільник трек,
        написати щось від себе, пару речень і сміло натискай на{' '}
      <a href="mailto:budetak.music@gmail.com"> КОЛОБОРАЦІЯ</a> Із
        задоволенням чекаємо на демки :)
      </p>
    </СollaborationStyled>
  );
}
