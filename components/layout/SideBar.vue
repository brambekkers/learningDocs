<script setup lang="ts">
	import { useDisplay } from "vuetify";
	import { useWindowSize } from "@vueuse/core";

	const { width } = useWindowSize();
	const { mobile } = useDisplay();

	const drawerWidth = computed(() => (width.value / 100) * 30);
</script>

<template>
	<v-navigation-drawer app :permanent="!mobile" :width="drawerWidth">
		<div id="menu-container">
			<LayoutSidebarTitle />
			<LayoutSidebarMenu />
		</div>
	</v-navigation-drawer>
</template>

<style lang="scss" scoped>
	#menu-container {
		margin-left: auto;
		max-width: 300px;
	}
</style>
