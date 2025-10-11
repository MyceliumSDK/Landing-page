<template>
  <section class="steps">
    <div class="container">
      <h2 class="section-title">How to use Mycelium SDK</h2>
      <div class="steps-grid">
        <div class="stat-item fade-in-up" v-for="step in steps" :key="step.id">
          <div class="step-title">{{ step.title }}</div>
          <div class="step-description">{{ step.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const steps = [
  {
    id: 1,
    title: '1. Install the Myceleium SDK',
    description: 'Use one command to get a quick access: pnpm add @mycelium-sdk/core'
  },
  {
    id: 2,
    title: '2. Set config and yield conditions',
    description: 'Define all necessary SDK and yield settings or use default ones'
  },
  {
    id: 3,
    title: '3. Quick gateway to web3  ',
    description: 'One call to create/retrieve a user wallet, one call to start earn yield for a user. Withdraw anytime'
  },
]


</script>

<style scoped>
.steps {
  padding: 80px 0;
  color: white;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  text-align: center;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.step-description {
  margin-top: .5rem;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.8;
  text-align: center;
}

@media (max-width: 768px) {
  .steps {
    padding: 60px 0;
  }
  
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .step-title {
    font-size: 2.5rem;
  }
  
  .step-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
