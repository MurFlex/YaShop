import type { NotificationTypes } from '@/enums/Notification.enum'

export default interface INotification {
	type: NotificationTypes
	title: string
	message: string
	timer?: number
}
