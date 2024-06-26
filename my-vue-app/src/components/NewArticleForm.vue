<template>
  <div class="new-article-form">
    <h2>Neuen Artikel verfassen</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Titel</label>
        <input type="text" v-model="title" id="title" required />
      </div>
      <div class="form-group">
        <label for="content">Inhalt</label>
        <textarea v-model="content" id="content" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <label for="author">Autor</label>
        <input type="text" v-model="author" id="author" required />
      </div>
      <button type="submit" class="btn">Artikel veröffentlichen</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewArticleForm',
  data() {
    return {
      title: '',
      content: '',
      author: ''
    };
  },
  methods: {
    submitForm() {
      const newArticle = {
        title: this.title,
        content: this.content,
        author: this.author
      };

      axios.post('https://wiki-sose24.onrender.com/articles', newArticle)
        .then(response => {
          console.log("Artikel erfolgreich erstellt!", response.data);
          this.clearForm(); // Formular leeren nach erfolgreichem Erstellen
          this.fetchArticles(); // Schritt 1: Aktualisiere die Artikel nach dem Erstellen
          this.$emit('article-created'); // Event emit, falls notwendig
        })
        .catch(error => {
          console.error("Fehler beim Erstellen des Artikels!", error);
        });
    },
    clearForm() {
      this.title = '';
      this.content = '';
      this.author = '';
    },
    fetchArticles() {
      // Diese Methode sollte in einer übergeordneten Komponente implementiert werden,
      // die die Liste der Artikel verwaltet und sie nach dem Erstellen eines neuen Artikels aktualisiert.
      // Hier ein Beispiel für die Implementierung:
      this.$emit('fetch-articles'); // Event emit, um übergeordnete Komponente zu informieren
    }
  }
};
</script>

<style scoped>
.new-article-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #536976; /* Neue Farbe */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #292E49; /* Neue Farbe */
}
</style>
