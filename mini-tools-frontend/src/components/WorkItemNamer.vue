<script setup lang="ts">
import { ref } from 'vue';  //check local storage for a current default author...or use pinia

enum WorkItemType {
  Feature = "Feature",
  Work = "Work",
  Bug = "Bug",
  Fault = "Fault",
  Hotfix = "Hotfix",
  Task = "Task",
  Spike = "Spike",
}

const workItemType = ref("Work");
const workItemNumber = ref(0);
const workItemTitle = ref("");
</script>


<template>
  <v-text-field label="Label"></v-text-field>
</template>