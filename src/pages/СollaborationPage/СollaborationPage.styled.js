import styled from 'styled-components';

export const СollaborationStyled = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  margin-top: 60px;
  color: var(--primary-color-black);
  padding: 30px;

  .forGroup-fon {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .forGroup-img-fon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.08;
  }

  .title {
    font-size: 45px;
    font-weight: 600;
    line-height: 38px;
    font-style: italic;
    margin-bottom: 25px;
  }

  .title-text {
    font-size: 38px;
    font-weight: 500;
    line-height: 32px;
    font-style: italic;
    margin-bottom: 25px;
  }

  .item-text {
    height: auto;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    font-size: 25px;
    font-weight: 400;
    line-height: 28px;
    font-style: italic;
    text-align: center;
  }
`;
