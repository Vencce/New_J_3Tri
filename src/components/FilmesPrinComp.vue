<script>
import axios from "axios";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
    data() {
        return {
            name: {},
        };
    },
    components: {},
    props: {
        poster: String,
        nome_filme: String,
        sinopse_filme: String,
    },
    async created() {
        this.filmes = await filmeapi.BuscarTodosOsFilmes();
        const url = `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR`;
        const { data } = await axios.get(url);
    },
    methods: {
        getPosterUrl(profile_path) {
            return `https://image.tmdb.org/t/p/w500${profile_path}`;
        },
    },
};
</script>

<template>
  <div class="lds">
      <div class="Esq">
        <div>
            <img class="Img_Filme" :src="poster" alt="">
            <h2 class="Tit_Filme">{{ nome_filme }}</h2>
            <p class="Desc_Filme">{{ sinopse_filme }}</p>
          </div>
        </div>
        <div class="r-dir">
          <div class="img-dir">
              <div class="dentro-img"></div>
              <div class="texto"></div>
          </div>
          <div class="img-dir">
              <div class="dentro-img"></div>
          </div>
          <div class="img-dir">
              <div class="dentro-img"></div>
          </div>
        </div>
        <div class="l-dir">
          <div class="img-dir">
              <div class="dentro-img"></div>
              <div class="texto"></div>
          </div>
          <div class="img-dir">
              <div class="dentro-img"></div>
          </div>
          <div class="img-dir">
              <div class="dentro-img"></div>
          </div>
        </div>
      </div>
</template>

<style>

.lds{
  margin-left: 2%;
  display: flex;
}
/*--------------------------------------------------*/
.Img_Filme {
  background-color: rgb(219, 170, 170);
  height: 50vh;
  width: auto;
}

.Tit_Filme{
  font-size: 40px;
  color: white;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
}

.Desc_Filme{
  font-family: 'Open Sans', sans-serif;
  max-width: 900px;
}

/*----------------------------------------------------*/

.l-dir {
  margin-right: 100px;
}
.r-dir {
  margin-left: 300px;
}

.img-dir {
  margin-top: 20px;
  background-color: #111111;
  height: 180px;
  width: 400px;
  border-radius: 10px;
  float: right;
}

.dentro-img{
  background-color: #171C28;
  height: 160px;
  width: 125px;
  justify-content: center;
  margin-top: 10px;
  position: absolute;
  margin-left: 10px;
}

.texto{
  margin-left: 230px;
  position: absolute;
  margin-top: 15px;
  font-family: 'Open Sans', sans-serif;
}

/*-----------------------------------------------------*/


</style>