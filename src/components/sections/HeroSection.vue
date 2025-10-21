<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text fade-in-up">
          <h1 class="hero-title">
            Turn any app into
            <br />
            a Web3 yield engine
          </h1>
          <p class="hero-description">
            Drop in our SDK and let your users earn with DeFi.
            <br />
            No wallets. No jargon. No headaches.
          </p>
          <div class="hero-buttons">
            <a :href="$constants.DEMO_MYCELIUM_SDK" class="btn btn-primary">
              Check demo
            </a>
            <a
              :href="$constants.DOCS_MYCELIUM_SDK"
              class="btn btn-secondary"
              target="_blank"
            >
              Read docs
            </a>
          </div>
          <span class="secondary-text">
            MIT-licensed core. Premium add-ons available.
          </span>
        </div>
        <div class="hero-visual fade-in-up">
          <div class="code-content">
            <div class="big-ellipse"><div class="small-ellipse"></div></div>
            <highlightjs language="typescript" :code="CODE_HERO_SECTION" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CODE_HERO_SECTION } from '@/constants';
</script>

<style>
.hero {
  padding: 120px 0 80px;
  background:
    radial-gradient(
      53.41% 59.46% at 50% 0%,
      #6adcff 0%,
      #2e025d 68.75%,
      rgba(0, 0, 0, 0) 100%
    ),
    var(--primary-bg);
  height: 803px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  text-align: center;
}

.hero-title {
  font-size: 56px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-family: var(--font-family);
}

.hero-description {
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  font-family: var(--font-family);
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.hljs {
  background: transparent !important;
  text-align: left !important;
  border-radius: 16px !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  padding: 1.5rem !important;
}

.big-ellipse {
  position: absolute;
  top: -100px;
  z-index: -10;
  left: 50%;
  width: 100vw;
  height: 200px;
  background-image: url('@images/Ellipse_big.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: translateX(-50%);
}

.small-ellipse {
  position: absolute;
  z-index: -5;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@images/Ellipse_small.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.code-content {
  position: relative;
  z-index: 1;
}

.code-content pre {
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #d4d4d4;
}

.code-content code {
  color: #569cd6;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0 40px;
    height: auto;
  }

  .hero-content {
    gap: 2rem;
    margin-top: 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .btn {
    width: 100%;
    max-width: 280px;
  }

  .code-content pre {
    font-size: 12px;
    padding: 0.75rem;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
  }
}
</style>
