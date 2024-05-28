<template>
  <div>
    <h2>Articles</h2>
    <div v-if="articles.length">
      <ul>
        <li v-for="article in articles" :key="article.title">
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