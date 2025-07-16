<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="login-title">登录</h2>
      <el-form :model="loginForm" :rules="rules" ref="formRef" label-width="60px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

interface LoginForm {
  username: string
  password: string
}

const loginForm = ref<LoginForm>({
  username: '',
  password: ''
})

const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const formRef = ref()

const onLogin = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      // 这里写登录逻辑，比如调用接口
      ElMessage.success('登录成功！')
      // 登录成功后跳转
      // router.push('/home')
    }
  })
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f7fa;
}
.login-card {
  width: 350px;
  padding: 30px 20px;
}
.login-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>