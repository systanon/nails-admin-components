import CourseCard  from './components/CourseCard.vue'
import CourseCardDetail  from './components/CourseCardDetail.vue'
import CoursesForm from './components/CoursesForm.vue'

import Vue from 'vue'

const Components = {
  CourseCard,
  CourseCardDetail,
  CoursesForm
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
