<template>
  <div class="signUp-page">
    <div class="lg-container">
      <h3 class="header">注册</h3>
      <v-form v-model="formData" :rules="formRules" ref="formRef">
        <v-form-item>
          <input
            v-model="formData.username"
            class="common-input"
            type="text"
            placeholder="用户名"
            autocomplete="off"
          />
        </v-form-item>
        <v-form-item>
          <input
            v-model="formData.nickname"
            class="common-input"
            type="text"
            placeholder="昵称"
            autocomplete="off"
          />
        </v-form-item>
        <v-form-item>
          <input
            v-model="formData.email"
            class="common-input"
            name="username"
            type="text"
            value=" "
            placeholder="邮箱"
            autocomplete="off"
          />
        </v-form-item>
        <v-form-item>
          <input
            v-model="formData.password"
            class="common-input"
            type="password"
            placeholder="密码"
            autocomplete="off"
            @keyup.enter="singUp"
          />
        </v-form-item>
        <v-form-item>
          <input
            v-model="formData.confirmPassword"
            class="common-input"
            type="password"
            placeholder="确认密码"
            autocomplete="off"
            @keyup.enter="singUp"
          />
        </v-form-item>
      </v-form>
      <div class="footer">
        <el-button :loading="isSignUpLoading" @click="singUp"
          >确定注册</el-button
        >
        <el-button @click="goToLogIn">直接登录</el-button>
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
        phone: ''
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
    }
  },
}
</script>
