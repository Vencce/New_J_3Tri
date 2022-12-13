import axios from "axios";
export default class FilmeApi {
  async BuscarTodosOs6Filmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=1"
    );
    return response.data.results.slice(0, 6);
  }
  async pesquisarFilmes() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=1&include_adult=false`,
    );
    return response.data.results;
  }
  async BuscarTodosOsFilmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=1"
    );
    return response.data.results;
  }
  async BuscarTodosEmCartaz() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=en-US&page=1"
    );
    return response.data.results.slice(0, 6);
  }
  async BuscarFilmesPorGenero(genero) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=1&with_genres=${genero}`
    );
    return response.data.results;
  }
  /*------------------------------------------------------------------------------------------------------------------------------------- */
  async BuscarPriximosFilmes(){
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=en-US&page=1`
    );
    return response.data.results.slice(0,6);
  }
}