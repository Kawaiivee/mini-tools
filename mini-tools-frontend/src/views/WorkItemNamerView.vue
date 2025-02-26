<script setup lang="ts">
import WorkItemNamer from '@/components/WorkItemNamer.vue';
</script>

<template>
<div>
  Work Item Namer Tool
  <WorkItemNamer />
</div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
