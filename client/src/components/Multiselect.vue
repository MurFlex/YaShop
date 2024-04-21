<template>
	<div
		class="multiselect"
		:class="{
			multiselect_active: isOpen,
			multiselect_inactive: !isOpen,
		}"
	>
		<input
			class="multiselect__input"
			@input="handleInput"
			ref="excludeRef"
			v-model="searchQuery"
			@focusin="onFocusIn"
		/>
		<ul class="multiselect__input-list" ref="multiselectList">
			<li
				class="multiselect__input-item"
				:class="{ 'multiselect__input-item_selected': item.isSelected }"
				@click="toggleSelected(item.id)"
				v-for="item in result"
			>
				{{ item.text }}
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
import useClickOutside from '@/composables/useClickOutside'
import { ref } from 'vue'

const emit = defineEmits(['getSelected'])
const multiselectList = ref()
const excludeRef = ref()

const getSelected = () => {
	const selectedItems = result.value.filter(item => item.isSelected)

	emit('getSelected', selectedItems)
}

// Test
type TypeMultiSelectItem = {
	id: number
	text: string
	isSelected: boolean
}

const isOpen = ref<Boolean>(false)

const items = [
	{ id: 1, text: 'Lion', isSelected: false },
	{ id: 2, text: 'Test', isSelected: false },
	{ id: 3, text: 'object', isSelected: false },
] // MOCK

const result = ref(items)

const searchQuery = ref<string>('')

const handleInput = () => {
	if (!searchQuery.value) {
		result.value = items
	}

	result.value = items.filter(item => {
		return item.text.toLowerCase().includes(searchQuery.value.toLowerCase())
	})
}

const onFocusIn = (): void => {
	isOpen.value = true
}

const toggleSelected = (id: number): void => {
	const selectedItem: TypeMultiSelectItem = result.value.filter(
		item => item.id === id
	)[0]

	selectedItem.isSelected = !selectedItem.isSelected
	getSelected()
}

useClickOutside(
	multiselectList,
	() => {
		searchQuery.value = ''
		isOpen.value = false
	},
	excludeRef
)
</script>
<style lang="scss">
.multiselect {
	display: flex;
	flex-direction: column;
	margin-top: 10px;

	&_active &__input-list {
		display: block;
	}

	&_inactive &__input-list {
		display: none;
	}
}

.multiselect__input {
	padding: 10px;

	&-list {
		background-color: white;
		list-style-type: none;
	}

	&-item {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 0 5px 5px 5px;

		&::before {
			content: '';
			display: inline-flex;
			align-items: center;
			justify-content: center;
			margin-right: 5px;
			width: 17px;
			height: 17px;
			border: 1px solid black;
		}

		&_selected {
			&::before {
				content: '\2713';
				color: white;
				background-color: $accent;
				border: 1px solid $accent;
			}
		}
	}
}
</style>
