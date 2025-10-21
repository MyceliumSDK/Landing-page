<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text fade-in-up">
          <h1 class="hero-title">
            DeFi yield in your app
            <br />
            in minutes
          </h1>
          <p class="hero-description">
            Let your users earn from Web3 without ever touching Web3.
            <br />
            Simple integration, real yield, zero complexity
          </p>
          <div class="hero-buttons">
            <a :href="$constants.DEMO_MYCELIUM_SDK" class="btn btn-primary">
              Try demo
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
            Open source core. Premium add-ons available
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
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 0.5px solid transparent;

  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.6) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -2px 4px rgba(255, 255, 255, 0.15),
    0 8px 32px rgba(0, 0, 0, 0.6);
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
    padding: 0;
    height: auto;
    min-height: 100vh;

    background:
      radial-gradient(
        80% 80% at 50% -30%,
        #6adcff 0%,
        #2e025d 70%,
        rgba(0, 0, 0, 0) 100%
      ),
      var(--primary-bg);

    background-repeat: no-repeat;
    background-size: 200% 120%;
    background-position: center top;
  }

  .hero-content {
    margin-top: 1rem;
    gap: 3rem;
  }

  .hero-title {
    font-size: clamp(2rem, 6vw, 2.5rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  .hero-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .btn {
    max-width: 260px;
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .hljs {
    font-size: 10px !important;
    padding: 1rem 0.5rem !important;
    width: min(90vw, 480px);
    overflow-x: hidden !important;
  }

  .code-content pre {
    font-size: 12px;
    white-space: pre;
    overflow-x: auto;
  }

  .big-ellipse {
    top: -70%;
    width: 140vw;
    height: 160px;
    background-size: cover;
  }

  .small-ellipse {
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .secondary-text {
    font-size: 0.875rem;
    display: block;
    margin-top: 1rem;
  }
}
</style>
