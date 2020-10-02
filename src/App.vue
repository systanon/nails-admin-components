<template>
  <v-app>
    <div id="app">
      <v-btn @click="btnHandler">{{typeCourse}}</v-btn>
      <CourseCard
        :accessDays="accessDays"
        :url="url"
        :name="nameOfCourse"
        :subtitle="subtitle"
        :price="price"
        :id="id"
        :removeCourse="deleteRequest"
        :editCourse="editCourse"
        :type="typeCourse"
      />
    </div>
  </v-app>
</template>

<script>
import CourseCard from "./components/CourseCard";
export default {
  name: "App",
  components: {
    CourseCard,
  },
  data: () => ({
    accessDays:16,
    url:'',
    nameOfCourse:'testing module card',
    subtitle:'this is subtitle',
    price: 50,
    id: 5125,
    typeCourse: 'offline',
    buttonPress: false

  }),
  methods:{
    deleteRequest() {
      console.log('delete course')
    },
    editCourse() {
      console.log('edit course')
    },
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-btn__content {
  justify-content: center !important;
}
</style>
