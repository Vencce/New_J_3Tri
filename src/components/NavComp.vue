<script>
export default {};
</script>
<template>
  <nav>
    <div class="logo">
      <router-link to="/">MoviesFlix</router-link>
    </div>
    <ul>
      <li>
        <router-link class="filmes-link" to="/filmes">Filmes</router-link>
      </li>
      <li>
        <router-link class="series-link" to="/series">Series </router-link>
      </li>
    </ul>
    <div>
      <input placeholder="Pesquise filme ou serie" />
      <select name="" id="">
        <option value="">Lorem ipsum dolor.</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  </nav>
</template>
