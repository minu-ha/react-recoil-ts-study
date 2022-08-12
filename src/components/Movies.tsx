import React, { FC } from "react";
import { IMovie } from "../models/IMovie";

interface MoivesProps {
  movies: IMovie[];
}

const Movies: FC<MoivesProps> = (props) => {
  const { movies } = props;

  return (
    <div>
      {movies.map(({ id, title }) => (
        <Movie id={id} title={title} key={`movie-${id}`} />
      ))}
    </div>
  );
};

interface MovieProps {
  id: number;
  title: string;
}

export const Movie: FC<MovieProps> = (props) => {
  const { id, title } = props;

  return (
    <>
      <div>
        {id}
        {title}
      </div>
    </>
  );
};

export default Movies;
