<template>
  <div id="app" :class="{ dark: darkMode }">
    <header>
      <nav>
        <div class="logo">
          <h1><span class="logo-bold">Allwissendes</span>Wiki</h1>
        </div>
        <div class="search-container">
          <input type="text" placeholder="Was willst wissen?" class="search-bar">
          <button class="search-button">
            <img src="./assets/search.png" alt="Search" class="search-icon">
          </button>
        </div>
        <div class="nav-buttons">
          <button class="dark-mode-toggle" @click="toggleDarkMode">
            {{ darkMode ? 'Darkmode ausschalten' : 'Darkmode einschalten' }}
          </button>
          <div class="divider"></div>
          <button class="nav-button" @click="randomArticle">
            <img src="./assets/randomise.png" alt="Random" class="button-icon">
            <span>Zufällig</span>
          </button>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-links">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="newsletter-signup">
          <h3>Allwissendes Wiki Newsletter</h3>
          <p>Hilfreiche Anleitungen wöchentlich in deinem Posteingang!</p>
          <input type="email" placeholder="E-Mail eingeben">
          <button>Anmelden</button>
          <p class="privacy-policy">Mit der Anmeldung erklärst du dich mit unserer Datenschutzrichtlinie einverstanden.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark', this.darkMode);
    },
    async randomArticle() {
      try {
        const response = await axios.get('https://wiki-sose24.onrender.com/random-article');
        const article = response.data;
        if (article) {
          alert(`Zufälliger Artikel: ${article.title}\nAutor: ${article.author}\nInhalt: ${article.content}`);
        } else {
          alert('Keine Artikel gefunden.');
        }
      } catch (error) {
        console.error('Fehler beim Abrufen des zufälligen Artikels', error);
      }
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

body.dark {
  background-color: #333;
  color: #fff;
}

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
  margin-bottom: 0;
}

nav {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  margin-right: 20px;
}

.logo h1 {
  margin: 0;
  font-size: 24px;
  color: #fff;
}

.logo-bold {
  color: #2c3e50;
  font-weight: bold;
}

.search-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0 20px;
}

.search-bar {
  width: 300px;
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

.divider {
  height: 30px;
  width: 2px;
  background-color: #fff;
  margin: 0 10px;
}

.nav-button, .dark-mode-toggle {
  background-color: transparent;
  color: #fff;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.dark-mode-toggle {
  margin-right: 10px;
}

.button-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
}

.nav-button span {
  font-size: 14px;
}

.nav-button:hover, .dark-mode-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

footer {
  background-color: #536976;
  padding: 20px 40px;
  color: #fff;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-links {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links ul li {
  margin-bottom: 5px;
}

.footer-links ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-links ul li a:hover {
  text-decoration: underline;
}

.newsletter-signup {
  text-align: left;
}

.newsletter-signup h3 {
  margin-top: 0;
}

.newsletter-signup p {
  margin: 5px 0;
}

.newsletter-signup input[type="email"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
}

.newsletter-signup button {
  background-color: #f7b500;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.newsletter-signup button:hover {
  background-color: #d39e00;
}

.privacy-policy {
  font-size: 12px;
}
</style>
