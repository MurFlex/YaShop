<template>
	<main>
		<router-view />
	</main>
</template>

<script setup lang="ts">
import router from './routes'

const accessToken = localStorage.getItem('token')

if (!accessToken) {
	router.push({ path: 'login' })
}
</script>

<style lang="scss"></style>
