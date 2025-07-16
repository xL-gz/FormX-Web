# FormX-Web
低代码表单与流程自动化平台前端

---

## Vue 前端技术选型清单

### 1. 框架与基础库
- **Vue 3.x**  
  现代化、响应式、组合式 API，性能更优。

### 2. UI 组件库
- **Element Plus**  
  Vue 3 适配的企业级 UI 组件库，丰富的表单、弹窗、布局等组件。
- （可选）Ant Design Vue、Naive UI

### 3. 拖拽与可视化
- **Vue Draggable**（基于 Sortable.js）  
  实现拖拽排序、拖拽布局。
- **vuedraggable**  
  适合表单设计器的拖拽组件。
- **Vue Flow / vue-flow**  
  流程图、节点连接可视化（如 BPMN 流程设计）。

### 4. 状态管理
- **Pinia**  
  Vue 3 官方推荐的状态管理库，轻量、易用。
- （可选）Vuex（老项目）

### 5. 路由管理
- **Vue Router**  
  官方路由解决方案，支持动态路由、嵌套路由。

### 6. 表单处理
- **vee-validate**  
  表单校验库，支持复杂校验规则。
- **@vueuse/core**  
  实用的组合式 API 工具库，提升开发效率。

### 7. 网络请求
- **Axios**  
  主流 HTTP 请求库，易于与后端对接。

### 8. 可视化与图表
- **ECharts**（通过 vue-echarts）  
  数据可视化，支持丰富的图表类型。

### 9. 工程化与开发工具
- **Vite**  
  新一代前端构建工具，极快的热更新和打包速度。
- **TypeScript**（推荐）  
  增强代码可维护性和类型安全。
- **ESLint + Prettier**  
  代码规范与自动格式化。

### 10. 其他辅助
- **Sass/Less**  
  CSS 预处理器，便于样式管理。
- **dayjs/moment**  
  日期处理库。

---

## 推荐项目结构

```
src/
  components/      // 通用组件
  views/           // 页面视图
  store/           // 状态管理
  router/          // 路由配置
  api/             // 接口请求
  utils/           // 工具函数
  assets/          // 静态资源
  styles/          // 全局样式
  form-designer/   // 表单设计器相关
  flow-designer/   // 流程设计器相关
```
