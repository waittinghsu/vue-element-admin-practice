<template>
  <div class="omega full-height w-100 d-flex align-center justify-center flex-column">
    <span class="white--text font-display-3 font-weight-bold">OMG LOGIN</span>
    <el-card class="login-card opacity--bg  lighten-3 blue-grey--border border--darken-1 rounded-lg border-md mt-8">
      <el-form
        ref="dataForm" status-icon
        :model="model" :rules="rules"
        label-width=""
        class=""
      >
        <el-form-item class="pt-8" prop="account">
          <!--          <span slot="label" class="white&#45;&#45;text font-large">帐户</span>-->
          <el-input v-model="model.account" size="large" placeholder="Username" class="pb-3" type="text" />
        </el-form-item>
        <el-form-item label="" prop="password">
          <!--          <span slot="label" class="white&#45;&#45;text font-large">密码</span>-->
          <el-input v-model="model.password" size="large" placeholder="Password" type="password" />
        </el-form-item>
        <div class="d-flex align-end flex-row">
          <el-button class="ml-auto red--text border-b-sm" type="text">
            忘記密碼
          </el-button>
          <el-button class="white--text indigo--bg accent-2 indigo--border border--accent-2" size="large" @click="handleClick">
            登入
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'LoginCard',
  data() {
    return {
      model: {
        account: '',
        password: '',
      },
      rules: {},
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ path: '/demo-tools' });
    },
  },
};
</script>

<style lang="scss" scoped>
.omega {
  background: linear-gradient(to bottom right, #757575 0%, #424242 100%);
  .login-card {
    width: 450px;
  }
}
.gradient-text {
  background-image: linear-gradient(to right, #fff 0%, #E8F5E9 50%, #32ccbc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
