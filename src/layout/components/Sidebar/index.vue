<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        v-if="permission_routes.length > 0"
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
import { getRoutes } from '@/utils/auth'
export default defineComponent({
  components: { Logo, SidebarItem },
  data() {
    return { variables }
  },
  created() {
    this.handleRoutes()
  },
  computed: {
    ...mapGetters(['sidebar']),
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
    handleRoutes() {
      this.permission_routes = JSON.parse(getRoutes())
    },
    increment() {
      this.$store.commit('increment')
    }
  }
})
</script>
