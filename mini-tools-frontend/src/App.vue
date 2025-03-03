<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import router from '@/router';

const drawer = ref(false);
const routes = router.getRoutes().map(r => r.name);

</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Mini Tools</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<style scoped>
div > nav {
  display: 'flex';
  flex-direction: 'column';
}
</style>
