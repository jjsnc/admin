<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
store.commit('increment')
console.log(store.state.count) // -> 1
console.log(store.state.count) // -> 1
console.log(store.getters.increment) // -> 2
</script>

<template>
  <div>vuex</div>
</template>

<style></style>
