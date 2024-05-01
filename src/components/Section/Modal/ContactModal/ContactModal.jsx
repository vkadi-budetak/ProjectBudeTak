import React, { useState } from 'react';
import { ContactStyled } from './ContactModal.styled';

export default function ContactcModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactStyled
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="header-iteam">Contacts</span>
      {isOpen && (
        <div className="contact-list">
          <ul>
            <li className='contact-iteam'><a href="mailto:budetak.music@gmail.com" target="_blank" rel="noreferrer">Mail</a></li>
            <li><a href="https://www.instagram.com/bude_tak/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://t.me/budetak" target="_blank" rel="noreferrer">Telegram</a></li>
            <li><a href="https://www.facebook.com/budetak" target="_blank" rel="noreferrer">FaceBook</a></li>
          </ul>
        </div>
      )}
    </ContactStyled>
  );
}
