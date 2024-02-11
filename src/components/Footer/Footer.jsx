import React from 'react';

export default function Footer() {
  return (
    <div>
      <div>
        <a href="./index.html">BudeTak</a>
        <p>
          Listen to Ukrainian music, subscribe to our channels so you don't miss
          any releases!
        </p>
      </div>
      <div>
        <p>Social media</p>
        <ul>
          <li>
            <a href="https://instagram.com">
              Instagram
              <svg>
                <use href="/src/assets/img/306214.svg"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              FaceBook
              <svg>
                <use href="/src/assets/img/306214.svg"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://telegram.com">
              Telegram
              <svg>
                <use href="/src/assets/img/306214.svg"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
