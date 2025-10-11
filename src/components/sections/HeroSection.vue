<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text fade-in-up">
          <h1 class="hero-title">
            Turn any app into <br /> a Web3 yield engine
          </h1>
          <p class="hero-description">
            Drop in our SDK and let your users earn with DeFi. <br /> No wallets. No jargon. No headaches.
          </p>
          <div class="hero-buttons">
            <a href="#features" class="btn btn-primary">Check demo</a>
            <a href="https://docs.mycelium.sh" class="btn btn-secondary" target="_blank">Read docs</a>
          </div>
          <span class="secondary-text"> MIT-licensed core. Premium add-ons available. </span>
        </div>
        <div class="hero-visual fade-in-up">
          <div class="code-preview">
            <div class="code-content">
              <pre><code class="language-typescript">import { MyceliumSDK } from "@mycelium-sdk/core";

const sdk = new MyceliumSDK({...});

const wallet = await sdk.wallet.createWallet("andrew@designer.com");

await wallet.earn("100");</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github-dark.css'

onMounted(() => {
  hljs.registerLanguage('typescript', typescript)
  hljs.highlightAll()
})
</script>

<style scoped>
.hero {
  padding: 120px 0 80px;
  background: radial-gradient(53.41% 59.46% at 50% 0%, #6ADCFF 0%, #2E025D 68.75%, rgba(0, 0, 0, 0) 100%), #000000;
  height: 803px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
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
  color: #f8fafc;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.hero-description {
  font-size: 18px;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
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
  background: transparent;
}

.code-preview {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 0px 20px 0px rgba(119, 0, 255, 0.1) inset;
  text-align: left;
border: 0.5px solid rgba(255, 255, 255, 0.1);
  max-width: 700px;
  width: 100%;
}

.code-header {
  background: #2d2d2d;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}


.code-title {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
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
    padding: 100px 0 60px;
    text-align: center;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .code-preview {
    max-width: 100%;
  }
}
</style>
