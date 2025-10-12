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
            <a :href="$constants.DEMO_MYCELIUM_SDK" class="btn btn-primary">Check demo</a>
            <a :href="$constants.DOCS_MYCELIUM_SDK" class="btn btn-secondary" target="_blank">Read docs</a>
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
import { onMounted, nextTick } from 'vue'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/github-dark.css'

onMounted(() => {
  hljs.registerLanguage('typescript', typescript)
  hljs.highlightAll()

  nextTick(() => {
    hljs.highlightAll()
  })
})
</script>

<style scoped>
.hero {
  padding: 120px 0 80px;
  background: radial-gradient(53.41% 59.46% at 50% 0%, #6ADCFF 0%, #2E025D 68.75%, rgba(0, 0, 0, 0) 100%), var(--primary-bg);
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
  background: transparent;
}

.code-preview {
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  text-align: left;
  border: 0.5px solid var(--border-color);
  max-width: 700px;
  width: 100%;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(119, 0, 255, 0.3) transparent;
}

.code-preview::-webkit-scrollbar {
  height: 6px;
}

.code-preview::-webkit-scrollbar-track {
  background: transparent;
}

.code-preview::-webkit-scrollbar-thumb {
  background: rgba(119, 0, 255, 0.3);
  border-radius: 3px;
}

.code-preview::-webkit-scrollbar-thumb:hover {
  background: rgba(119, 0, 255, 0.5);
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
  
  .code-preview {
    max-width: calc(100vw - 2rem);
    margin: 0 1rem;
    overflow-x: auto;
  }
  
  .code-content pre {
    font-size: 12px;
    padding: 0.75rem;
    overflow-x: auto;
    white-space: pre;
    min-width: max-content;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 14px;
  }
  
  .code-preview {
    max-width: calc(100vw - 1.5rem);
    margin: 0 0.5rem;
  }
  
  .code-content pre {
    font-size: 11px;
    padding: 0.5rem;
  }
}
</style>
