<template>
  <div class="article-list-page">
    <h1>Alle Artikel</h1>
    <button @click="createArticle" class="create-article-btn">Artikel erstellen</button>
    <ul class="article-list">
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{ name: 'article', params: { id: article.id } }">{{ article.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ArticleListPage',
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
    createArticle() {
      this.$router.push({ name: 'create-article' });
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
