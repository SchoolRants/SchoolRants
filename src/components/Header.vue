<template>
	<header>
		<v-toolbar dark color="primary">
			<v-toolbar-side-icon></v-toolbar-side-icon>
			<v-toolbar-title class="white--text">SchoolRants</v-toolbar-title>
			<v-text-field
				prepend-icon="search"
				label="Search"
				solo-inverted
				class="mx-3"
				flat
			></v-text-field>
			<v-btn color="info">
				Add Rant
			</v-btn>
			<div>
				Login / Signup
			</div>
		</v-toolbar>
	</header>
</template>

<script>
export default {
	name: 'main-header'
}
</script>
