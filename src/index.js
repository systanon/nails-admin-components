import CourseCard  from './components/CourseCard.vue'

import Vue from 'vue'

const Components = {
  CourseCard
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
