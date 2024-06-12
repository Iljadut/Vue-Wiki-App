<template>
  <div id="app" :class="{ dark: darkMode }">
    <header>
      <nav>
        <div class="logo">
          <h1>AllwissendesWiki</h1>
        </div>
        <div class="search-container">
          <input type="text" placeholder="was willst wissen?" class="search-bar">
          <button class="search-button">
            <img src="./assets/search.png" alt="Search" class="search-icon">
          </button>
        </div>
        <div class="nav-buttons">
          <button class="nav-button" @click="login">
            <img src="./assets/login.png" alt="Login" class="button-icon">
            <span>Anmelden</span>
          </button>
          <button class="nav-button" @click="randomArticle">
            <img src="./assets/randomise.png" alt="Random" class="button-icon">
            <span>Zufällig</span>
          </button>
        </div>
      </nav>
    </header>
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Wilkommen zu dem Allwissenden Wiki, wo du alles finden kannst</h1>
          <p>Such was du willst</p>
          <div class="search-container">
            <input type="text" placeholder="Such was du willst" class="search-bar">
            <button class="search-button">
              <img src="./assets/search.png" alt="Search" class="search-icon">
            </button>
          </div>
          <DarkModeToggleComponent @dark-mode-change="updateDarkMode" />
        </div>
        <img src="./assets/wiki3.png" alt="Wiki Illustration" class="hero-image">
      </section>
      <ArticleList ref="articleList" />
      <section v-if="isLoggedIn">
        <NewArticleForm @article-created="fetchArticles" />
      </section>
      <section v-else>
        <div class="not-logged-in">
          <h2>Um Artikel zu erstellen, müssen Sie sich anmelden</h2>
          <button @click="login" class="login-button">Anmelden</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ArticleList from './components/ArticleList.vue';
import NewArticleForm from './components/NewArticleForm.vue';
import DarkModeToggleComponent from './components/DarkMode.vue';

export default {
  name: 'App',
  components: {
    ArticleList,
    NewArticleForm,
    DarkModeToggleComponent,
  },
  data() {
    return {
      darkMode: false,
      isLoggedIn: false, // Placeholder for user login status
    };
  },
  methods: {
    updateDarkMode(value) {
      this.darkMode = value;
    },
    fetchArticles() {
      this.$refs.articleList.fetchArticles();
    },
    login() {
      // Placeholder function for login
      // Implement your login logic here
      this.isLoggedIn = true;
    },
    randomArticle() {
      // Placeholder function for random article navigation
      // Implement your random article logic here
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  text-align: center;
  color: #2c3e50;
}

#app.dark {
  background-color: #333;
  color: #fff;
}

header {
  background-color: #536976;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo h1 {
  margin: 0;
  font-size: 24px;
  color: #fff;
}

.search-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0 20px;
}

.search-bar {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px 0 0 5px;
}

.search-button {
  background-color: #fff;
  color: #536976;
  border: 2px solid #536976;
  border-radius: 0 5px 5px 0;
  padding: 10px;
  cursor: pointer;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.nav-buttons {
  display: flex;
  align-items: center;
}

.nav-button {
  background-color: transparent;
  color: #fff;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.button-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
}

.nav-button span {
  font-size: 14px;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.hero {
  background-color: #292E49;
  padding: 50px 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.hero-content {
  flex: 1;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 24px;
}

.hero-image {
  flex: 1;
  max-width: 100%;
  height: auto;
}

main {
  padding: 20px;
}

.hero button {
  background-color: #fff;
  color: #536976;
  border: 2px solid #536976;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.hero button:hover {
  background-color: #536976;
  color: #fff;
}

.not-logged-in {
  text-align: center;
  padding: 50px;
}

.not-logged-in h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.login-button {
  background-color: #536976;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #435761;
}
</style>
