import { createRouter, createWebHistory } from "vue-router";
import FilmesPrinView from "@/views/FilmesPrinView.vue";
import HomeView from "@/views/HomeView.vue";
import SeriesView from "@/views/SeriesView.vue";
import SerieUnicView from "@/views/SerieUnicView.vue"
import FilmesView from "@/views/FilmesView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", name: "Home", component: HomeView },
    {path: "/Series", name: "Series", component: SeriesView },
    {path: "/Series/:id", nome: "Series", component: SerieUnicView, props: true },
    {path: "/Filmes/:id", nome: "Filmes", component: FilmesPrinView, props: true },
    {path: "/Filmes", nome: "Filmes", component: FilmesView },
  ],
});

export default router;
