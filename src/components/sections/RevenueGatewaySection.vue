<template>
  <section class="section">
    <div class="container">
      <div class="grid-2 revenue">
        <div class="revenue-bg"></div>
        <div class="revenue-content">
          <div class="revenue-item">
            <h2 class="revenue-title text-black">
              New revenue line for your product
            </h2>
            <p class="revenue-text text-black">
              Turn deposits and withdrawals into predictable revenue share.
              Monetize balances, not just clicks.
            </p>
          </div>
          <div class="revenue-item">
            <h2 class="revenue-title">Frictionless Web3 gateway</h2>
            <p class="revenue-text">
              Offer yield without teaching Web3. You keep your brand’s UX; we
              power the rails behind it — helping you attract and retain a
              broader audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.revenue {
  position: relative;
  padding: 160px 0;
  overflow: visible;
  background: var(--primary-bg);
}

.revenue-bg {
  z-index: 0;
  position: absolute;
  top: 45%;
  left: 25%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  background-image: url('@images/revenue_bg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.text-black {
  color: black !important;
}

.revenue-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.revenue-title {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 600;
  margin-bottom: 1rem;
}

.revenue-text {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

@media (max-width: 520px) {
  .revenue {
    padding: 0;
  }
  .revenue-bg {
    left: 50%;
  }
  .revenue-content {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-top: 10rem;
  }
}
</style>
