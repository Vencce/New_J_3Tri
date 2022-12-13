import axios from "axios";
export default class SeriesApi {
  async BuscarTodasAsSeries() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=en-US&page=1"
    );
    return response.data.results;
  }
}