<template>
  <section id="features" class="section">
    <div class="container">
      <h2 class="section-title">Why Choose Our SDK?</h2>
      <div class="grid-2">
        <div class="card fade-in-up" v-for="feature in features" :key="feature.id">
          <h3 class="card-title">{{ feature.title }}</h3>
          <p class="card-description">{{ feature.description }}</p>
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
.card {
  text-align: left;
}
</style>
