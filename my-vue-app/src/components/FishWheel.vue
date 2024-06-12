<template>
    <div>
      <h2>Fish of the Week</h2>
      <button @click="spinWheel">Spin the Wheel</button>
      <div v-if="selectedFish">
        <h3>{{ selectedFish.name }}</h3>
        <p>{{ selectedFish.description }}</p>
        <button @click="fetchArticles">View Articles</button>
        <button @click="toggleArticleForm">Write Article</button>
      </div>
      <div v-if="showArticleForm">
        <NewArticleForm :fishId="selectedFish.id" @article-created="fetchArticles"/>
      </div>
      <ArticleList v-if="articles.length" :articles="articles"/>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NewArticleForm from './NewArticleForm.vue';
  import ArticleList from './ArticleList.vue';
  
  export default {
    name: 'FishWheel',
    components: {
      NewArticleForm,
      ArticleList
    },
    data() {
      return {
        fishes: [],
        selectedFish: null,
        articles: [],
        showArticleForm: false
      };
    },
    created() {
      this.fetchFishes();
    },
    methods: {
      fetchFishes() {
        axios.get('/fish')
          .then(response => {
            this.fishes = response.data;
          })
          .catch(error => {
            console.error("Error fetching fishes", error);
          });
      },
      spinWheel() {
        const randomIndex = Math.floor(Math.random() * this.fishes.length);
        this.selectedFish = this.fishes[randomIndex];
        this.articles = [];
        this.showArticleForm = false;
      },
      fetchArticles() {
        axios.get(`/fish/${this.selectedFish.id}/articles`)
          .then(response => {
            this.articles = response.data;
          })
          .catch(error => {
            console.error("Error fetching articles", error);
          });
      },
      toggleArticleForm() {
        this.showArticleForm = !this.showArticleForm;
      }
    }
  };
  </script>
  