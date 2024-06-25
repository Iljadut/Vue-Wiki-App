import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ArticleListPage from './components/ArticleListPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleListPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
