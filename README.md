# Technology

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm build
```

### Lints and fixes files
```
npm lint
```



### 一、@vuew/cli搭建项目
+ npm run @vue/cli -g
+ vue create beauty-pc

### 二、安装sass
+ npm install node-sass@4.14.1 --save-dev
+ npm install sass-loader@8.0.2 --save-dev 

### 三、安装vue-router
+ npm install vue-router
+ 在main.js文件中
import router from './router/index.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
+ 在router/index.js文件中
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册

const Home = () => import('@/pages/index.vue')

const routes = [
	{ path: '/home', component: Home },
]

export default new VueRouter({
	mode: 'history',
	routes: [
		...routes,
		{ path: '/*', redirect: '/home' }
	]
})

### 四、集成element-UI
+ npm i element-ui -S