<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
// import Footer from './components/Footer.vue'
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
}

main {
  flex: 1;
}
</style>
