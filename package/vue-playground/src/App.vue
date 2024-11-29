<script setup lang="ts">
import { ref } from 'vue';
import { HelloWorld } from 'web-component/vue';
const name = ref('vue');
</script>

<template>
  <div>
    <h1>Vue Playground</h1>
    <HelloWorld :name="name" />
    <input v-model="name" />
  </div>
</template>
