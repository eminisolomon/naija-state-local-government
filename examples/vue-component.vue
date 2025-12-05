<!-- Vue component example using ng-states-core v2.0.0 -->
<template>
  <div>
    <select v-model="selectedState">
      <option value="">Select State</option>
      <option v-for="state in allStates" :key="state" :value="state">
        {{ state }}
      </option>
    </select>
    
    <select v-if="localGovts.length">
      <option value="">Select LGA</option>
      <option v-for="lga in localGovts" :key="lga" :value="lga">
        {{ lga }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { getStateNames, getLgas } from 'ng-states-core';

const allStates = getStateNames();
const selectedState = ref('');
const localGovts = ref<string[]>([]);

watch(selectedState, (newState) => {
  if (newState) {
    const lgas = getLgas(newState);
    localGovts.value = lgas;
  }
});
</script>
