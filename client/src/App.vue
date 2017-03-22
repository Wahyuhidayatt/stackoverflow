<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <Answer></Answer> -->
    <router-view></router-view>
    <!-- <router-link to="/questions">question</router-link> -->

  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Answer from './components/Answer'

export default {
  components: {
    Navbar
    // Answer
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
