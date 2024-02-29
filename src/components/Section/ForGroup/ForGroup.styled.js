import styled from 'styled-components';

export const ForGroupStyled = styled.div`
  margin-top: 50px;
  color: var(--primary-color-black);
  font-size: 14px;
  padding: 30px;

  .forGroup-fon {
    position: absolute;
    z-index: 1;
  }

  .forGroup-img-fon {
    width: 100vb;
    height: 300px;
  }

  .forGroup-container {
    height: auto;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }

  .forGroup-content {
    display: flex;
    grid-column-gap: 10px;
    justify-content: center;
    grid-row-gap: 10px;
    align-items: center;
    padding: 5px;
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