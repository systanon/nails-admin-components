import Spiner  from './components/Spiner.vue'


import Vue from 'vue'

const Components = {
 Spiner
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
