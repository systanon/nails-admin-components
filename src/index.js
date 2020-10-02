import CoursesForm from './components/CoursesForm.vue'

import Vue from 'vue'

const Components = {
  CoursesForm,
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
