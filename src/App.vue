<template>
	<v-app>
		<main-header></main-header>
		<router-view></router-view>
	</v-app>
</template>

<script>
import MainHeader from '@/components/Header'

export default {
	name: 'app',
	components: {
		MainHeader
	}
}
</script>
