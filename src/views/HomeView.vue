<script>
import EmCartazComp from "../components/HomePrin/EmCartazComp.vue";
import MaisAssistidosComp from"../components/HomePrin/MaisAssistidosComp.vue";
import ProximosFilmesComp from "../components/HomePrin/ProximosFilmesComp.vue";
export default {
  components: {
    MaisAssistidosComp,
    EmCartazComp,
    ProximosFilmesComp
}
}
</script>
<template>
  <div class="LandingPage">
      <section class="tghb-section">
        <h2>MoviesFlix</h2>
        <p>
          Filmes, trailers, horários e salas de cinema, notícias, críticas o site
          de <strong>Cinema nº1 do Brasil!</strong> As últimas notícias do cinema, trailers e
          entrevistas, horários de filmes, o mais completo banco de dados sobre
          cinema
        </p>
      </section>
    </div>
      <MaisAssistidosComp />
      <EmCartazComp />
      <ProximosFilmesComp />
</template>

<style></style>
