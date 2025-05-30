<template>
  <v-app>
    <Nav />
    <v-main>
      <router-view :games="games" />
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue';
import yaml from 'js-yaml';
import { ref } from 'vue';

export default {
  components: { Nav },
  setup() {
    const games = ref([]);
    fetch('/config.yml')
      .then((response) => response.text())
      .then((data) => {
        const config = yaml.load(data);
        games.value = config.games_list;
      })
      .catch((error) => console.error('Error loading config:', error));
    return { games };
  },
};
</script>