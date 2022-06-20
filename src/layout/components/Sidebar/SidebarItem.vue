<template>
   <div>123456</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
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
})
</script>
