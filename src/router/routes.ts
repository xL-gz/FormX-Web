import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login.vue'

export const basicRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' }, // 根路径重定向到登录页
  { path: '/login', name: 'Login', component: Login },
  // 其他基础路由可在此添加
]
