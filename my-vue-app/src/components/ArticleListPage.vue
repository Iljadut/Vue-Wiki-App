<template>
  <div class="article-list-page">
    <h1>Alle Artikel</h1>
    <button @click="openCreateArticleModal" class="create-article-btn">Artikel erstellen</button>
    <ul class="article-list">
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{ name: 'article', params: { id: article.id } }">{{ article.title }}</router-link>
      </li>
    </ul>
    <ArticleCreateModal @article-created="handleArticleCreated" ref="createModal" />
  </div>
</template>

<script>
import ArticleCreateModal from './ArticleCreateModal.vue'; // Passe den Pfad entsprechend an
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
        this.articles = response.data;
      } catch (error) {
        console.error('Fehler beim Abrufen der Artikel:', error);
      }
    },
    handleArticleCreated() {
      this.fetchArticles(); // Lade die Artikel erneut, um den neuen Artikel anzuzeigen
    },
    openCreateArticleModal() {
      this.$refs.createModal.openModal(); // Öffne das Modal zur Artikel-Erstellung
    }
  }
};
</script>

<style scoped>
.article-list-page {
  text-align: center;
}

.create-article-btn {
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.article-list {
  list-style-type: none;
  padding: 0;
}

.article-list li {
  margin: 10px 0;
}
</style>
