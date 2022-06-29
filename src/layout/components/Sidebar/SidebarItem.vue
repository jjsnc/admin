
<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item, item.children) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">

    </template>
    <el-menu-item v-else index="1-4-1">item one</el-menu-item>
  </div>
</template>


<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import path from 'path'
import { isExternal } from '@/utils/validate'
export default defineComponent({
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(parent: any,children = [], ) {
      const showingChildren = children.filter((item: any) => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })



      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }
  }
})
</script>
