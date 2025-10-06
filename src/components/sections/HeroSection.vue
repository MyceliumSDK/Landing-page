<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text fade-in-up">
          <h1 class="hero-title">
            Мощный SDK для
            <span class="text-gradient">современной разработки</span>
          </h1>
          <p class="hero-description">
            Mycelium SDK объединяет лучшие технологии - Vue.js, TypeScript и Vite - 
            в едином решении для создания быстрых, масштабируемых веб-приложений.
          </p>
          <div class="hero-buttons">
            <a href="#features" class="btn btn-primary">Начать работу</a>
            <a href="#about" class="btn btn-secondary">Узнать больше</a>
          </div>
        </div>
        <div class="hero-visual fade-in-up">
          <div class="code-preview">
            <div class="code-header">
              <div class="code-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="code-title">main.ts</span>
            </div>
            <div class="code-content">
              <pre><code>import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero секция не требует дополнительной логики
</script>

<style scoped>
.hero {
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.hero-description {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.code-preview {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.code-header {
  background: #2d2d2d;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.code-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: #ff5f56;
}

.dot.yellow {
  background: #ffbd2e;
}

.dot.green {
  background: #27ca3f;
}

.code-title {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.code-content {
  padding: 20px;
  background: #1e1e1e;
}

.code-content pre {
  margin: 0;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #d4d4d4;
}

.code-content code {
  color: #569cd6;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
    text-align: center;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .code-preview {
    max-width: 100%;
  }
}
</style>
