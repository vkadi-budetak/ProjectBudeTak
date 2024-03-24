import styled from 'styled-components';

export const MusicPlaylistStyled = styled.div`
  height: auto;
  max-width: 1100px;
  margin: 60px auto;

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

  .playlist-content {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 60px;

    & > .splide {
      padding-bottom: 50px;
    }

    .splide__pagination {
      &__page {
        background: black;
      }
    }
  }

  .playlist-img {
    width: 100%;
    height: 380px;
    object-fit: cover;
  }

  .playlist-item {
    font-family: Averta, Arial, sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 18px;
    font-weight: 250;
    line-height: 16px;
    margin-top: 8px;
  }

  .playlist-item-info {
    font-family: Averta, Arial, sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 11px;
    font-weight: 200;
    line-height: 12px;
    margin-top: 6px;
  }
`;
