import styled from 'styled-components';

export const HeroPosterStyled = styled.div`

  /* border: 1px solid #d7e3ff; */
  /* border-radius: 10px; */
  position: relative;
  min-height: 800px;
  /* max-width: 1158px  */

  .video {
    position: absolute;
    left: 50%;
    top: 0;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
    
    transform: translateX(-50%);
  }

  .hero-subject {
    margin-left: 130px;
    padding: 180px 80px;
    color: var(--primary-color-white);
    
  }

  .hero-title {
    font-family: Averta,Arial,sans-serif;
    width: 300px;
    font-size: 55px;
    text-transform: uppercase;
    hyphens: none;
    position: absolute;
    z-index: 1;
 
  }

  .hero-text {
    font-family: Averta,Arial,sans-serif;
    font-style: italic;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    margin-top: 230px;
    
    position: absolute;
    z-index: 2;
  }


  .hero-btn {
    margin-top: 270px;
    border: 1px solid white;
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

    font-family: Averta,Arial,sans-serif;
    font-style: italic;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    margin-top: 230px;
  }
`;
