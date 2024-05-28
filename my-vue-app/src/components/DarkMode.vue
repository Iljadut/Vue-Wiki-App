
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
      this.darkMode = !this.darkMode;
      this.$emit('dark-mode-change', this.darkMode);
    }
  }
};
</script>
