<template>
  <div id="app">
    <CourseCard/>
  </div>
</template>

<script>
import CourseCard from './components/CourseCard'
export default {
  name: 'App',
  components: {
    CourseCard
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
