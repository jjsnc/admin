
<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)"> path</app-link>
    </template>
    <!-- <el-menu-item v-else index="1-4-1">item one</el-menu-item> -->
  </div>
</template>



<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'
import AppLink from './Link.vue'


export default defineComponent({
  name: 'SidebarItem',
  components: { AppLink },
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
      onlyOneChild: {}
    }
  },
  mounted() {
    console.log(
      !this.item.hidden &&
        !this.onlyOneChild.children &&
        !this.item.alwaysShow &&
        this.onlyOneChild.meta &&
        this.onlyOneChild,
      'onlyOneChild'
    )
    // console.log( this.hasOneShowingChild(this.item, this.item.children))
    //  console.log(this.onlyOneChild && this.onlyOneChild.path,'onlyOneChild.path')
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((childrenItem) => {
        if (childrenItem.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = childrenItem
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
    },
    resolvePath(routePath) {
      // console.log(resolve(this.basePath, routePath),'routePath')
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }

      return routePath
    }
  }
})
</script>
