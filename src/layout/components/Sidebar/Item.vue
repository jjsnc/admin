<template>
  <template v-if="icon">
    <template v-if="icon.includes('el-icon')">
      <i class="sub-el-icon" :class="icon"></i>
    </template>
    <template v-else><div>123</div></template>
  </template>
  <template v-if="title">
    <span slot="title">{{ title }}</span>
  </template>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>
