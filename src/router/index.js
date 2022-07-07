import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册

const one = () => import('@/pages/one/index.vue')
const two = () => import('@/pages/two/index.vue')
const three = () => import('@/pages/three/index.vue')
const four = () => import('@/pages/four/index.vue')

const first = () => import('@/pages/one/detail/first.vue')
const second = () => import('@/pages/one/detail/second.vue')
const third = () => import('@/pages/one/detail/third.vue')
const fourth = () => import('@/pages/one/detail/fourth.vue')
const table1 = () => import('@/pages/one/detail/first/table1.vue')
const table2 = () => import('@/pages/one/detail/first/table2.vue')

const notFound = () => import('@/pages/error/404.vue')
const notPression = () => import('@/pages/error/404.vue')

const routes = [
	{ path: '/404', component: notFound },
	{ path: '/401', component: notPression },
	{ path: '/',redirect:'/one/first/table1' },
	{ path: '/one',redirect:'/one/first/table1', component: one,children:[
		{ path: '/one/first', redirect:'/one/first/table1',component: first,children:[
			{ path: '/one/first/table1', component: table1 },
			{ path: '/one/first/table2', component: table2 },
		] },
		{ path: '/one/second', component: second },
		{ path: '/one/third', component: third },
		{ path: '/one/fourth', component: fourth },
	] },
	
	{ path: '/two', component: two },
	{ path: '/three', component: three },
	{ path: '/four', component: four },
	
]

export default new VueRouter({
	mode: 'history',
	routes: [
		...routes,
		{ path: '/*', redirect:'/404' }
	]
})