<template>
    <div v-if="article">
      <h2>{{ article.title }}</h2>
      <p><em>{{ article.author }}</em></p>
      <p>{{ article.content }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ArticleDetailPage',
    props: ['id'],
    data() {
      return {
        article: null
      };
    },
    created() {
      this.fetchArticle();
    },
    methods: {
      async fetchArticle() {
        try {
          const response = await axios.get(`https://wiki-sose24.onrender.com/articles/${this.id}`);
          this.article = response.data;
        } catch (error) {
          console.error('Fehler beim Abrufen des Artikels:', error);
        }
      }
    }
  };
  </script>
  