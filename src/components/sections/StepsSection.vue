<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">How it works?</h2>
      <div class="grid-3">
        <div class="card fade-in-up" v-for="step in steps" :key="step.id">
          <h3 class="card-title">{{ step.title }}</h3>
          <p class="card-description">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    id: 1,
    title: "1. Install the SDK",
    description: "Install the SDK: pnpm add @mycelium-sdk/core",
  },
  {
    id: 2,
    title: "2. Set SDK settings",
    description:
      "Define all necessary SDK and yield settings or use default ones",
  },
  {
    id: 3,
    title: "3. Start earning",
    description: "Let a user top up his wallet and start earning yield",
  },
];
</script>

<style scoped>
.card {
  text-align: center;
}

.card-title {
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 480px) {
  .grid-3 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
