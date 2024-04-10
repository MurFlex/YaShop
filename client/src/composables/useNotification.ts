import { ref, computed } from 'vue'
import type { INotification } from '@/interfaces/Notification.interface'

const DEFAULT_TIMER: number = 5000

const store = ref([])

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
