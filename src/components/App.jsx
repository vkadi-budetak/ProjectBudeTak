import { AppContainerStyled } from './App.styled';
import Footer from './Section/Footer/Footer';
import Header from './Section/Header/Header';
import HeroPoster from './Section/Hero/HeroPoster';
import MusicPlaylist from './Section/MusicPlaylist/MusicPlaylist';
import ForGroup from './Section/ForGroup/ForGroup';

import HallOffFame from './Section/HallOffFame/HallOffFame';

export const App = () => {
  return (
    <AppContainerStyled>
      <Header />
      <HeroPoster />
      <ForGroup/>
      <HallOffFame/>
      <MusicPlaylist/>
      <Footer />
    </AppContainerStyled>
  );
};
