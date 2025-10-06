<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">Почему выбирают Mycelium SDK</h2>
        <p class="section-subtitle fade-in-up">
          Мощные возможности для современной разработки
        </p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card fade-in-up" v-for="feature in features" :key="feature.id">
          <div class="feature-icon">
            <component :is="feature.icon" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

// Иконки как компоненты
const SpeedIcon = defineComponent({
  render: () => h('svg', {
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, [
    h('path', {
      d: 'M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z'
    })
  ])
})

const TypeScriptIcon = defineComponent({
  render: () => h('svg', {
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, [
    h('path', {
      d: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 5.536 5.536 0 0 1 1.77-.284Zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z'
    })
  ])
})

const VueIcon = defineComponent({
  render: () => h('svg', {
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, [
    h('path', {
      d: 'M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z'
    })
  ])
})

const ViteIcon = defineComponent({
  render: () => h('svg', {
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, [
    h('path', {
      d: 'M8.286 10.578l.512-8.657a.306.306 0 01.247-.281L15.36.018a.306.306 0 01.353.385l-1.558 5.403a.306.306 0 00.352.385l2.388-.46a.306.306 0 01.332.438l-6.79 13.55-.123.19a.294.294 0 01-.252.14c-.176 0-.342-.1-.403-.26l-1.893-4.92a.306.306 0 00-.56 0l-3.229 7.353a.306.306 0 01-.56-.097L.494 11.508a.306.306 0 01.198-.385l2.614-.987a.306.306 0 00.183-.333l-.69-3.885a.306.306 0 01.247-.35l3.44-.388z'
    })
  ])
})

const MobileIcon = defineComponent({
  render: () => h('svg', {
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, [
    h('path', {
      d: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z'
    })
  ])
})

const SecurityIcon = defineComponent({
  render: () => h('svg', {
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  }, [
    h('path', {
      d: 'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16.2V16H7.8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z'
    })
  ])
})

const features = [
  {
    id: 1,
    title: 'Молниеносная скорость',
    description: 'Vite обеспечивает мгновенную перезагрузку модулей и быструю сборку проекта',
    icon: SpeedIcon
  },
  {
    id: 2,
    title: 'TypeScript поддержка',
    description: 'Полная поддержка TypeScript для безопасной разработки и лучшего DX',
    icon: TypeScriptIcon
  },
  {
    id: 3,
    title: 'Vue.js 3',
    description: 'Современный фреймворк с Composition API и отличной производительностью',
    icon: VueIcon
  },
  {
    id: 4,
    title: 'Vite сборка',
    description: 'Быстрая сборка с современными инструментами и оптимизацией',
    icon: ViteIcon
  },
  {
    id: 5,
    title: 'Адаптивный дизайн',
    description: 'Полная поддержка мобильных устройств и планшетов из коробки',
    icon: MobileIcon
  },
  {
    id: 6,
    title: 'Безопасность',
    description: 'Встроенные механизмы безопасности и лучшие практики разработки',
    icon: SecurityIcon
  }
]
</script>

<style scoped>
.features {
  padding: 80px 0;
  background: #fff;
}

.section-header {
  margin-bottom: 4rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.feature-description {
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .features {
    padding: 60px 0;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 2rem;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
}
</style>
