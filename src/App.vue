<template>
<v-app>
   <div id="app">
     <v-btn @click="btnMethod">{{method}}</v-btn>
      <v-btn @click="btnType">{{typeCourse}}</v-btn>
      <!-- <v-btn @click="refresh">refresh</v-btn> -->
      <v-text-field
       label="course id"
      v-model="editCourseID"
      :disabled="methodPost"
      outlined
      dark
      :counter="24"
      maxlength="24"
      />
    <CoursesForm  
      :idCourse="editCourseID"
      :typeCourse="typeCourse"
      :getCourseID="getCourseID"
      :sendData="sendData"
      :back="backForm"/>
  </div>
</v-app>
</template>

<script>
import CoursesForm from './components/CoursesForm'
export default {
  name: 'App',
  components: {
    CoursesForm
  },
  data:()=>({
    typeCourse:'offline',
    btnPress: false,
    editCourseID: '',
    methodPost:true,
    method: 'POST',
    // refreshID: 1

  }),
  methods:{
      btnMethod() {
        this.methodPost = !this.methodPost
        this.method = this.methodPost ? 'POST' : 'PUT'
      },
      btnType() {
        this.btnPress = !this.btnPress
        this.typeCourse = this.btnPress ? 'online' :'offline'
      },
       async getCourseID(id) {
      const response = await (
        await fetch(
          `https://nails-australia-staging.herokuapp.com/course/${this.typeCourse}/${id}`,
        )
      ).json();
      return response[`${this.typeCourse}Course`];
    },
    // refresh() {
    //   // this.refreshID += 1
    //   // this.$forceUpdate();
    // },
    backForm() {
      console.log('hi')
    },
      async sendData(formData) {
      const offlineRequest = `https://nails-australia-staging.herokuapp.com/course/new/${this.typeCourse}`;
      const url = this.methodPost
        ? offlineRequest
        : `${offlineRequest.replace(/[/]new/gi, '')}/${this.editCourseID}`;

      // const method = this.methodPost ? 'POST' : 'PUT';

      const response = await (
        await fetch(url, {
          method: this.method,
          body: formData,
        })
      ).json();

      if (response?.newOfflineCourse) {
        // Baner
        //  Course successfully created.
        this.$notify({
          group: 'foo',
          title: 'Important message',
          text: 'Course successfully created',
        });

      }
      if (response?.updatedOfflineCourse) {
        // Baner
        //  Course successfully updated.
        this.$notify({
          group: 'foo',
          title: 'Important message',
          text: 'Course successfully updated.',
        });

      }
    },
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
.v-btn__content {
  justify-content: center !important;
}
</style>
