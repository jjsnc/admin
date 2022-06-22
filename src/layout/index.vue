
<template>
  <div class="app-wrapper">
    <router-link to="/documentation/index/">documentation</router-link>
    <router-link to="/dashboard/">dashboard</router-link>
    <router-link to="/permission/page/">permissionpage</router-link>
    <router-link to="/permission/directive/">permissiondirective</router-link>
    <router-link to="/permission/role/">permissionrole</router-link>
    <router-link to="/icon/index/">iconindex</router-link>
    <sidebar class="sidebar-container" />
    <app-main></app-main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Sidebar,AppMain } from './components'
export default defineComponent({
  components: {
    Sidebar,
    AppMain
  }
})
</script>



<style>

a{
  display: block;
  margin: 16px;
}
</style>
