<template>
  <section id="features" class="section">
    <div class="container">
      <!-- <h2 class="section-title">Why Choose Our SDK?</h2> -->
      <div class="features">
        <div class="col">
          <article class="card-small fade-in-up">
            <h3 class="card-title">{{ features[2].title }}</h3>
            <p class="card-description">{{ features[2].description }}</p>
          </article>
          <article class="card-large fade-in-up">
            <h3 class="card-title">{{ features[0].title }}</h3>
            <p class="card-description">{{ features[0].description }}</p>
          </article>
        </div>
        <div class="col">
          <article class="card-large fade-in-up">
            <h3 class="card-title">{{ features[1].title }}</h3>
            <p class="card-description">{{ features[1].description }}</p>
          </article>
          <article class="card-small fade-in-up">
            <h3 class="card-title">{{ features[3].title }}</h3>
            <p class="card-description">{{ features[3].description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    id: 1,
    title: 'Smart yield routing',
    description:
      "Mycelium's protocol router automatically finds the best yield opportunities across supported Web3 protocols — so your users earn more, effortlessly.",
  },
  {
    id: 2,
    title: 'No Web3 expertise required',
    description:
      'Mycelium handles wallets, signing, gas, and protocol routing under the hood — so your users can earn with a single click, and your team never deals with crypto complexity.',
  },
  {
    id: 3,
    title: 'Open-source & flexibility',
    description:
      'Core SDK is open source. Premium add-ons and hosted services available for scaling teams.',
  },
  {
    id: 4,
    title: 'Plug-and-earn integration',
    description:
      'Add yield functionality to your app with one SDK import. Works out-of-the-box for Web2 products, no blockchain setup required.',
  },
];
</script>

<style scoped>
.features {
  width: min(92vw, 300px);
  aspect-ratio: 1 / 1;
  display: flex;
  gap: 24px;
  padding: 24px;
  box-sizing: border-box;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card-small {
  width: 300px;
  height: 170px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 6px 24px rgb(0 0 0 / 0.25) inset;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-large {
  width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 6px 24px rgb(0 0 0 / 0.25) inset;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title {
  font-size: 16px;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 14px;
}

@media (max-width: 520px) {
  .features {
    display: flex;
    flex-direction: column;
  }
}
</style>
