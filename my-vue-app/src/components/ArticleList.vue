<template>
  <div class="container">
    <h2>Interessante Wiki-Einträge</h2>
    <div v-if="articles.length" class="article-list">
      <ul>
        <li v-for="article in articles" :key="article.title" class="article-item">
          <h3>{{ article.title }}</h3>
          <p>{{ article.content }}</p>
          <p><em>{{ article.author }}</em></p>
        </li>
      </ul>
    </div>
    <p v-else>Loading articles...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ArticleList',
  data() {
    return {
      articles: []
    };
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      axios.get('https://wiki-sose24.onrender.com/articles')
        .then(response => {
          this.articles = response.data;
        })
        .catch(error => {
          console.error("Es gab einen Fehler beim Abrufen der Artikel!", error);
        });
    }
  }
}
</script>

<style scoped>
.article-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.article-item {
  background: #fff;
  margin: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
}

.article-item h3 {
  margin-top: 0;
  color: #536976; /* Neue Farbe */
}

.article-item p {
  margin: 10px 0;
}

.article-item em {
  display: block;
  text-align: right;
  color: #666;
}
</style>
