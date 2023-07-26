<template>
  <div v-if="errors.length">
    <h3 class="text-red-500 text-sm font-bold">Please correct the following error(s):</h3>
    <ul class="list-disc ml-5 text-red-500">
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script setup>
  defineProps(['errors'])
</script>

<style scoped>
.list-disc {
  list-style-type: disc;
}
</style>
