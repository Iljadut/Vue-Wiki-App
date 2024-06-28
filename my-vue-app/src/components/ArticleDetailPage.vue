<template>
    <div class="article-detail">
      <h1>{{ article.title }}</h1>
      <p>{{ article.content }}</p>
      <p><em>{{ article.author }}</em></p>
      <button @click="goBack">Zurück</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ArticleDetailPage',
    data() {
      return {
        article: {}
      };
    },
    created() {
      this.fetchArticle();
    },
    methods: {
      async fetchArticle() {
        try {
          const response = await axios.get(`https://wiki-sose24.onrender.com/articles/${this.$route.params.id}`);
          this.article = response.data;
        } catch (error) {
          console.error('Fehler beim Abrufen des Artikels:', error);
        }
      },
      goBack() {
        this.$router.push('/articles');
      }
    }
  };
  </script>
  
  <style scoped>
  .article-detail {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .article-detail h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .article-detail p {
    font-size: 1.2em;
    line-height: 1.6;
  }
  
  .article-detail button {
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  