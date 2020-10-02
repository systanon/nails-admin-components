import CourseCardDetail  from './components/CourseCardDetail.vue'

import Vue from 'vue'

const Components = {
  CourseCardDetail,
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
