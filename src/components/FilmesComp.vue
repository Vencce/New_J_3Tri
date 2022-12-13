<script>
import CardFilmesSection3 from "../cards/CardFilmesSection3.vue";
import FilmeApi from "../../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: {
    CardFilmesSection3,
  },
  
  data() {
    return {
      filmes: [],
      filmesPop: [],
      filme: {},
    };
  },
  async created() {
    this.filmesPop = await filmeapi.BuscarTodosEmCartaz();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <div>
    <div>
      <div>
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
