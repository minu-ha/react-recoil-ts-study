import React from "react";
import Movies from "../components/Movies";
import useMovie from "../hooks/useMovie";

const Movie = () => {
  const { movies } = useMovie();
  console.log(movies);

  return (
    <>
      <Movies movies={movies} />
    </>
  );
};

export default Movie;
