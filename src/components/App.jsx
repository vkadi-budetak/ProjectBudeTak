import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeroPoster from './Hero/HeroPoster';
import ForGroup from './Section/ForGroup/ForGroup';

import HallOffFame from './Section/HallOffFame/HallOffFame';

import { AppStyled } from './App.styled';

export const App = () => {
  return (
    <AppStyled>
      <Header />
      <HeroPoster />
      <ForGroup/>
      <HallOffFame/>
      <Footer />
    </AppStyled>
  );
};
