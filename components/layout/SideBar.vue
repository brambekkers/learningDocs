<script setup></script>

<template>
	<v-navigation-drawer app permanent>
		Sidebar

		<v-list color="transparent">
			<v-list-subheader>Front-end</v-list-subheader>
			<v-list-item prepend-icon="mdi-view-dashboard" title="Vue" to="/vue" />
			<v-list-item prepend-icon="mdi-account-box" title="Account" to="/design/vuetify" />
			<v-list-item prepend-icon="mdi-gavel" title="Admin" />
			<v-list-subheader>Back-end</v-list-subheader>
		</v-list>
	</v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
