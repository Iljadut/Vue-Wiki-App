<template>
    <div>
      <h2>Artikel bearbeiten</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Titel:</label>
          <input type="text" id="title" v-model="editedArticle.title" required>
        </div>
        <div>
          <label for="content">Inhalt:</label>
          <textarea id="content" v-model="editedArticle.content" required></textarea>
        </div>
        <div>
          <label for="author">Autor:</label>
          <input type="text" id="author" v-model="editedArticle.author" required>
        </div>
        <button type="submit">Artikel speichern</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        editedArticle: {
          id: null,
          title: '',
          content: '',
          author: ''
        }
      };
    },
    created() {
      const { id } = this.$route.params;
      fetch(`http://localhost:8080/articles/${id}`)
        .then(response => response.json())
        .then(article => {
          this.editedArticle = article;
        })
        .catch(error => {
          console.error('Fehler beim Laden des Artikels:', error);
        });
    },
    methods: {
      submitForm() {
        fetch(`http://localhost:8080/articles/${this.editedArticle.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.editedArticle)
        })
        .then(response => {
          if (response.ok) {
            alert('Artikel erfolgreich bearbeitet!');
          } else {
            alert('Fehler beim Bearbeiten des Artikels.');
          }
        })
        .catch(error => {
          console.error('Fehler beim Bearbeiten des Artikels:', error);
          alert('Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
        });
      }
    }
  };
  </script>
  