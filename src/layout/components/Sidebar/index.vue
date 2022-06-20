<template>
  <div :class="{ 'has-logo': sidebarLogo }" @click="handleClick">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu>
         hello world
         <!-- <sidebar-item  ></sidebar-item> -->
        </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem.vue'
import Logo from './Logo.vue'
export default defineComponent({
  components: { Logo, SidebarItem },
  computed: {
    ...mapGetters(['sidebar','permission_routes']),
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
    handleClick() {
      console.log(this.sidebar, 'sidebar')
      // this.increment()
    },
    increment() {
      this.$store.commit('increment')
    }
  }
})
</script>
