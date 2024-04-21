import { onMounted } from 'vue'

export default function useClickOutside(
	component,
	callback: Function,
	excludeComponent
) {
	if (!component) {
		throw new Error('A component has to be provided.')
	}

	if (!callback) {
		throw new Error('A callback has to be provided.')
	}

	const listener = (event: Event): void => {
		if (
			event.target === component.value ||
			event.composedPath().includes(component.value) ||
			event.target === excludeComponent.value ||
			event.composedPath().includes(excludeComponent.value)
		) {
			return
		}

		callback()
	}

	onMounted(() => {
		window.addEventListener('click', listener)
	})
}
