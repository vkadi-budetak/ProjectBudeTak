import styled from "styled-components";

export const HallOffFameStyled = styled.div `
margin-top: 60px;
background-color: var(--primary-color-black);

.HallOffFame-title {
    font-family: Averta, Arial, sans-serif;
    color: white;
    font-size: 25px;
    font-weight: 600;
    line-height: 38px;
    
  }

  .HallOffFame-title-text {
    font-family: Averta, Arial, sans-serif;
    font-style: italic;
    color: white;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
  }

.items {
    display: flex;
    gap: 50px;
    justify-content: center;
}

.HallOffFame-subtitle {
    position: absolute;
    z-index: 1;
}

img {
    height: 874px;
    max-width: 100%;
    border-radius: 35px;
    object-fit: cover;


}








`