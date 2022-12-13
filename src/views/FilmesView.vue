<script>
import axios from "axios";
import CardFilmesComp from "../components/cards/CardFilmesComp.vue";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: { CardFilmesComp },
  data() {
    return {
      filmes: [],
    };
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    async buscar(params) {
      if (params.genero !== "") {
        this.filmes = await filmeapi.BuscarFilmesPorGenero(params.genero);
      } else if (params.filme === "") {
        this.filmes = await filmeapi.BuscarTodosOsFilmes();
      } else {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&query=${params.filme}&page=1&include_adult=false`;
        const { data } = await axios.get(url);
        this.filmes = data.results;
      }
    },
  },
};
</script>
<template>
  <div>
    <FiltroCompFilme @buscar="buscar" />
    <div class="todos-filmes">
      <CardFilmesComp
        v-for="filme of filmes"
        :nome_fsa="filme.title"
        :key="filme.id"
        :link_filme="filme"
        :poster="getPosterUrl(filme.poster_path)"
      />
    </div>
  </div>
</template>
