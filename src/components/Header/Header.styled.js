import styled from 'styled-components';

export const HeaderStyled = styled.header`
  text-transform: uppercase;

  .header-title {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    
  }

  .header-logo {
    width: 100%;
    height: 60px;
  }

  .header-iteams {
    display: flex;
    flex-wrap: wrap;
    gap: 15px 25px;

  }

  .header-iteam{
    color: var(--prmary-color-black);
    cursor: pointer;
  }

`;
