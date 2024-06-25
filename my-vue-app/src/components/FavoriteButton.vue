<template>
    <button @click="toggleFavorite">
      {{ isFavorite ? 'Favorit entfernen' : 'Zu Favoriten hinzufügen' }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'FavoriteButton',
    props: {
      isFavorite: Boolean
    },
    methods: {
      toggleFavorite() {
        this.$emit('toggle-favorite');
      }
    }
  }
  </script>
  
  <style scoped>
  button {
    background-color: #f7b500;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  