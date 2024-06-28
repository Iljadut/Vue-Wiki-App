<template>
  <div class="article-list-page">
    <h1>Alle Artikel</h1>
    <button @click="openCreateArticleModal" class="create-article-btn">Artikel erstellen</button>
    <ul class="article-grid">
      <li v-for="article in articles" :key="article.id" class="article-item">
        <h3>{{ article.title }}</h3>
        <p>{{ article.content }}</p>
        <p><em>{{ article.author }}</em></p>
        <router-link :to="`/articles/${article.id}`" class="read-more">Mehr lesen</router-link>
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

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  list-style-type: none;
  padding-left: 0; /* Entfernt das linke Padding des UL-Elements */
}

.article-item {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 5px;
  text-align: left;
}

.article-item h3 {
  margin-top: 0;
  font-size: 18px;
}

.article-item p {
  margin: 10px 0;
}

.read-more {
  display: block;
  margin-top: 10px;
  color: #3498db;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
