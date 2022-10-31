<script setup lang="ts">
const category = ref([
	{
		title: "Frameworks",
		items: [
			{
				title: "Vue",
				icon: "mdi-view-dashboard",
				to: "/framework/vue",
			},
		],
	},
	{
		title: "Design systems",
		items: [
			{
				title: "Vuetify",
				icon: "mdi-view-dashboard",
				to: "/framework/vue/vueyify",
			},
		],
	},
	{
		title: "Back-end",
		items: [
			{
				title: "Vue",
				icon: "mdi-view-dashboard",
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
				<v-list color="transparent" class="pa-0">
					<v-list-item
						:prepend-icon="item.icon"
						:title="item.title"
						:to="item.to"
						v-for="item of cat.items"
					/>
				</v-list>
			</v-expansion-panel-text>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<style lang="scss" scoped></style>
