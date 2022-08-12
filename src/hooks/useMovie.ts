import { useEffect, useState } from "react";
import MovieApi from "../apis/MovieApi";

const useMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const resultPosts = await MovieApi.getMovies();
      resultPosts && setMovies(resultPosts);
    })();
  }, []);

  return {
    movies,
  };
};

export default useMovie;
