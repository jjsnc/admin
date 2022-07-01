
<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <app-main></app-main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Sidebar, AppMain } from './components'
export default defineComponent({
  components: {
    Sidebar,
    AppMain
  }
})
</script>



<style>
a {
  display: block;
  margin: 16px;
}
</style>
