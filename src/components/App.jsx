import { AppContainerStyled } from './App.styled';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeroPoster from './Hero/HeroPoster';
import MusicPlaylist from './MusicPlaylist/MusicPlaylist';
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
