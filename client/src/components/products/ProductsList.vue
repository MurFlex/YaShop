<template>
	<ul class="products__list">
		<li class="products__item" v-for="product in mock">
			<img class="product__image" :src="product.image" alt="product" />
			<h3 class="product__title">{{ product.name }}</h3>
			<p class="product__description">{{ product.description }}</p>
			<p class="product__price">Price: {{ product.price }}$</p>
		</li>
	</ul>
</template>
<script setup lang="ts">
import type IProduct from '@/interfaces/Product.interface.ts'

const mock: IProduct[] = [
	{
		id: 1,
		name: 'Product 1',
		price: 1000,
		description: 'Product 1 description',
		image: 'https://www.w3schools.com/images/colorpicker2000.png',
	},
	{
		id: 2,
		name: 'Product 2',
		price: 12000,
		description: 'Product 1 description',
		image: 'https://www.w3schools.com/images/colorpicker2000.png',
	},
]
</script>
<style lang="scss">
.products {
	&__list {
		display: flex;
		flex-direction: column;
	}

	&__item {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
