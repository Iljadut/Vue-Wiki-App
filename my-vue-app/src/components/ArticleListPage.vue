<template>
  <div class="article-list-page">
    <h1>Alle Artikel</h1>
    <div class="articles-grid">
      <div class="article-card" v-for="article in articles" :key="article.id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
        <router-link :to="`/article/${article.id}`">Mehr lesen</router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
        const response = await fetch('https://wiki-sose24.onrender.com/articles');
        const data = await response.json();
        this.articles = data;
      } catch (error) {
        console.error('Fehler beim Abrufen der Artikel:', error);
      }
    }
  }
}
</script>

<style scoped>
.article-list-page {
  padding: 20px;
}

.articles-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.article-card {
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  width: calc(33.333% - 20px);
  box-sizing: border-box;
}

.article-card h2 {
  margin: 0 0 10px;
  font-size: 1.25em;
}

.article-card p {
  font-size: 1em;
  margin: 0 0 15px;
}

.article-card a {
  color: #007bff;
  text-decoration: none;
}

.article-card a:hover {
  text-decoration: underline;
}
</style>
