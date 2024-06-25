<template>
    <form @submit.prevent="submitComment">
      <textarea v-model="comment" placeholder="Schreibe einen Kommentar..."></textarea>
      <button type="submit">Kommentieren</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'CommentForm',
    props: {
      articleId: Number,
    },
    data() {
      return {
        comment: ''
      };
    },
    methods: {
      submitComment() {
        this.$emit('comment-submitted', this.comment, this.articleId);
        this.comment = '';
      }
    }
  }
  </script>
  
  <style scoped>
  textarea {
    width: 100%;
    height: 100px;
  }
  button {
    display: block;
    margin-top: 10px;
  }
  </style>
  