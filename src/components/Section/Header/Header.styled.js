import styled from 'styled-components';

export const HeaderStyled = styled.header`
  text-transform: uppercase;
  height: auto;
  /* max-width: 1100px; */
  margin-left: auto;
  margin-right: auto;

  .header-title {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    padding: 5px 300px;
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

  .header-iteam {
    color: var(--prmary-color-black);
    cursor: pointer;
  }
`;
