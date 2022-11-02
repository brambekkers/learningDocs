<script setup lang="ts">
	const categoryPanels = ref(["frameworks, designSystems, backend"]);
	const category = ref([
		{
			title: "Languages",
			value: "languages",
			items: [
				{
					title: "Javascript",
					icon: "mdi-language-javascript",
					to: "/languages/javascript",
				},
				{
					title: "Markdown",
					icon: "mdi-markdown",
					to: "/languages/markdown",
				},
			],
		},
		{
			title: "Frameworks",
			value: "frameworks",
			items: [
				{
					title: "Vue",
					icon: "mdi-vuejs",
					to: "/framework/vue",
				},
			],
		},
		{
			title: "Design systems",
			value: "designSystems",
			items: [
				{
					title: "Vuetify",
					icon: "mdi-vuetify",
					to: "/framework/vue/vueyify",
				},
			],
		},
		{
			title: "Back-end",
			value: "backend",
			items: [
				{
					title: "Firebase",
					icon: "mdi-firebase",
					to: "/vue",
				},
				{
					title: "Vuetify",
					icon: "mdi-account-box",
					to: "/design/vuetify",
				},
				{
					title: "Admin",
					icon: "mdi-gavel",
					to: "/design/vuetify",
				},
			],
		},
	]);
</script>

<template>
	<v-expansion-panels multiple color="transparent" v-model="categoryPanels">
		<v-expansion-panel elevation="0" v-for="cat of category" class="pa-0" :value="cat.value">
			<v-divider />
			<v-expansion-panel-title class="text-sm font-weight-bold" color="transparent">
				{{ cat.title }}
			</v-expansion-panel-title>
			<v-expansion-panel-text class="pa-0">
				<v-list class="pa-0" variant="plain" color="primary" density="compact">
					<v-list-item :prepend-icon="item.icon" :to="item.to" v-for="item of cat.items" class="text-xs">
						<v-list-item-title class="font-weight-bold"> {{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-expansion-panel-text>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<style lang="scss" scoped>
	:deep(.v-expansion-panel-title__overlay) {
		background-color: transparent !important;
	}

	:deep(.v-expansion-panel-text__wrapper) {
		padding: 0px !important;
	}

	:deep(.v-expansion-panel) {
		margin-top: 0px !important;
	}

	.v-expansion-panel-title {
		min-height: 50px !important;
	}
</style>
