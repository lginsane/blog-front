<template>
  <div class="signIn-page">
    <div class="lg-container">
      <h3 class="header">登录</h3>
      <v-form v-model="formData" :rules="formRules" ref="formRef">
        <v-form-item>
          <input
            v-model="formData.username"
            class="common-input"
            type="text"
            placeholder="用户名、或邮箱"
            style="width: 100%"
            @keyup.enter="login"
          />
        </v-form-item>
        <v-form-item>
          <input
            v-model="formData.password"
            class="common-input"
            type="password"
            placeholder="密码"
            style="width: 100%"
            @keyup.enter="login"
          />
        </v-form-item>
        <!-- <v-form-item>
          <span
            style="font-size: 12px; color: #999; cursor: pointer"
            @click="handleForgetPwd"
            >忘记密码？</span
          >
        </v-form-item> -->
      </v-form>
      <div class="footer">
        <el-button :loading="isLoginLoading" @click="login">确定登录</el-button>
        <el-button @click="goToRegister">我要注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
      isLoginLoading: false,
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * @desc 请求 登录
     */
    async requestLogin() {
      this.isLoginLoading = true
      try {
        const res = await this.$API.user.login(this.formData)
        this.handleChangeToken(res.token)
        this.getUserInfo()
      } catch (error) {
        this.isLoginLoading = false
      }
    },

    /** 获取个人信息 */
    async getUserInfo() {
      const user = await this.$API.user.getInfo()
      this.handleChangeUserInfo(user.userInfo)
      this.isLoginLoading = false
      this.$toast.success('登录成功')
      this.handleCloseModel()
      this.changeShowMenu(false)
      this.$emit('loginSuccess')
    },

    login() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.requestLogin()
        }
      })
    },

    handleForgetPwd() {
      this.$router.push('/forget_pwd')
    },

    goToRegister() {
      this.$router.push('/signUp')
    },
  },
}
</script>
