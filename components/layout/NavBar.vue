<script setup></script>

<template>
	<v-app-bar app :order="1" elevation="0" class="nav d-flex justify-end align-center">
		<v-spacer />
		<v-btn to="/">Home</v-btn>
		<v-btn to="/why">Why</v-btn>
		<v-btn to="/contact">Contact</v-btn>
		<v-divider vertical inset class="mx-2" />
		<div class="darkmode-container mx-5">
			<v-switch hide-details="" />
		</div>
		<v-divider vertical inset class="mx-2" />
		<v-btn href="https://github.com/brambekkers" icon="mdi-github-circle" />
	</v-app-bar>
</template>

<style lang="scss" scoped>
	.nav {
		max-width: 1400px;
	}
</style>
