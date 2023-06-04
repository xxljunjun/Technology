import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册


// const notFound = () => import('@/pages/error/404.vue')
const notPression = () => import('@/pages/error/404.vue')
const home = () => import('@/pages/home/index.vue')

const routes = [
	// { path: '/404', component: notFound },
	{ path: '/401', component: notPression },
	{ path: '/', component: home },
	
]

export default new VueRouter({
	mode: 'history',
	routes: [
		...routes,
		{ path: '/*', redirect:'/' }
	]
})