<template>
  <div class="contact">
    <div class="container">
      <div class="section">
        <div class="contact-header text-center">
          <h1 class="fade-in-up">Свяжитесь с нами</h1>
          <p class="contact-subtitle fade-in-up">
            Готовы начать работу с Mycelium SDK? Свяжитесь с нами для получения дополнительной информации
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info fade-in-up">
            <h2>Контактная информация</h2>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div class="contact-details">
                <h3>Адрес</h3>
                <p>Москва, Россия</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="contact-details">
                <h3>Телефон</h3>
                <p>+7 (999) 123-45-67</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="contact-details">
                <h3>Email</h3>
                <p>hello@myceliumsdk.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div class="contact-details">
                <h3>Время работы</h3>
                <p>Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form fade-in-up">
            <h2>Отправить сообщение</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Имя</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  placeholder="Ваше имя"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  placeholder="your@email.com"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Тема</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  placeholder="Тема сообщения"
                >
              </div>
              
              <div class="form-group">
                <label for="message">Сообщение</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="5"
                  placeholder="Ваше сообщение..."
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Отправка...' : 'Отправить сообщение' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  // Имитация отправки формы
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.')
  
  // Очистка формы
  Object.keys(form).forEach(key => {
    form[key as keyof typeof form] = ''
  })
  
  isSubmitting.value = false
}
</script>

<style scoped>
.contact {
  padding-top: 80px;
  min-height: 100vh;
}

.contact-header {
  margin-bottom: 4rem;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2 {
  color: #333;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.contact-details h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-details p {
  color: #666;
  margin: 0;
}

.contact-form h2 {
  color: #333;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-header {
    margin-bottom: 2rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
}
</style>
