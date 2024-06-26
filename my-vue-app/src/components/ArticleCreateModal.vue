<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Neuen Artikel verfassen</h2>
      <NewArticleForm @article-created="handleArticleCreated" />
    </div>
  </div>
</template>

<script>
import NewArticleForm from './NewArticleForm.vue'; // Passe den Pfad entsprechend an

export default {
  name: 'ArticleCreateModal',
  components: {
    NewArticleForm
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    handleArticleCreated() {
      this.closeModal(); // Schließe das Modal, nachdem der Artikel erstellt wurde
      this.$emit('article-created'); // Sende das Ereignis an die übergeordnete Komponente
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #888;
}

h2 {
  margin-top: 0;
}
</style>
