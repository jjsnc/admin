

<template>
  <div class="login-page">
    <div class="header">
      <div class="title">
        <img class="logo" src="@/assets/logo.png" />
        <div class="text">趣逃离</div>
      </div>
      <div class="sub-title">趣逃离后台管理系统</div>
    </div>
    <div class="main">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      </el-tabs>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { TabsPaneContext } from 'element-plus'
export default defineComponent({
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab: TabsPaneContext, event: Event) {
      console.log(tab, event)
    }
  }
})
</script>



<style lang="scss" scoped>
.login-page {
  text-align: center;
  background: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  min-height: 100vh;
  .header {
    padding-top: 72px;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      .logo {
        width: 44px;
        height: 44px;
      }
      .text {
        font-size: 33px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: bold;
      }
    }
    .sub-title {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      padding: 12px 0 40px;
    }
  }
  .main {
    width: 400px;
    margin: 0 auto;
  }
  .footer {
  }
}
</style>


