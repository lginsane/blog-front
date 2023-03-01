<template>
  <div class="signIn-page">
    <div class="lg-container">
      <div class="signIn-box shadow-block">
        <h1 class="page-title">登录</h1>
        <el-form
          ref="formRef"
          v-model="formData"
          :rules="formRules"

          class="signIn-form"
        >
          <el-form-item>
            <el-input
              v-model="formData.username"
              class="common-input"
              type="text"
              placeholder="用户名或邮箱"
              style="width: 100%"
              @keyup.enter="login"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.password"
              class="common-input"
              type="password"
              placeholder="密码"
              style="width: 100%"
              @keyup.enter="login"
            />
          </el-form-item>
          <el-form-item class="footer">
            <el-button
              :loading="isLoginLoading"
              type="primary"
              @click="login"
              >确定登录</el-button
            >
            <el-button @click="goToRegister">我要注册</el-button>
            <!-- <nuxt-link class="forget-btn" to="/forget_pwd">
              忘记密码？
            </nuxt-link> -->
          </el-form-item>
        </el-form>
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
      formRules: {},
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

<style lang="less">
.signIn-page {
  height: 100%;
  .signIn-box {
    background-color: #fff;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .page-title {
      font-size: 32px;
      color: @colorTextTitle;
      margin-bottom: 50px;
    }
    .signIn-form {
      width: 500px;

      .forget-btn {
        display: block;
        color: @colorText-2;
      }
    }
  }
}
</style>
