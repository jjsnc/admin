<template>
  <div :class="{ show: show }" class="header-search">
    <el-icon class="search-icon" :size="18" @click.stop="click"> <Search /> </el-icon>
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      class="header-search-select"
      @change="change"
    >
      <el-option
        v-for="option in options"
        :key="option.refIndex"
        :value="option.item"
        :label="option.item.name.join('>')"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Fuse from 'fuse.js'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      search: '',
      options: [],
      searchPool: [],
      show: false,
      fuse: undefined
    }
  },
  computed: {
    menus() {
      return this.$store.getters.permission_menus
    }
  },

  watch: {
    menus() {
      this.searchPool = this.generateMenus(this.menus)
    },
    searchPool(list) {
      this.initFuse(list)
    },
    show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
  },
  mounted() {
    this.searchPool = this.generateMenus(this.menus)
  },
  methods: {
    click() {
      this.show = !this.show
      if (this.show) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
      }
    },
    close() {
      this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur()
      this.options = []
      this.show = false
    },
    change(val) {
      this.$router.push(val.path)
      this.search = ''
      this.options = []
      this.$nextTick(() => {
        this.show = false
      })
    },
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: 'name',
            weight: 0.7
          },
          {
            name: 'path',
            weight: 0.3
          }
        ]
      })
    },
    generateMenus(menus, prefixTitle = []) {
      let res = []
      for (const menu of menus) {
        if (menu.hidden) {
          continue
        }
        const data = {
          path: menu.path,
          name: [...prefixTitle]
        }
        if (menu.name) {
          data.name = [...data.name, menu.name]
          if (menu.redirect !== 'noRedirect') {
            res.push(data)
          }
        }
        if (menu.children) {
          const tempMenus = this.generateMenus(menu.children, data.name)
          if (tempMenus.length >= 1) {
            res = [...res, ...tempMenus]
          }
        }
      }
      return res
    },
    querySearch(query: any) {
      if (query !== '') {
        this.options = this.fuse.search(query)
      } else {
        this.options = []
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
    :deep(.el-input__wrapper) {
      border: none;
      box-shadow: none !important;
      .el-input__inner {
        border-radius: 0;
        border: none;
        padding-left: 0;
        padding-right: 0;
        box-shadow: none !important;
        border-bottom: 1px solid #d9d9d9;
        vertical-align: middle;
      }
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
