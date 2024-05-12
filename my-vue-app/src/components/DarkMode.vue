<template>
  <div>
    <button @click="toggleDarkMode">Darkmode {{ darkMode ? 'ausschalten' : 'einschalten' }}</button>
  </div>
</template>

<script>
export default {
  name: 'DarkModeToggleComponent',
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      // Darkmode ein- oder ausschalten
      this.darkMode = !this.darkMode;

    }
  }
};
</script>
