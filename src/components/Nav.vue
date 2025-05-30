<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Macka的游戏合集</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon href="/about">
      <v-icon>mdi-information</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item to="/" title="首页"></v-list-item>
      <v-list-item to="/about" title="关于"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>