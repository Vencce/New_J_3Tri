<script>
import axios from "axios";
import SerieUnicComp from "../components/series/SerieUnicComp.vue";
import SeriesApi from "../api/series.js";
const seriesapi = new SeriesApi();
export default {
  props: ["id"],
  data() {
    return {
      serie: {},
      cast: [],
      artista: {},
    };
  },
  components: {
    SerieUnicComp,
  },
  async created() {
    this.series = await seriesapi.BuscarTodasAsSeries();
    const url = `https://api.themoviedb.org/3/tv/${this.id}?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
    const { data } = await axios.get(url);
    this.serie = data;
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <main>
    <div>
      <SerieUnicComp
        v-model="serie"
        :nome_serie="serie.name"
        :duracao="serie.number_of_seasons"
        :sinopse_serie="serie.overview"
        :key="serie.id"
        :poster="getPosterUrl(serie.poster_path)"
      />
    </div>
  </main>
</template>
