<template>
	<ul class="notification-list">
		<li
			class="notification-list__item"
			:class="{
				'notification-list__item_success':
					notification.type === NotificationTypes.Success,
				'notification-list__item_warning':
					notification.type === NotificationTypes.Warning,
				'notification-list__item_error':
					notification.type === NotificationTypes.Error,
			}"
			v-for="notification in notificationList"
		>
			<h3 class="notification-list__title">{{ notification.title }}</h3>
			<p class="notification-list__text">{{ notification.message }}</p>
		</li>
	</ul>
</template>
<script setup lang="ts">
import { useNotification } from '@/composables/useNotification'
import { NotificationTypes } from '@/enums/Notification.enum'
import type INotification from '@/interfaces/Notification.interface'
import { computed } from 'vue'

const { notifications } = useNotification()

const notificationList: INotification[] = computed(
	() => notifications.value
).value
</script>
<style lang="scss">
.notification-list {
	position: absolute;
	top: 10px;
	right: 10px;
	list-style-type: none;
	transform: translateX(100%);

	&__item {
		padding: 10px;
		min-width: 250px;
		box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
		transform: translateX(-100%);

		&:not(:last-child) {
			margin-bottom: 22px;
		}

		&_success {
			background-color: #efe;
			border: 1px solid #ded;
			color: #9a9;
		}

		&_warning {
			background-color: #fdf7df;
			border: 1px solid #feec6f;
			color: #c9971c;
		}

		&_error {
			background-color: #fee;
			border: 1px solid #edd;
			color: #a66;
		}
	}

	&__title {
		margin-bottom: 10px;
	}
}
</style>
