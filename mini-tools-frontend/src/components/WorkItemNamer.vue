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
const workItemName = ref("");

const workItemFormatted = ref("#1234: Feature - Test Work Item");
const branchFormatted = ref("Feature/1234_Test_Work_Item");
const pullRequestFormatted = ref("#1234: Feature - Test Work Item");

</script>


<template>
  <v-select
    label="Work Item Type"
    :items="[
      WorkItemType.Feature,
      WorkItemType.Work,
      WorkItemType.Bug,
      WorkItemType.Fault,
      WorkItemType.Hotfix,
      WorkItemType.Task,
      WorkItemType.Spike
    ]"
  ></v-select>
  <v-text-field
    v-model="workItemName"
    label="Work Item Name"
    type="text"
  ></v-text-field>
  <button @click="console.log(workItemName)">Format</button>
  <p>Work Item: {{  }}</p>
  <p>Branch: {{  }}</p>
  <p>Pull Request: </p>
  <p></p>
</template>