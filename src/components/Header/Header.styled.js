import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 30px 0;
  text-transform: uppercase;

  .header-title {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    
  }

  .header-logo {
    color: wheat;
    font-size: 30px;
    
  }

  .header-iteams {
    display: flex;
    flex-wrap: wrap;
    gap: 15px 25px;

  }

  .header-iteam{
    color: red;
    cursor: pointer;
  }

`;
