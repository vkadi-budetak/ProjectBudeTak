import styled from 'styled-components';

export const FooterStyled = styled.div`
  height: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 300px;
  margin-top: auto;
  background-color: var(--primary-color-footer);

  .footer-title {
    display: flex;
    margin: 40px;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
  }

  .footer-logo {
    height: 60px;
    color: white;
  }

  .footer-text-container {
    width: 340px;
    
  }

  .footer-text {
    color: var(--primary-color-white);
    font-size: 12px;
    font-weight: 300;
    line-height: 23px;
    font-weight: bold;
  }

  .footer-socail {
    margin-top: 8px;

  }

  .footer-text-social {
    color: var(--primary-color-white);
    font-size: 12px;
    line-height: 23px;
    font-weight: 300;
  }

  .footer-social-items {
    display: flex;
    gap: 10px;
  }

  .footer-social-svg {
    width: 32px;
    height: 32px;
  }
`;
