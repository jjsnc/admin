<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
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
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem.vue'
import Logo from './Logo.vue'
import variables from '@/styles/variables.module.scss'
export default defineComponent({
  components: { Logo, SidebarItem },
  data(){
   return {variables}
  },
  mounted() {
    console.log(this.permission_routes, 'permission_routes')
  },
  computed: {
    ...mapGetters(['sidebar', 'permission_routes']),
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
      set(val) {
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
