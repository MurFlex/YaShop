<template>
	<!-- Удалить потом -->
	<div class="test">
		<Multiselect />
		<Loader />
	</div>
</template>

<script setup lang="ts">
import Loader from '../components/Loader.vue'
import Multiselect from '../components/Multiselect.vue'
</script>

<style>
/* Удалить потом */
.test {
	width: 500px;
	height: 500px;
}
</style>
