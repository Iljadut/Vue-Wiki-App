<template>
    <div class="favorites-page">
      <h1>Favoriten</h1>
      <ul class="article-grid">
        <li v-for="article in favorites" :key="article.id" class="article-item">
          <h3>{{ article.title }}</h3>
          <p><em>{{ article.author }}</em></p>
          <p>{{ article.content }}</p>
          <button @click="toggleFavorite(article)">Aus Favoriten entfernen</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FavoritesPage',
    data() {
      return {
        favorites: []
      };
    },
    created() {
      this.loadFavorites();
    },
    methods: {
      toggleFavorite(article) {
        const index = this.favorites.findIndex(fav => fav.id === article.id);
        if (index !== -1) {
          this.favorites.splice(index, 1);
        }
        this.saveFavorites();
      },
      saveFavorites() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      },
      loadFavorites() {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
          this.favorites = JSON.parse(savedFavorites);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .favorites-page {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .article-grid {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    gap: 16px;
  }
  
  .article-item {
    flex: 1 1 calc(25% - 32px);
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 16px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  body.dark .article-item {
    background-color: #333;
    color: #fff;
  }
  </style>
  