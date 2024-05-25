<template>
  <div id="app" :class="{ dark: darkMode }">
    <!-- DarkModeToggleComponent wird hier innerhalb der App.vue-Komponente eingefügt -->
    <DarkModeToggleComponent @dark-mode-change="updateDarkMode" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DarkModeToggleComponent from './components/DarkMode.vue'; 

export default {
  name: 'App',
  components: {
    HelloWorld,
    DarkModeToggleComponent,
  },
  loadWiki(){
    const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
    const endpoint = baseUrl + '/articles'
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(articles => {
            this.items.push(articles)
        }))
        .catch(error => console.log('error', error))
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
