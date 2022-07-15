

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
        <el-tab-pane label="二维码登录" name="first">二维码登录</el-tab-pane>
        <el-tab-pane label="账户密码登录" name="second">
          <el-form :model="form">
            <el-form-item>
              <el-input
                v-model="form.username"
                placeholder="用户名"
                type="text"
                tabindex="1"
                autocomplete="on"
              />
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="form.password"
                type="password"
                placeholder="密码"
                tabindex="2"
                autocomplete="on"
                show-password
                @keyup.enter.native="handleLogin"
              />
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="15"
                  ><div class="grid-content ep-bg-purple" />
                  <el-input class="w-50 m-2" v-model="form.code" placeholder="Approved by" />
                </el-col>
                <el-col :span="7"> 123123 </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-tab-pane>
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
      activeName: 'first',
      form: {
        username: '',
        password: '',
        code: ''
      }
    }
  },
  methods: {
    handleClick(tab: TabsPaneContext, event: Event) {},
    handleLogin() {
      console.log(this.form, '12313')
    }
  }
})
</script>



<style lang="scss" scoped>
.login-page {
  background: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  min-height: 100vh;
  .header {
    text-align: center;
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
    width: 368px;
    margin: 0 auto;
    &:deep(.el-tabs__nav-wrap) {
      &::after {
        display: none;
      }
    }
    .el-row {
      width: 100%;
    }
  }
  .footer {
  }
}
</style>


