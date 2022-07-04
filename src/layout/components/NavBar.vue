
<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Hamburger from '@/components/Hamburger/index.vue'
import { mapGetters } from 'vuex'
export default defineComponent({
  name: 'NavBar',
  components: {
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
})
</script>



<style lang="scss" scoped>
</style>

