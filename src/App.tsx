import { useEffect, useState } from 'react';

import { Button } from './components/Button';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setSelectedGenre={setSelectedGenre}/>
      <Content id={selectedGenre.id} title={selectedGenre.title}/>
    </div>
  )
}