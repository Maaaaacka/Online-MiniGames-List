<template>
  <v-container>
    <v-row>
      <v-col
        v-for="game in games"
        :key="game.game_name"
        cols="6"
        sm="6"
        md="3"
      >
        <v-card
          :href="game.game_link"
          target="_blank"
          class="game-card"
          hover
        >
          <v-img
            :src="game.game_logo ? `/assets/${game.game_logo}` : '/assets/default-logo.svg'"
            aspect-ratio="1"
            cover
          ></v-img>
          <v-card-title>{{ game.game_name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    games: Array,
  },
};
</script>

<style scoped>
.game-card {
  transition: transform 0.3s;
}
.game-card:hover {
  transform: scale(1.05);
}
</style>