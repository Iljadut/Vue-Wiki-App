<template>
  <div class="article-list-page">
    <h1>Alle Artikel</h1>
    <div class="search-container">
      <input
        type="text"
        v-model="searchTerm"
        @input="searchArticles"
        placeholder="Suche nach Titel oder Inhalt"
      />
    </div>
    <button @click="openCreateArticleModal" class="create-article-btn">Artikel erstellen</button>
    <ul class="article-grid">
      <li v-for="article in filteredArticles" :key="article.id" class="article-item">
        <h3>{{ article.title }}</h3>
        <p><em>{{ article.author }}</em></p>
        <div v-if="article.expanded">
          <p>{{ article.content }}</p>
          <button @click="toggleArticle(article)">Weniger lesen</button>
        </div>
        <button v-else @click="toggleArticle(article)">Mehr lesen</button>
        <button @click="deleteArticle(article)">Artikel löschen</button>
        <button @click="toggleFavorite(article)">Favorisieren</button>
      </li>
    </ul>
    <ArticleCreateModal @article-created="handleArticleCreated" ref="createModal" />
  </div>
</template>

<script>
import ArticleCreateModal from './ArticleCreateModal.vue';
import axios from 'axios';

export default {
  name: 'ArticleListPage',
  components: {
    ArticleCreateModal
  },
  data() {
    return {
      articles: [],
      searchTerm: '',
      favorites: []
    };
  },
  created() {
    this.fetchArticles();
    if (this.$route.query.search) {
      this.searchTerm = this.$route.query.search;
      this.searchArticles();
    }
    this.loadFavorites();
  },
  computed: {
    filteredArticles() {
      if (!this.searchTerm) {
        return this.articles;
      }
      const term = this.searchTerm.trim().toLowerCase();
      return this.articles.filter(article =>
        article.title.toLowerCase().includes(term) ||
        article.content.toLowerCase().includes(term)
      );
    }
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await axios.get('https://wiki-sose24.onrender.com/articles');
        this.articles = response.data.map(article => ({ ...article, expanded: false }));
      } catch (error) {
        console.error('Fehler beim Abrufen der Artikel:', error);
      }
    },
    async deleteArticle(article) {
      try {
        if (!article) {
          console.error('Ungültige articleId:', article);
          return;
        }
        const response = await axios.delete(`https://wiki-sose24.onrender.com/articles/${article}`);
        console.log(response.data);
        await this.fetchArticles();
      } catch (error) {
        console.error('Fehler beim Löschen des Artikels:', error);
      }
    },
    handleArticleCreated() {
      this.fetchArticles();
    },
    toggleArticle(article) {
      article.expanded = !article.expanded;
    },
    openCreateArticleModal() {
      this.$refs.createModal.openModal();
    },
    searchArticles() {
    },
    toggleFavorite(article) {
      const index = this.favorites.findIndex(fav => fav.id === article.id);
      if (index === -1) {
        this.favorites.push(article);
      } else {
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
.article-list-page {
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
  color: #333;
}

.dark .article-item {
  background-color: #333;
  color: #fff;
}

.create-article-btn {
  margin-bottom: 16px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.create-article-btn:hover {
  background-color: #0056b3;
}

.search-container {
  margin-bottom: 16px;
}

input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .article-item {
    flex: 1 1 calc(50% - 16px);
  }
}

@media (max-width: 480px) {
  .article-item {
    flex: 1 1 100%;
  }
}
</style>
