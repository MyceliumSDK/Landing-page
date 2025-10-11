<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <div class="logo">
        <router-link to="/" class="brand-link">
          <span class="brand-text">Mycelium SDK</span>
        </router-link>
      </div>
      
      <div class="nav-menu">
        <router-link to="/" class="nav-link">GitHub</router-link>
        <router-link to="/about" class="nav-link">Contacts</router-link>
        <a href="https://docs.mycelium.sh" class="nav-link">Docs</a>
      </div>
      <div>
        <a href="#features" class="btn btn-primary">Check demo</a>
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
  font-weight: 700;
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
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 12px;
}

.nav-link:hover {
  color: #3b82f6;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.header-scrolled .nav-link:hover {
  background: rgba(119, 0, 255, 0.08);
  color: #6ADCFF;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: #e2e8f0;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem 1.5rem;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(50px) saturate(200%) brightness(80%);
    -webkit-backdrop-filter: blur(50px) saturate(200%) brightness(80%);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 4px 16px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  .nav-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-toggle:hover .hamburger-line {
    background: #3b82f6;
  }
}

.btn-primary {
  scale: 0.7;
}
</style>