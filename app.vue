<template>
	<v-app>
		<LayoutSideBar />

		<!-- Sizes your content based upon application components -->
		<v-main>
			<LayoutNavBar />
			<NuxtPage />
		</v-main>

		<v-footer app> Footer </v-footer>
	</v-app>
</template>

<style lang="scss" scoped></style>
