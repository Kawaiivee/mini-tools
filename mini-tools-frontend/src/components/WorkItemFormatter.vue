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

const workItemType = ref(null);
const workItemNumber = ref(null);
const workItemName = ref(null);
const pullRequestNumber = ref(4);

const workItemFormatted = ref("");
const branchFormatted = ref("");
const pullRequestFormatted = ref("");

const handleFormatButtonClicked = () => {
  workItemFormatted.value = refactorWorkItem();
  branchFormatted.value = refactorBranch();
  pullRequestFormatted.value = refactorPullRequest();
};

const refactorWorkItem = () => {
  let nameDelimited = '';
  workItemName.value.toLowerCase().split(' ').forEach((word) => {
    nameDelimited += `${word.charAt(0).toUpperCase()}${word.slice(1)} `;
  });
  return `#${workItemNumber.value}: ${workItemType.value} - ${nameDelimited}`;
};

const refactorBranch = () => {
  let nameDelimited = '';
  workItemName.value.toLowerCase().split(' ').forEach((word) => {
    nameDelimited += `${word.charAt(0).toUpperCase()}${word.slice(1)}_`;
  });
  return `${workItemType.value}/${workItemNumber.value}_${nameDelimited.slice(0, -1)}`;
};

const refactorPullRequest = () => {
  let nameDelimited = '';
  workItemName.value.toLowerCase().split(' ').forEach((word) => {
    nameDelimited += `${word.charAt(0).toUpperCase()}${word.slice(1)} `;
  });
  return `PR:[${pullRequestNumber.value ? pullRequestNumber.value : '_'}] #${workItemNumber.value} ${workItemType.value} - ${nameDelimited}`;
};

</script>


<template>
  <div>
    <v-row>
      <v-col>
      <v-select
        v-model="workItemType"
        :items="[
          WorkItemType.Feature,
          WorkItemType.Work,
          WorkItemType.Bug,
          WorkItemType.Fault,
          WorkItemType.Hotfix,
          WorkItemType.Task,
          WorkItemType.Spike
        ]"
        label="Work Item Type"
        variant="solo-filled"
      ></v-select>
      </v-col>
      <v-col>
      <v-text-field
        v-model="workItemNumber"
        variant="solo-filled"
        label="Work Item Number"
        type="number">
      </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="pullRequestNumber"
          variant="solo-filled"
          label="PR# (Optional)"
          type="number">
        </v-text-field>
      </v-col>
    </v-row>
    <v-text-field
      v-model="workItemName"
      variant="solo-filled"
      label="Work Item Name"
      type="text"
    ></v-text-field>
    <v-btn variant="tonal" @click="() => handleFormatButtonClicked()">Format</v-btn>
    <v-table>
    <tbody>
      <tr>
        <td>Work Item</td>
        <td>{{ workItemFormatted }}</td>
      </tr>
      <tr>
        <td>Branch</td>
        <td>{{ branchFormatted }}</td>
      </tr>
      <tr>
        <td>Pull Request</td>
        <td>{{ pullRequestFormatted }}</td>
      </tr>
    </tbody>
  </v-table>
  </div>
</template>