<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import router from '@/router';

const drawer = ref(false);
const rail = ref(false);
const currentTool = ref("Home");

</script>

<template>
<v-app>

  <v-app-bar color="primary">
    <v-toolbar-title>Mini Tools</v-toolbar-title>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    class="dynamic-drawer"
    location="right"
    temporary>
    <v-list :drawer="drawer" density="compact" nav>
      <v-list-item link prepend-icon="mdi-home" value="Home" to="/"><v-tooltip activator="parent" text="Home"></v-tooltip></v-list-item>
      <v-list-item link prepend-icon="mdi-clipboard" value="Work Item Formatter" to="/work-item-formatter"><v-tooltip activator="parent" text="Work Item Formatter"></v-tooltip></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main style="height: 100vh;">
    <router-view />
  </v-main>

</v-app>
</template>

<style>
.dynamic-drawer {
  width: auto !important;
  max-width: 300px; /* Prevent it from getting too large */
  min-width: 100px; /* Prevent it from getting too small */
  white-space: nowrap;
}
</style>
