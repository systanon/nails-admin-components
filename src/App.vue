<template>
  <v-app>
    <div id="app">
      <v-btn @click="btnHandler">{{typeCourse}}</v-btn>
      <CourseCardDetail
        :category="category"
        :days="days"
        :nameOfCourse="nameOfCourse"
        :subtitle="subtitle"
        :price="price"
        :author="author"
        :instructor="instructor"
        :infoBonus="infoBonus"
        :courseSuitable="courseSuitable"
        :description="description"
        :dateOfCourses="dateOfCourses"
        :url="url"
        :type="typeCourse"
      />
    </div>
  </v-app>
</template>

<script>
import CourseCardDetail from './components/CourseCardDetail';

export default {
  name: 'App',
  components: {
    CourseCardDetail,
  },
  data:()=>({
    category:'test module',
    days:5,
    nameOfCourse: 'test module',
    subtitle: 'test subtitle',
    price:12,
    author: 'Arnold Shtaiger',
    instructor: 'Ivan Duck',
    infoBonus: 'Cute Summer Nail Designs While having an eye-catching manicure is a great idea all year',
    courseSuitable:['TEST','TEST','TEST','TEST'],
    description: 'Cute Summer Nail Designs While having an eye-catching manicure is a great idea all year round, there’s something about summer that makes you feel more adventurous. Whether it’s embracing ultra-bright colors, fresh new textures, stylish shapes, or daring designs, now’s the time to shake it up. Keep reading to discover easy ways to update your signature style, as well as this season’s most on-trend summer nail design ideas to take your manicure to the next level.',
    dateOfCourses:['12,13,14 December','12,13,14 December','12,13,14 December'],
    url:require('./assets/noImage.jpg'),
    typeCourse:'offline',
    buttonPress: false
  }),
  methods:{
    btnHandler() {
      this.buttonPress = !this.buttonPress
      this.typeCourse = this.buttonPress ? 'online' : 'offline'
    }
  }
};
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
