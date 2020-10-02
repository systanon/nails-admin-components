<template>
  <v-app>
    <div id="app">
      <CourseCard
        :accessDays="accessDays"
        :url="url"
        :name="nameOfCourse"
        :subtitle="subtitle"
        :price="price"
        :id="id"
        :removeCourse="deleteRequest"
        :editCourse="editCourse"
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

  }),
  methods:{
    deleteRequest() {
      console.log('delete course')
    },
    editCourse() {
      console.log('edit course')
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
  justify-content: center;
}
.v-btn__content {
  justify-content: center !important;
}
</style>
