// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './main.styl'
import App from './App'
import router from './router'

Vue.use(Vuetify, {
	theme: {
		primary: '#3F51B5',
		secondary: '#212121',
		// accent: '#82B1FF',
		// error: '#FF5252',
		info: '#8b9dc3'
		// success: '#4CAF50',
		// warning: '#FFC107'
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})
