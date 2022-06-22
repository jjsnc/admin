<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppMain'
})
</script>
