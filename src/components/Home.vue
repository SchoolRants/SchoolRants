<template>
	<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex d-flex md3 sm12 style="background-color:green">
				Grid One
			</v-flex>
			<v-flex d-flex style="background-color:blue">
				Grid Two
			</v-flex>
			<v-flex d-flex md3 sm12 style="background-color:red">
				Grid Three
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'hello',
	data() {}
}
</script>
