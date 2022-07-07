<template >
  <el-dropdown trigger="click" @command="handleSetSize">
    <div class="size-icon">
      <svg
        class="svg-icon"
        viewBox="0 0 128 128"
        width="128"
        height="128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 54.857h54.796v18.286H36.531V128H18.265V73.143H0V54.857zm127.857-36.571H91.935V128H72.456V18.286H36.534V0h91.326l-.003 18.286z"
        />
      </svg>
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item of sizeOptions"
          :key="item.value"
          :command="item.value"
          :disabled="size === item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      sizeOptions: [
        { label: 'Default', value: 'default' },
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' },
        { label: 'Mini', value: 'mini' }
      ]
    }
  },
  computed: {
    size() {
      return this.$store.getters.size
    }
  },

  methods: {
    handleSetSize(size: any) {
      this.$store.dispatch('app/setSize', size)
      this.refreshView()
      // @ts-ignore
      ElMessage({
        message: 'Switch Size Success',
        type: 'success'
      })
    },
    refreshView() {
      // In order to make the cached page re-rendered
      this.$store.dispatch('tagsView/delAllCachedViews', this.$route)
      const { path } = this.$route
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + path
        })
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.size-icon {
  line-height: 50px;
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
