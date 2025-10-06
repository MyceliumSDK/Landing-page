<template>
  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item fade-in-up" v-for="stat in stats" :key="stat.id">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = ref([
  {
    id: 1,
    number: '10K+',
    label: 'Активных разработчиков'
  },
  {
    id: 2,
    number: '99.9%',
    label: 'Время работы'
  },
  {
    id: 3,
    number: '50+',
    label: 'Стран использования'
  },
  {
    id: 4,
    number: '24/7',
    label: 'Поддержка'
  }
])

const animateNumbers = () => {
  const statNumbers = document.querySelectorAll('.stat-number')
  
  statNumbers.forEach((element) => {
    const target = element.textContent
    if (target) {
      const isPercentage = target.includes('%')
      const isPlus = target.includes('+')
      const isSlash = target.includes('/')
      
      if (isPercentage || isPlus || isSlash) {
        // Для специальных символов просто показываем сразу
        element.textContent = target
        return
      }
      
      const numericValue = parseInt(target.replace(/\D/g, ''))
      if (numericValue) {
        let current = 0
        const increment = numericValue / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            current = numericValue
            clearInterval(timer)
          }
          element.textContent = Math.floor(current).toLocaleString() + (isPlus ? '+' : '')
        }, 30)
      }
    }
  })
}

onMounted(() => {
  // Запускаем анимацию через небольшую задержку
  setTimeout(animateNumbers, 500)
})
</script>

<style scoped>
.stats {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.9;
  text-align: center;
}

@media (max-width: 768px) {
  .stats {
    padding: 60px 0;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .stat-label {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
