<template>
	<main>
		<router-view />
	</main>
</template>

<script setup lang="ts">
import axios from 'axios'
import router from './routes'

const accessToken = localStorage.getItem('token')

if (!accessToken) {
	router.push({ path: 'login' })
}

axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
</script>

<style lang="scss"></style>
