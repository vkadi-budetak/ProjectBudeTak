import styled from 'styled-components';

export const ForGroupStyled = styled.div`
  position: relative;
  margin-top: 60px;
  color: var(--primary-color-black);
  font-size: 14px;
  padding: 30px;

  .forGroup-fon {
    height: 100%;
    position: absolute;
    /* z-index: 1; */
    left: 0;
    top: 0;
    width: 100%;
  }

  .forGroup-img-fon {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .forGroup-container {
    height: auto;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }

  .forGroup-title {
    font-size: 25px;
    font-weight: 600;
    line-height: 38px;
    font-style: italic;
  }

  .forGroup-title-text {
    font-size: 45px;
    font-weight: 600;
    line-height: 38px;
  }

  .forGroup-content {
    display: flex;
    grid-column-gap: 10px;
    justify-content: center;
    grid-row-gap: 10px;
    align-items: center;
    padding: 5px;
    margin-top: 60px;
  }

  .forGroup-text {
    font-family: Averta, Arial, sans-serif;
    font-style: italic;
    font-size: 17px;
    font-weight: 400;
    line-height: 32px;
  }

  .forGroup-img {
    width: 100%;
    height: 250px;
  }

  .forGroup-img-platform {
    width: 450px;
    height: 100%;
  }
`;
