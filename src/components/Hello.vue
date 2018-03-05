<template>
  <div class="hello">
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-layout align-center justify-center>
        <img src="../assets/logo.png" />
        <h1>{{ msg }}</h1>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
			msg: 'Welcome to Your Vue.js PWA'
		}
	}
}
</script>
