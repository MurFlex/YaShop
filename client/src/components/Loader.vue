<template>
	<div ref="loaderWrap" class="loader__wrap">
		<div class="loader"></div>
	</div>
</template>
<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue'

const instance = getCurrentInstance()

onMounted(() => {
	instance.proxy.$el.parentElement.style.position = 'relative'
})
</script>
<style lang="scss">
.loader {
	font-size: 10px;
	width: 1em;
	height: 1em;
	border-radius: 50%;
	animation: mulShdSpin 1.1s infinite ease;

	&__wrap {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

@keyframes mulShdSpin {
	0%,
	100% {
		box-shadow: 0em -2.6em 0em 0em rgba(13, 136, 204, 1),
			1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2),
			2.5em 0em 0 0em rgba(13, 136, 204, 0.2),
			1.75em 1.75em 0 0em rgba(13, 136, 204, 0.2),
			0em 2.5em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em 1.8em 0 0em rgba(13, 136, 204, 0.2),
			-2.6em 0em 0 0em rgba(13, 136, 204, 0.5),
			-1.8em -1.8em 0 0em rgba(13, 136, 204, 0.7);
	}
	12.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(13, 136, 204, 0.7),
			1.8em -1.8em 0 0em rgba(13, 136, 204, 1),
			2.5em 0em 0 0em rgba(13, 136, 204, 0.2),
			1.75em 1.75em 0 0em rgba(13, 136, 204, 0.2),
			0em 2.5em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em 1.8em 0 0em rgba(13, 136, 204, 0.2),
			-2.6em 0em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em -1.8em 0 0em rgba(13, 136, 204, 0.5);
	}
	25% {
		box-shadow: 0em -2.6em 0em 0em rgba(13, 136, 204, 0.5),
			1.8em -1.8em 0 0em rgba(13, 136, 204, 0.7),
			2.5em 0em 0 0em rgba(13, 136, 204, 1),
			1.75em 1.75em 0 0em rgba(13, 136, 204, 0.2),
			0em 2.5em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em 1.8em 0 0em rgba(13, 136, 204, 0.2),
			-2.6em 0em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2);
	}
	37.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(13, 136, 204, 0.2),
			1.8em -1.8em 0 0em rgba(13, 136, 204, 0.5),
			2.5em 0em 0 0em rgba(13, 136, 204, 0.7),
			1.75em 1.75em 0 0em rgba(13, 136, 204, 1),
			0em 2.5em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em 1.8em 0 0em rgba(13, 136, 204, 0.2),
			-2.6em 0em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2);
	}
	50% {
		box-shadow: 0em -2.6em 0em 0em rgba(13, 136, 204, 0.2),
			1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2),
			2.5em 0em 0 0em rgba(13, 136, 204, 0.5),
			1.75em 1.75em 0 0em rgba(13, 136, 204, 0.7),
			0em 2.5em 0 0em rgba(13, 136, 204, 1),
			-1.8em 1.8em 0 0em rgba(13, 136, 204, 0.2),
			-2.6em 0em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2);
	}
	62.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(13, 136, 204, 0.2),
			1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2),
			2.5em 0em 0 0em rgba(13, 136, 204, 0.2),
			1.75em 1.75em 0 0em rgba(13, 136, 204, 0.5),
			0em 2.5em 0 0em rgba(13, 136, 204, 0.7),
			-1.8em 1.8em 0 0em rgba(13, 136, 204, 1),
			-2.6em 0em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2);
	}
	75% {
		box-shadow: 0em -2.6em 0em 0em rgba(13, 136, 204, 0.2),
			1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2),
			2.5em 0em 0 0em rgba(13, 136, 204, 0.2),
			1.75em 1.75em 0 0em rgba(13, 136, 204, 0.2),
			0em 2.5em 0 0em rgba(13, 136, 204, 0.5),
			-1.8em 1.8em 0 0em rgba(13, 136, 204, 0.7),
			-2.6em 0em 0 0em rgba(13, 136, 204, 1),
			-1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2);
	}
	87.5% {
		box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
			1.8em -1.8em 0 0em rgba(13, 136, 204, 0.2),
			2.5em 0em 0 0em rgba(13, 136, 204, 0.2),
			1.75em 1.75em 0 0em rgba(13, 136, 204, 0.2),
			0em 2.5em 0 0em rgba(13, 136, 204, 0.2),
			-1.8em 1.8em 0 0em rgba(13, 136, 204, 0.5),
			-2.6em 0em 0 0em rgba(13, 136, 204, 0.7),
			-1.8em -1.8em 0 0em rgba(13, 136, 204, 1);
	}
}
</style>
