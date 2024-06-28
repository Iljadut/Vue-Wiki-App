import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ArticleListPage from './components/ArticleListPage.vue';
import AboutPage from './components/AboutPage.vue'; 
import ContactPage from './components/ContactPage.vue';
import NewArticleForm from './components/NewArticleForm.vue';
import ArticleDetailPage from './components/ArticleDetailPage.vue'; // Neu


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
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/create-article',
    name: 'create-article',
    component: NewArticleForm
  },
  { 
    path: '/articles/:id', 
    name: 'article-detail', 
    component: ArticleDetailPage 
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
