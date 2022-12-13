<script>
import axios from "axios";
import CardSeriesComp from "../components/Cards/CardSeriesComp.vue";
import SeriesApi from "../api/series.js";
const seriesapi = new SeriesApi();
export default {
  components: { CardSeriesComp },
  data() {
    return {
      series: [],
    };
  },
  async created() {
    this.series = await seriesapi.BuscarTodasAsSeries();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    async buscar(params) {
      if (params.genero !== "") {
        this.series = await filtrosapi.BuscarSeriesPorGenero(params.genero);
      } else if (params.serie === "") {
        this.series = await seriesapi.BuscarTodasAsSeries();
      } else {
        const url = `https://api.themoviedb.org/3/search/tv?api_key=c4aecfa4b10ef5cc747dcad83dcdc9b2&language=pt-BR&query=${params.serie}&page=1&include_adult=false`;
        const { data } = await axios.get(url);
        this.series = data.results;
      }
    },
  },
};
</script>
<template>
  <div>
    <FiltroCompSerie @buscar="buscar"/>
    <div class="todos-filmes">
      <CardSeriesComp
        v-for="serie of series"
        :nome_fsa="serie.name"
        :key="serie.id"
        :link_serie="serie"
        :poster="getPosterUrl(serie.poster_path)"
      />
    </div>
  </div>
</template>
