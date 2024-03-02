import React from 'react';
import { MusicPlaylistStyled } from './MusicPlaylist.styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function MusicPlaylist() {
  return (
    <MusicPlaylistStyled>
      <h3>Музичний плейліст</h3>

      <div className="playlist-content">
        <Splide
          options={{
            rewind: true,
            width: 930,
            height: 450,
            gap: 20,
            autoWidth: true,
            arrows: false,
            pagination: true,
            focus: 'center',
            autoplay: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            keyboard: 'global',
          }}
        >
          <SplideSlide>
            <a
              href="https://song.link/i/1474714330"
              target="listen_song"
              rel="noreferrer"
            >
              <img
                className="playlist-img"
                src="/ProjectBudeTak/img/MusicPlaylist/luli.jpg"
                alt="Card"
              />
            </a>
            <p className='playlist-item'>BudeTak - Luli</p>
            <p className='playlist-item-info'>Україна: Нове пкоління №2 AppleMusic 2019р</p>
          </SplideSlide>
          <SplideSlide>
            <a
              href="https://song.link/i/1665467955"
              target="listen_song"
              rel="noreferrer"
            >
              <img
                className="playlist-img"
                src="/ProjectBudeTak/img/MusicPlaylist/згадую.jpg"
                alt="Card"
              />
            </a>
            <p className='playlist-item'>BudeTak - Згадую</p>
            <p className='playlist-item-info'>Україна: Нове пкоління №2 AppleMusic 2020р</p>
          </SplideSlide>
          <SplideSlide>
            <a
              href="https://song.link/i/1634779697"
              target="listen_song"
              rel="noreferrer"
            >
              <img
                className="playlist-img"
                src="/ProjectBudeTak/img/MusicPlaylist/я_бачу.jpg"
                alt="Card"
              />
            </a>
            <p className='playlist-item'>BudeTak - Я Бачу</p>
            <p className='playlist-item-info'>Україна: Нове пкоління №2 AppleMusic 2021р</p>
          </SplideSlide>
          <SplideSlide>
            <a
              href="https://song.link/i/1715869439"
              target="listen_song"
              rel="noreferrer"
            >
              <img
                className="playlist-img"
                src="/ProjectBudeTak/img/MusicPlaylist/ніч.jpg"
                alt="Card"
              />
            </a>
            <p className='playlist-item'>BudeTak - Ніч</p>
            <p className='playlist-item-info'>Україна: Нове пкоління №2 AppleMusic 2023р</p>
          </SplideSlide>
          <SplideSlide>
            <a
              href="https://song.link/i/1722268441"
              target="listen_song"
              rel="noreferrer"
            >
              <img
                className="playlist-img"
                src="/ProjectBudeTak/img/MusicPlaylist/прогнози.jpg"
                alt="Card"
              />
            </a>
            <p className='playlist-item'>BudeTak - Прогнози</p>
            <p className='playlist-item-info'>Україна: Нове пкоління №2 AppleMusic 2023р</p>
          </SplideSlide>
        </Splide>
      </div>
    </MusicPlaylistStyled>
  );
}
