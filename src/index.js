import CourseCard  from './components/CourseCard.vue'
import CourseCardDetail  from './components/CourseCardDetail.vue'

// export default { CourseCard, CourseCardDetail }


import Vue from 'vue'

const Components = {
  CourseCard,
  CourseCardDetail
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components

// const ComponentLibrary = {
//   install(Vue, options = {}) {
//     // components
//     for (const componentName in components) {
//       const component = components[componentName]

//       Vue.component(component.name, component)
//     }
//   }
// }

// export default ComponentLibrary

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(ComponentLibrary)
// }