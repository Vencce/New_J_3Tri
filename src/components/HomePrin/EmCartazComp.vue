<script>
import CardFilmesSection3 from "../Cards/CardFilmesSection3.vue";
import FilmeApi from "../../api/filmes.js";
const filmeapi = new FilmeApi();

export default {
  components: {
    CardFilmesSection3
  },
  data() {
    return {
      filmes: [],
    };
  },
  async created() {
    this.filmes = await filmeapi.BuscarTodosEmCartaz();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
  /*-------------------------------------------------------------------------------------------------------------------------- */
};
</script>

<template>
    <div class="section3">
    <div>
      <div>
        <h3 class="PoEmh3">Filmes em Cartaz</h3>
        <div class="filmes-linhas">
          <CardFilmesSection3
            v-for="filme of filmes"
            :key="filme.id"
            :link_filme="filme"
            :poster="getPosterUrl(filme.poster_path)"
            :nome_fsa="filme.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
