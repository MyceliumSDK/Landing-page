<template>
  <div class="about">
    <div class="container">
      <div class="section">
        <div class="about-header text-center">
          <h1 class="fade-in-up">О Mycelium SDK</h1>
          <p class="about-subtitle fade-in-up">
            Мощный инструмент для современной разработки, созданный с любовью к качеству и производительности
          </p>
        </div>
        
        <div class="about-content">
          <div class="about-text fade-in-up">
            <h2>Наша миссия</h2>
            <p>
              Mycelium SDK создан для того, чтобы упростить процесс разработки современных веб-приложений. 
              Мы объединяем лучшие технологии - Vue.js, TypeScript и Vite - в едином решении, 
              которое позволяет разработчикам создавать быстрые, масштабируемые и поддерживаемые приложения.
            </p>
            
            <h2>Почему выбирают нас</h2>
            <ul class="features-list">
              <li>🚀 Молниеносная скорость разработки</li>
              <li>🔧 Простота настройки и использования</li>
              <li>📱 Полная поддержка мобильных устройств</li>
              <li>🎨 Современный и адаптивный дизайн</li>
              <li>🔒 Безопасность и надежность</li>
              <li>📚 Подробная документация</li>
            </ul>
          </div>
          
          <div class="about-image fade-in-up">
            <div class="image-placeholder">
              <div class="placeholder-content">
                <h3>Mycelium SDK</h3>
                <p>Современная разработка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Страница About не требует дополнительной логики
</script>

<style scoped>
.about {
  padding-top: 80px;
  min-height: 100vh;
}

.about-header {
  margin-bottom: 4rem;
}

.about-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  color: #333;
  margin-bottom: 1.5rem;
}

.about-text p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.5rem 0;
  color: #666;
  font-size: 1.1rem;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.placeholder-content h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.placeholder-content p {
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-header {
    margin-bottom: 2rem;
  }
  
  .about-subtitle {
    font-size: 1rem;
  }
}
</style>
