<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Why Choose Our SDK?</h2>
      <div class="features-flex">
        <div class="feature-card fade-in-up" v-for="feature in features" :key="feature.id">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    id: 1,
    title: 'No Web3 expertise required',
    description: 'We handle wallets, signing, gas, and protocol routing under the hood. You ship a clean, familiar UX for your users and a simple API for your team',
  },
  {
    id: 2,
    title: 'Open-source core',
    description: 'Licensed SDK for non-commercial usage. Add premium features (analytics, routing policies, priority support) via subscription when you need them',
  },
  {
    id: 3,
    title: 'Advanced yield',
    description: 'SDK supports a protocol router that helps to find the best way to earn a highest yield based on your requirements',
  },
  {
    id: 4,
    title: 'Quick integration',
    description: 'Use the Server SDK or React SDK (soon) and go live fast. No wallet plumbing, no protocol juggling, no custom bridges',
  }
]
</script>

<style scoped>
.features {
  padding: 80px 0;
  background: #000000;
}

.features-flex {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 2rem;
  max-width: 700px;
  margin: auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 0px 20px 0px rgba(119, 0, 255, 0.1) inset;
  text-align: center;
  transition: all 0.3s ease;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 0px 30px 0px rgba(119, 0, 255, 0.2) inset;
  border: 0.5px solid rgba(119, 0, 255, 0.3);
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.feature-description {
   color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
}

@media (max-width: 768px) {
  .features {
    padding: 60px 0;
  }
  
  .features-flex {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-card {
    padding: 2rem;
  }
}
</style>
