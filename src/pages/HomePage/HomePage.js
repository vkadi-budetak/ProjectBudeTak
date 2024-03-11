import ForGroup from 'components/Section/ForGroup/ForGroup';
import HallOffFame from 'components/Section/HallOffFame/HallOffFame';
import HeroPoster from 'components/Section/Hero/HeroPoster';
import MusicPlaylist from 'components/Section/MusicPlaylist/MusicPlaylist';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <HeroPoster />
      <ForGroup />
      <HallOffFame />
      <MusicPlaylist />
    </>
  );
}
