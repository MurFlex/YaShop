<template>
	<Header v-if="isAuthorized" />
	<main>
		<router-view />
	</main>

	<NotificationList />
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import NotificationList from './components/notification/NotificationList.vue'
import Header from './layout/Header.vue'
import router from './routes'

const isAuthorized = ref(false)
const accessToken = localStorage.getItem('token')

if (!accessToken) {
	router.push({ path: 'login' })
} else {
	isAuthorized.value = true
	axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}
</script>

<style lang="scss"></style>
