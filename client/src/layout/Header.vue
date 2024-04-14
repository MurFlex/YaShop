<template>
	<header class="header">
		<div class="header__line header__line_inactive">
			<a class="header__logo" href="/">
				<img src="../icons/cart.svg" alt="Логотип" class="header__logo-img" />
				<h2 class="header__title">YaShop</h2>
			</a>
			<ul class="header__actions">
				<li class="header__action">Dropdown</li>
				<li class="header__action">Dropdown</li>
				<li class="header__action">Dropdown</li>
			</ul>
		</div>
		<div class="header__line header__line_small-padding">
			<nav>
				<ul class="header__actions">
					<li class="header__action">Dropdown</li>
					<li class="header__action">Dropdown</li>
					<li class="header__action">Dropdown</li>
					<li class="header__action">Dropdown</li>
				</ul>
			</nav>
			<div class="header__search">
				<input class="header__input" placeholder="Найти" type="text" />

				<button class="header__button" type="button">
					<img src="../icons/search.svg" alt="Поиск" />
				</button>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
.header {
	@include main-text;
	background-color: #fff;

	&__line {
		@include flex-block;
		height: 45px;
		color: $accent;
		justify-content: space-between;
		padding: 0 15px;

		&_active {
			background-color: $accent; // Поменять
		}

		&_inactive {
			color: #fff;
			background-color: $inactive;
		}
	}

	&__logo {
		@include flex-block;
		gap: 15px;
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}

	&__logo-img {
		width: 15px;
		height: 15px;
	}

	&__title {
		@include main-text2;
	}

	&__actions {
		@include flex-block;
		gap: 30px;
		list-style-type: none;
	}

	&__search {
		@include flex-block;
		width: 260px;
		border-radius: 3px;
		height: 32px;
		border: 1px solid #d3dbe2;
	}

	&__button {
		padding: 9px 13px;
		border: none;
		border-left: 1px solid #d3dbe2;
		height: 100%;
		appearance: none;
		background-color: transparent;
		cursor: pointer;

		&:active {
			background-color: #d3dbe2;
		}
	}

	&__input {
		flex: 1 0 0;
		border-radius: 3px;
		padding: 8px;
		height: 100%;

		&::placeholder {
			opacity: 40%;
		}
	}
}
</style>
