<template>
<v-app>
   <div id="app">
    <CourseCard/>
    <CourseCardDetail/>
    <CoursesForm/>
  </div>
</v-app>
</template>

<script>
import CourseCard from './components/CourseCard'
import CourseCardDetail from './components/CourseCardDetail'
import CoursesForm from './components/CoursesForm'
export default {
  name: 'App',
  components: {
    CourseCard,
    CourseCardDetail,
    CoursesForm
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
  background-color: black;
}
</style>
