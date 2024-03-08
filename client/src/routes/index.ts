import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
const routes = [
		{ path: '/', name: 'landing', component: Landing },
		{
			path: '/products',
			name: 'products',
			component: () => import('../views/Products.vue'),
			props: true,
		},
	],
	router = createRouter({
		history: createWebHistory(),
		routes,
		scrollBehavior(to, from, savedPosition) {
			return { top: 0 }
		},
	})

export default router
