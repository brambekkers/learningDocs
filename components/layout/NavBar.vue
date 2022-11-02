<script setup lang="ts">
	import { useTheme } from "vuetify";
	const theme = useTheme();
	const isDarkMode = computed(() => theme.global.current.value.dark);
	function toggleTheme() {
		theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
	}
</script>

<template>
	<v-app-bar app :order="1" elevation="0" class="nav d-flex justify-end align-center bg-background">
		<v-spacer />
		<v-btn to="/">Home</v-btn>
		<v-btn to="/why">Why</v-btn>
		<v-btn to="/contact">Contact</v-btn>
		<v-divider vertical inset class="mx-2" />
		<div class="d-flex align-center mx-5">
			<v-icon icon="mdi-weather-sunny" class="me-2" :color="!isDarkMode ? 'orange' : ''" />
			<v-switch inset hide-details @click="toggleTheme()" />
			<v-icon icon="mdi-weather-night" class="ms-2" :color="isDarkMode ? 'yellow' : ''" />
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
