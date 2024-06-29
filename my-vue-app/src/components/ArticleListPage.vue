<template>
  <div class="article-list-page">
    <h1>Alle Artikel</h1>
    <button @click="openCreateArticleModal" class="create-article-btn">Artikel erstellen</button>
    <ul class="article-grid">
      <li v-for="article in articles" :key="article.id" class="article-item">
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
      articles: []
    };
  },
  created() {
    this.fetchArticles();
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
        const response = await axios.delete(`https://wiki-sose24.onrender.com/articles/${articleId}`);
        console.log(response.data); // Optional: Handle response if needed
        this.fetchArticles(); // Refresh articles after deletion
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
  flex: 1 1 calc(25% - 32px); /* Anpassung auf 25% */
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
