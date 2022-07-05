<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">

      <el-menu
        mode="vertical"
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="false"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem.vue'
import Logo from './Logo.vue'
import variables from '@/styles/variables.module.scss'
export default defineComponent({
  components: { Logo, SidebarItem },
  data() {
    return { variables }
  },
  mounted() {
    console.log(this.permission_routes, 'permission_routes')
  },
  computed: {
    ...mapGetters(['sidebar', 'permission_routes']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    isCollapse() {
      // @ts-ignore
      return !this.sidebar.opened
    },
    count() {
      return this.$store.state.count
    },

    sidebarLogo: {
      get() {
        return this.$store.state.settings.sidebarLogo
      },
      set(val: any) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val
        })
      }
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
})
</script>
