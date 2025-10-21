<template>
  <section class="section">
    <div class="container">
      <div class="usecases-wrap">
        <div class="usecases-left">
          <div class="usecases-list">
            <h2 class="section-title">Use cases</h2>

            <div v-for="uc in useCases" :key="uc.id" class="usecases-item">
              <h3 class="usecases-title" v-html="uc.title"></h3>
              <p class="usecases-description" v-html="uc.description"></p>
            </div>
          </div>
        </div>

        <div class="usecases-right">
          <div class="usecases-images">
            <img src="@images/safe.webp" class="img safe" alt="" />
            <img src="@images/cardholder.webp" class="img cardholder" alt="" />
            <img src="@images/gamepad.webp" class="img gamepad" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const useCases = [
  {
    id: 1,
    title: 'Fintech <br>& neobanks',
    description: 'Add yield accounts without building a DeFi team.',
  },
  {
    id: 2,
    title: 'Wallets <br>& superapps',
    description: 'One-tap earn with built-in routing.',
  },
  {
    id: 3,
    title: 'Marketplaces <br>& games',
    description: 'Let balances work while users play or trade.',
  },
];
</script>

<style scoped>
.section-title {
  font-size: 3.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-align: start;
}

.usecases {
  padding: 80px 0 120px;
  background: var(--primary-bg, #000);
}

.usecases-wrap {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
}

.usecases-list {
  display: grid;
  gap: 30px;
  max-width: 500px;
  min-width: 400px;
}

.usecases-title {
  font-size: 2.2rem;
  line-height: 1.05;
  font-weight: 700;
  margin: 0 0 8px;
}

.usecases-description {
  margin: 0;
  font-size: var(--description-size);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
}

.usecases__right {
  display: grid;
  place-items: center;
}

.usecases-images {
  position: relative;
  width: min(52vw, 500px);
  aspect-ratio: 1.05 / 1;
}

.img {
  position: absolute;
  display: block;
  max-width: none;
  pointer-events: none;
}

.safe {
  left: 50%;
  top: 68%;
  transform: translate(-60%, -50%);
}

.cardholder {
  width: 45%;
  left: -10%;
  top: 55%;
  transform: rotate(0deg);
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.55));
}

.gamepad {
  width: 48%;
  right: 10%;
  top: 10%;
  transform: rotate(0deg);
  filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.6));
}

@media (max-width: 768px) {
  .usecases-wrap {
    padding: 0 1rem;
    gap: 56px;
  }
  .usecases-left {
    order: 2;
  }
  .usecases-right {
    display: none;
  }
  .usecases-art {
    width: min(90vw, 560px);
  }
}
</style>
