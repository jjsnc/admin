
<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <el-icon v-if="onlyOneChild.meta.icon">
            <component :is="onlyOneChild.meta.icon"></component>
          </el-icon>
          <template #title
            ><span>{{ onlyOneChild.meta.title }}</span>
          </template>
        </el-menu-item>
      </app-link>
    </template>

    <el-sub-menu v-else :index="resolvePath(item.path)"  >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span> {{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      ></sidebar-item>
    </el-sub-menu>
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
    return {
      onlyOneChild: {}
    }
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
        this.onlyOneChild = { ...parent, noShowingChildren: true }
        return true
      }

      return false
    },

    resolvePath(routePath) {
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
