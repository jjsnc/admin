
<template>
  <div class="app-wrapper">
    1
    <sidebar class="sidebar-container" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Sidebar } from './components'
import { useStore,mapGetters } from 'vuex'

const store = useStore()

export default defineComponent({
  components: {
    Sidebar
  },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar'])
  }
})
</script>



<style></style>
