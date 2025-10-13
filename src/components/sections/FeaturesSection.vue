<template>
  <section id="features" class="section">
    <div class="container">
      <h2 class="section-title">Why Choose Our SDK?</h2>
      <div class="grid-2">
        <div
          class="card fade-in-up"
          v-for="feature in features"
          :key="feature.id"
        >
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
    title: "No Web3 expertise needed",
    description:
      "Mycelium handles wallets, signing, gas, and protocol routing under the hood — so your users can earn with a single click, and your team never deals with crypto complexity",
  },
  {
    id: 2,
    title: "Open-source & flexibility",
    description:
      "Core SDK is open source. Premium add-ons and hosted services available for scaling teams",
  },
  {
    id: 3,
    title: "Smart yield routing",
    description:
      "Mycelium's protocol router automatically finds the best yield opportunities across supported Web3 protocols — so your users earn more, effortlessly",
  },
  {
    id: 4,
    title: "Plug-and-earn integration",
    description:
      "Add yield functionality to your app with one SDK import. Works out-of-the-box for Web2 products, no blockchain setup required",
  },
];
</script>

<style scoped>
.card {
  text-align: left;
}
</style>
