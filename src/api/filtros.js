import axios from "axios";
export default class FiltrosApi {
  async buscarTodosOsGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=pt-BR"
    );
    return data.genres;
  }
  async buscarTodosOsGenerosSerie() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=pt-BR"
    );
    return data.genres;
  }
  async buscarTodasAsLinguagens() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/configuration/languages?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2"
    );
    return data;
  }
  async buscarTodasAsClassificacoes() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/certification/movie/list?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2"
    );
    return data.certifications.BR;
  }
}
