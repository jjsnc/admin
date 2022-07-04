
<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div :class="{ hasTagsView: needTagsView }" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <nav-bar></nav-bar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Sidebar, AppMain, NavBar } from './components'

import { mapState } from 'vuex'

export default defineComponent({
  data() {
    return {
      WIDTH: 992 // refer to Bootstrap's responsive design
    }
  },
  components: {
    Sidebar,
    AppMain,
    NavBar
  },

  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      this.$store.dispatch('app/toggleDevice', 'mobile')
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
  },
  computed: {
    ...mapState({
      // @ts-ignore
      device: (state) => state.app.device,
      // @ts-ignore
      sidebar: (state) => state.app.sidebar,
      // @ts-ignore
      needTagsView: (state) => state.settings.tagsView,
      // @ts-ignore
      fixedHeader: (state) => state.settings.fixedHeader
    }),
    classObj() {
      return {
        // @ts-ignore
        hideSidebar: !this.sidebar.opened,
        // @ts-ignore
        openSidebar: this.sidebar.opened,
        // @ts-ignore
        withoutAnimation: this.sidebar.withoutAnimation,
        // @ts-ignore
        mobile: this.device === 'mobile'
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    $_isMobile() {
      let { WIDTH } = this
      const rect = document.body.getBoundingClientRect()
      const { width } = rect
      return width - 1 < WIDTH
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        this.$store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')
        if (isMobile) {
          this.$store.dispatch('app/closeSideBar', { withoutAnimation: true })
        }
      }
    }
  },
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    }
  }
})
</script>



<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>

