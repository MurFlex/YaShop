<template>
	<div class="products__head">
		<div class="products__head-left">
			<button class="products__button">
				<svg
					width="15"
					height="11"
					viewBox="0 0 15 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14 5.59995L1 5.59995M1 5.59995L4.71429 10M1 5.59995L4.71429 1"
						stroke="#0D88CC"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<h2 class="products__head-title">Товары</h2>
		</div>
		<div class="products__head-right">
			<button class="products__button">Сохранить</button>
			<button class="products__button products__button_accent products__add">
				+
			</button>
		</div>
	</div>
	<table>
		<thead>
			<tr>
				<th>Название / Код</th>
				<th>Цена</th>
				<th>Кол-во</th>
				<th>Статус</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Вкл.</td>
			</tr>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Выкл.</td>
			</tr>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Вкл.</td>
			</tr>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Вкл.</td>
			</tr>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Вкл.</td>
			</tr>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Вкл.</td>
			</tr>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Вкл.</td>
			</tr>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Вкл.</td>
			</tr>
			<tr>
				<td>Футболка Твой Стиль</td>
				<td>1733 Р</td>
				<td>1</td>
				<td>Вкл.</td>
			</tr>
		</tbody>
	</table>
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
	&__head {
		display: flex;
		justify-content: space-between;
		height: 45px;
		padding: 7px 15px;
		background-color: #fff;
		font-family: 'Inter', sans-serif;
		box-shadow: 0 -2px rgba(0, 0, 0, 0.1);
		margin-bottom: 15px;

		&-left,
		&-right {
			display: flex;
			height: 100%;
		}

		&-left {
			gap: 15px;
		}

		&-right {
			gap: 5px;
		}

		&-title {
			color: rgba(51, 51, 51, 0.8);
			font-size: 24px;
			font-weight: 400;
		}
	}

	&__button {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		height: 100%;
		padding: 0 13px;
		border: 1px solid #d3dbe2;
		color: #0388cc;
		background-color: transparent;
		border-radius: 3px;
		font-size: 13px;

		&_accent {
			border: 1px solid #0388cc;
			background-color: #0388cc;
			color: #fff;
		}
	}

	&__add {
		font-size: 22px;
		font-weight: 700;
	}
}

table {
	border-collapse: collapse;
	width: 100%;
}

th,
td {
	padding: 8px;
	text-align: left;
	border: 1px solid #ddd;
}

th {
	background-color: #f0f0f0;
}
</style>
