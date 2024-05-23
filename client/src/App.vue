<template>
	<Header v-if="isAuthorized" />
	<main>
		<router-view />
		<DropDown 
			:options="options"
			v-model="parentSelectedOption"
		/>
		<br>
		<h1>selected Option: {{ parentSelectedOption }}</h1>
	</main>
	<NotificationList />
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import NotificationList from './components/NotificationList.vue'
import Header from './layout/Header.vue'
import DropDown from './components/DropDown.vue'
import router from './routes'

const isAuthorized = ref(false)
const accessToken = localStorage.getItem('token')
const options = ref([
	{
	name: 'One',
	value: 1
	},
	{
	name: 'Two',
	value: 2
	},
	{	
	name: 'Three',
	value: 3
	},
])

const parentSelectedOption = ref(null)

if (!accessToken) {
	router.push({ path: 'login' })
} else {
	isAuthorized.value = true
	axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}
</script>

<style lang="scss"></style>
