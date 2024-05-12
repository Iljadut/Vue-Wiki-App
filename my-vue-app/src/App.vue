<template>
  <div id="app">
    <DarkModeToggleComponent />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DarkModeToggleComponent from './components/DarkMode.vue'; // Hier wurde der Importpfad aktualisiert

export default {
  name: 'App',
  components: {
    HelloWorld,
    DarkModeToggleComponent,
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
