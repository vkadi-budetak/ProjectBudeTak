import styled from 'styled-components';

export const HeroPosterStyled = styled.div`

  /* border: 1px solid #d7e3ff; */
  /* border-radius: 10px; */
  position: relative;
  min-height: 800px;
  /* max-width: 1158px  */

  .video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
    border-radius: 10px;
  }

  .hero-subject {
    margin-left: 40px;
    padding: 230px 80px;
  }

  .hero-title {
    font-size: 45px;
    text-transform: uppercase;
    hyphens: none;
    position: absolute;
    z-index: 1;
  }

  .hero-text {
    margin-top: 100px;
    font-size: 16px;
    position: absolute;
    z-index: 2;
  }

  .hero-btn {
    margin-top: 135px;
    border: 1px solid black;
    border-radius: 50px;
    position: absolute;
    z-index: 3;
    height: 60px;
    width: 200px;
    cursor: pointer;
  }

  .hero-btn-text {
    font-weight: bold;
    color: black;
    font-size: 20px;
  }
`;
