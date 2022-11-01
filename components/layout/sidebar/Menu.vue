<script setup lang="ts">
	const category = ref([
		{
			title: "Frameworks",
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
	<v-expansion-panels multiple color="transparent">
		<v-expansion-panel elevation="0" v-for="cat of category" class="pa-0">
			<v-divider />
			<v-expansion-panel-title>
				{{ cat.title }}
			</v-expansion-panel-title>
			<v-expansion-panel-text class="pa-0">
				<v-list class="pa-0" variant="plain" color="primary" density="compact">
					<v-list-item :prepend-icon="item.icon" :title="item.title" :to="item.to" v-for="item of cat.items" />
				</v-list>
			</v-expansion-panel-text>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<style lang="scss" scoped>
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
