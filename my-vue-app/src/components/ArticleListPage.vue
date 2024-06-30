<template>
  <div class="article-list-page" :class="{ dark: darkMode }">
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
        <button @click="deleteArticle(article.id)">Artikel löschen</button>
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
      darkMode: false // Initial Dark Mode Status
    };
  },
  created() {
    this.fetchArticles();
    // Überprüfen, ob eine Suchanfrage von der Homepage kommt
    if (this.$route.query.search) {
      this.searchTerm = this.$route.query.search;
      this.searchArticles();
    }
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
    async deleteArticle(articleId) {
      try {
        if (!articleId) {
          console.error('Ungültige articleId:', articleId);
          return;
        }
        const response = await axios.delete(`https://wiki-sose24.onrender.com/articles/${articleId}`);
        console.log(response.data);
        this.fetchArticles(); // Aktualisieren der Artikel nach dem Löschen
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
      // Nicht notwendig, da durch v-model und @input bereits live gefiltert wird
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
  color: #333; /* Standardfarbe für Text */
}

.dark .article-item {
  background-color: #333; /* Dunkler Hintergrund im Dark Mode */
  color: #fff; /* Weiße Schrift im Dark Mode */
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
