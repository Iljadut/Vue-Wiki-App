<template>
  <div class="article-list-page">
    <h1>Alle Artikel</h1>
    <button @click="createArticle" class="create-article-btn">Artikel erstellen</button>
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from './ArticleList.vue';

export default {
  name: 'ArticleListPage',
  components: {
    ArticleList
  },
  methods: {
    createArticle() {
      this.$router.push({ name: 'create-article' });
    }
  }
};
</script>

<style scoped>
.article-list-page {
  text-align: center;
  padding: 20px;
}

.create-article-btn {
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #536976; /* Neue Farbe */
  color: white;
  border: none;
  border-radius: 4px;
}

.create-article-btn:hover {
  background-color: #292E49; /* Neue Farbe */
}
</style>
