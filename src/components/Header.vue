<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <div class="logo">
        <a href="#" class="brand-link">
          <span class="brand-text">Mycelium SDK</span>
        </a>
      </div>
      
      <div class="nav-menu">
        <a :href="$constants.GITHUB_MYCELIUM_SDK" class="nav-link">GitHub</a>
        <a href="#contacts" class="nav-link">Contacts</a>
        <a :href="$constants.DOCS_MYCELIUM_SDK" class="nav-link">Docs</a>
      </div>
      <div>
        <a :href="$constants.DEMO_MYCELIUM_SDK" class="btn btn-primary">Check demo</a>
      </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.header {
  background: transparent;
  position: fixed;
  z-index: 1000;
  padding: .5rem 2rem;
  width: 100vw;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-scrolled {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(50px) saturate(200%) brightness(80%);
  -webkit-backdrop-filter: blur(50px) saturate(200%) brightness(80%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.05);
}

.brand-link {
  text-decoration: none;
  color: inherit;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s ease;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  scale: 1.1;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem 5.5rem !important;
    padding-top: max(1rem, env(safe-area-inset-top)) !important;
    padding-left: max(1.5rem, env(safe-area-inset-left)) !important;
    padding-right: max(1.5rem, env(safe-area-inset-right)) !important;
  }
  
  .nav-menu {
    display: none;
  }
}

.btn-primary {
  scale: 0.7;
}
</style>