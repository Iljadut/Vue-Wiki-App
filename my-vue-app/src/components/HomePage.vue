<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Willkommen zum Allwissenden Wiki, wo du alles finden kannst</h1>
      <p>Was wirst du heute herausfinden?</p>
      <div class="search-container">
        <input type="text" v-model="searchTerm" @input="handleInput" placeholder="Suche nach Titel oder Inhalt" class="search-bar">
      </div>
      <router-link to="/articles" class="articles-button">Zu den Artikeln</router-link>
    </div>
    <img src="@/assets/wiki3.png" alt="Wiki Illustration" class="hero-image">
  </section>
</template>

<script>
let searchTimeout = null;

export default {
  name: 'HomePage',
  data() {
    return {
      searchTerm: ''
    };
  },
  methods: {
    handleInput() {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        this.searchArticles();
      }, 500);
    },
    searchArticles() {
      if (this.searchTerm.trim() !== '') {
        this.$router.push({ path: '/articles', query: { search: this.searchTerm } });
      } else {
        this.$router.push('/articles');
      }
    }
  }
};
</script>

<style scoped>
.hero {
  background-color: #292E49;
  padding: 50px 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0;
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

.search-container {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.search-bar {
  width: 600px;
  padding: 10px;
  font-size: 20px;
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

.articles-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #fff;
  color: #536976;
  border: 2px solid #536976;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}

.articles-button:hover {
  background-color: #536976;
  color: #fff;
}

.hero-image {
  flex: 1;
  max-width: 100%;
  height: auto;
}
</style>