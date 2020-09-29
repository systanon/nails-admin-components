<template>
<v-app>
   <div id="app">
    <CourseCard/>
    <CourseCardDetail/>
  </div>
</v-app>
</template>

<script>
import CourseCard from './components/CourseCard'
import CourseCardDetail from './components/CourseCardDetail'
export default {
  name: 'App',
  components: {
    CourseCard,
    CourseCardDetail
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
