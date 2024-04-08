<template>
	<div class="auth">
		<form class="auth-form">
			<div class="auth-form__head">
				<h1 class="auth-form__title">Панель администратора</h1>
			</div>
			<div class="auth-form__inputs">
				<div class="auth-form__input">
					<label for="email">E-mail:</label>
					<input v-model="email" id="email" type="text" />
				</div>
				<div class="auth-form__input">
					<label for="password">Пароль:</label>
					<input v-model="password" id="password" type="password" />
				</div>
			</div>
			<div class="auth-form__bottom">
				<button @click="login">Войти</button>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import { useNotification } from '@/composables/useNotification'
import router from '@/routes'
import axios from 'axios'
import { ref } from 'vue'

import { NotificationTypes } from '@/enums/Notification.enum'
import type { INotification } from '@/interfaces/Notification.interface'

const email = ref('')
const password = ref('')

const { pushNotification } = useNotification()

if (localStorage.token) {
	router.push({ path: '/' })
}

const login = (e: Event): void => {
	e.preventDefault()

	axios
		.post('http://localhost:5000/api/auth/login', {
			email: email.value,
			password: password.value,
		})
		.then(response => {
			localStorage.token = response.data[1]
			router.push({ path: '/' })
		})
		.catch(error => {
			const notification: INotification = {
				type: NotificationTypes.Error,
				title: 'Ошибка авторизации',
				message: error.response.data.message,
			}

			pushNotification(notification)
		})
}
</script>

<style lang="scss">
.auth {
	@include flex-block;
	width: 100vw;
	height: 100vh;

	&-form {
		background-color: #fff;
		border: 1px solid #d3dbe2;
		font-family: $title-font;
		width: 300px;

		&__head {
			padding: 13px 15px;
			border-bottom: 1px solid #eef1f3;
		}

		&__title {
			font-size: 17px;
			font-weight: 700;
		}

		&__inputs {
			font-size: 15px;
			display: flex;
			flex-direction: column;
			gap: 30px;
			padding: 20px 15px;
		}

		&__input {
			display: flex;
			flex-direction: column;
			gap: 8px;

			input {
				height: 36px;
				font-size: 15px;
				border-radius: 3px;
				border: 1px solid #d3dbe2;
				padding: 5px;
				transition: 0.3s;

				&:focus {
					border-color: #0388cc;
					box-shadow: 0 0 3px #0388cc;
				}
			}
		}

		&__bottom {
			width: 100%;
			background-color: #f5f5f5;
			padding: 13px 15px;

			button {
				font-size: 15px;
				padding: 9px 15px;
				border-radius: 6px;
				color: #fff;
				border: 1px solid #0388cc;
				background-color: #0388cc;
			}
		}
	}
}
</style>
