import Vue from 'vue'
import CourseCard from 'nails-component-card'
import CourseCardDetail from 'nails-component-card-detail'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(CourseCard)
Vue.use(CourseCardDetail)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
