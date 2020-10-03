<template>
<v-app>
   <div id="app">
     <Spiner/>
  </div>
</v-app>
</template>

<script>
import Spiner from './components/Spiner'
export default {
  name: 'App',
  components: {
    Spiner
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
