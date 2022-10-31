<script setup lang="ts"></script>

<template>
	<v-navigation-drawer app permanent>
		<div class="pa-5 d-flex align-center">
			<v-icon icon="mdi-book" />
			<h1>Learning docs</h1>
		</div>
		<LayoutSidebarMenu />
	</v-navigation-drawer>
</template>

<style lang="scss" scoped>
:deep(.v-expansion-panel-text__wrapper) {
	padding: 0px 24px;
}

:deep(.v-expansion-panel) {
	margin-top: 0px !important;
}

.v-expansion-panel-title {
	min-height: 50px !important;
}
</style>
