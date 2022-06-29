

<template>
  <div class="parent">
    redirect
  </div>
</template>

<style></style>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted } from 'vue'

onMounted(() => {
    axios.get("/api/getUserInfo").then(res => { console.log(res); });
})
</script>

