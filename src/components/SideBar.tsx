import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

interface SideBarProps {
  setSelectedGenre: Function;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props: SideBarProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1); 
  // const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  function handleClickButton(genre: GenreResponseProps) {
    setSelectedGenreId(genre.id);
    props.setSelectedGenre(genre);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
      handleClickButton(response.data[0])
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}