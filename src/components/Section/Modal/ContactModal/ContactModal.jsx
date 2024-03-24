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
            <li>test</li>
          </ul>
        </div>
      )}
    </ContactStyled>
  );
}
