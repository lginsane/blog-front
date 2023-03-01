<template>
  <div class="signUp-page">
    <div class="lg-container">
      <div class="signUp-box shadow-block">
        <h1 class="page-title">注册</h1>
        <el-form
          ref="formRef"
          v-model="formData"
          :rules="formRules"
          class="signUp-form"
        >
          <el-form-item>
            <el-input
              v-model="formData.username"
              class="common-input"
              type="text"
              placeholder="用户名"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.nickname"
              class="common-input"
              type="text"
              placeholder="昵称"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.email"
              class="common-input"
              name="username"
              type="text"
              value=" "
              placeholder="邮箱"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.password"
              class="common-input"
              type="password"
              placeholder="密码"
              autocomplete="off"
              @keyup.enter="singUp"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formData.confirmPassword"
              class="common-input"
              type="password"
              placeholder="确认密码"
              autocomplete="off"
              @keyup.enter="singUp"
            />
          </el-form-item>
          <el-form-item class="footer">
            <el-button :loading="isSignUpLoading" type="primary" @click="singUp"
              >确定注册</el-button
            >
            <el-button @click="goToLogIn">直接登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      formData: {
        username: '',
        nickname: '',
        password: '',
        confirmPassword: '',
        sex: 0,
        avatar: '',
        email: '',
        signature: '',
        phone: '',
      },
      formRules: {},
      isSignUpLoading: false,
    }
  },
  methods: {
    async requestSingUp() {
      this.isSignUpLoading = true
      try {
        const res = await this.$API.user.register(this.formData)
        if (res === '请前往邮箱激活您的账号用户登录系统！') {
          this.$toast.success(res)
        } else {
          this.$store.dispatch('changeUserInfo', res.result)
          this.$toast.success('注册成功,请登录')
        }
        this.isSignUpLoading = false
        this.goToLogIn()
      } catch (error) {
        this.isSignUpLoading = false
      }
    },

    singUp() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.requestSingUp()
        }
      })
    },

    goToLogIn() {
      this.$router.push('/signIn')
    },
  },
}
</script>

<style lang="less">
.signUp-page {
  height: 100%;
  .signUp-box {
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
    .signUp-form {
      width: 500px;

      .forget-btn {
        display: block;
        color: @colorText-2;
      }
    }
  }
}
</style>
