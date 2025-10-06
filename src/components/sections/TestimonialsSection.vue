<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="fade-in-up">Что говорят разработчики</h2>
        <p class="section-subtitle fade-in-up">
          Отзывы от тех, кто уже использует Mycelium SDK
        </p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card fade-in-up" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="testimonial-content">
            <div class="testimonial-quote">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
              </svg>
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">
              <img :src="testimonial.avatar" :alt="testimonial.name" />
            </div>
            <div class="author-info">
              <h4 class="author-name">{{ testimonial.name }}</h4>
              <p class="author-role">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    id: 1,
    text: 'Mycelium SDK кардинально изменил наш подход к разработке. Скорость сборки увеличилась в 10 раз, а TypeScript поддержка сделала код намного надежнее.',
    name: 'Алексей Петров',
    role: 'Lead Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    text: 'Отличный инструмент для быстрого прототипирования. Vue 3 + TypeScript + Vite - идеальное сочетание для современных проектов.',
    name: 'Мария Сидорова',
    role: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    text: 'Простота настройки и мощные возможности. За несколько минут получил готовый проект с современным стеком технологий.',
    name: 'Дмитрий Козлов',
    role: 'Software Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  }
]
</script>

<style scoped>
.testimonials {
  padding: 80px 0;
  background: #f8fafc;
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.testimonial-content {
  margin-bottom: 2rem;
}

.testimonial-quote {
  color: #667eea;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
}

.author-role {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  .testimonials {
    padding: 60px 0;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .testimonial-card {
    padding: 2rem;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
}
</style>
