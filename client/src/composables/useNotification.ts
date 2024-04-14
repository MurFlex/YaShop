import type { INotification } from '@/interfaces/Notification.interface'
import { computed, ref } from 'vue'

const DEFAULT_TIMER: number = 5000

const store = ref<INotification[]>([])

export const useNotification = () => {
	const notifications = computed(() => store.value)

	const pushNotification = (notification: INotification): void => {
		store.value.push(notification)

		setTimeout(() => {
			store.value.shift()
		}, notification.timer ?? DEFAULT_TIMER)
	}

	return {
		notifications,
		pushNotification,
	}
}
