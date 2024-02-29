import React from 'react';
import { ForGroupStyled } from './ForGroup.styled';

export default function ForGroup() {
  return (
    <ForGroupStyled>
      <div className="forGroup-fon">
        <img
          className="forGroup-img-fon"
          src="/ProjectBudeTak/img/pape_fon.png"
          alt="Fon"
        />
      </div>
      
      <div className="forGroup-container">
      <h3 className="forGroup-title">Хто ми?</h3>
        <div className="forGroup-content">
          <img
            className="forGroup-img"
            src="/ProjectBudeTak/img/ForGroup2.png"
            alt="HistoryMusic"
          />
          <p className="forGroup-text">
            Всім привіт, ми україномовний гурт будетак. І ми це все заварили ,
            коли ще українське не було таким модним. Тематика наших пісень у
            більшості випадків про кохання і почуття. Те що близько кожному. А
            музичне звучання ми змінюємо постійно, експерементуємо. Намагаємося
            робити так щоб це звучало сучасно . Так щоб молодь слухала своє.
            Переважно робимо те що подобається нам, не в залежності від топів.
            Нас порівнють з Кальян репом. І якщо бути чесним ми себе не
            асоціювали з таким напрямом репу, але якось певні медіа ресурси
            охрестили нас виконавцями саме такого напряму. А ми і не проти!
          </p>
        </div>
        <h3 className="forGroup-title">Де нас знайти?</h3>
        <div className="forGroup-content">
          <p className="forGroup-text">
            Нас можна знайти на найбільших музичних стрімінгових,
            завантажувальних та соціальних платформах, таких як Spotify, Apple
            Music, TikTok, Amazon, Deezer, Instagram, Tidal та інших.
          </p>
          <img
            className="forGroup-img-platform"
            src="/ProjectBudeTak/img/pngwing.png"
            alt="MusicPlatform"
          />
        </div>
      </div>
    </ForGroupStyled>
  );
}
