<template>
  <div id="app" :class="{ dark: darkMode }">
    <DarkModeToggleComponent @dark-mode-change="updateDarkMode" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ArticleList />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DarkModeToggleComponent from './components/DarkMode.vue'; 
import ArticleList from './components/ArticleList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    DarkModeToggleComponent,
    ArticleList,
  },
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    updateDarkMode(value) {
      this.darkMode = value;
    }
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

#app.dark {
  background-color: #333;
  color: #fff;
}
</style>
