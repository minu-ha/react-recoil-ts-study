import axios from "axios";

const HOST = "https://yts.mx";

class MovieApi {
  static endPoints = {
    GET: "/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
  };

  public static getMovies = async () => {
    try {
      const response = await axios.get(`${HOST}${MovieApi.endPoints.GET}`);
      return response.data;
    } catch (e) {
      window.alert("API load fail");
    }
  };
}

export default MovieApi;
