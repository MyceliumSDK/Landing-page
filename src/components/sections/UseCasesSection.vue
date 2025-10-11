<template>
  <section class="use-cases">
    <div class="container">
      <div>
        <h2 class="section-title">Use Cases</h2>
      </div>
      
      <div class="use-cases-grid">
        <div class="use-case-card fade-in-up" v-for="useCase in useCases" :key="useCase.id">
          <div class="use-case-icon">
            <div v-html="useCase.icon"></div>
          </div>
          <div class="use-case-content">
            <h3 class="use-case-title">{{ useCase.title }}</h3>
            <p class="use-case-description">{{ useCase.description }}</p>
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
    title: 'Fintech & Neobanks',
    description: 'Add yield accounts without building a DeFi team.',
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
<path d="M21 10C21.1313 10 21.2614 9.97419 21.3827 9.92395C21.5041 9.8737 21.6143 9.80005 21.7072 9.70718C21.8 9.61432 21.8737 9.50406 21.9239 9.38272C21.9742 9.26138 22 9.13133 22 9V6C22.0001 5.79017 21.9341 5.58565 21.8114 5.41544C21.6887 5.24524 21.5155 5.11799 21.3164 5.05176L12.3164 2.05176C12.111 1.9834 11.889 1.9834 11.6836 2.05176L2.68359 5.05176C2.48449 5.11799 2.31131 5.24524 2.18861 5.41544C2.0659 5.58565 1.99991 5.79017 2 6V9C1.99997 9.13133 2.02581 9.26138 2.07605 9.38272C2.12629 9.50406 2.19995 9.61432 2.29282 9.70718C2.38568 9.80005 2.49594 9.8737 2.61728 9.92395C2.73862 9.97419 2.86867 10 3 10H4V17.1843C3.41674 17.3897 2.91137 17.7707 2.55327 18.2748C2.19517 18.779 2.0019 19.3816 2 20V22C1.99997 22.1313 2.02581 22.2614 2.07605 22.3827C2.12629 22.5041 2.19995 22.6143 2.29282 22.7072C2.38568 22.8 2.49594 22.8737 2.61728 22.9239C2.73862 22.9742 2.86867 23 3 23H21C21.1313 23 21.2614 22.9742 21.3827 22.9239C21.5041 22.8737 21.6143 22.8 21.7072 22.7072C21.8 22.6143 21.8737 22.5041 21.9239 22.3827C21.9742 22.2614 22 22.1313 22 22V20C21.9981 19.3816 21.8048 18.779 21.4467 18.2748C21.0886 17.7707 20.5833 17.3897 20 17.1843V10H21ZM20 21H4V20C4.00026 19.7349 4.10571 19.4807 4.29319 19.2932C4.48066 19.1057 4.73486 19.0003 5 19H19C19.2651 19.0003 19.5193 19.1057 19.7068 19.2932C19.8943 19.4807 19.9997 19.7349 20 20V21ZM6 17V10H8V17H6ZM10 17V10H14V17H10ZM16 17V10H18V17H16ZM4 8V6.7207L12 4.0537L20 6.7207V8H4Z" fill="currentColor"/>
</svg>
    `
  },
  {
    id: 2,
    title: 'Wallets & Superapps',
    description: 'One-tap earn with built-in routing.',
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
<path d="M19 7H18V6C18 5.20435 17.6839 4.44129 17.1213 3.87868C16.5587 3.31607 15.7956 3 15 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7956 7 19 7ZM5 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5ZM20 15H19C18.7348 15 18.4804 14.8946 18.2929 14.7071C18.1054 14.5196 18 14.2652 18 14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13H20V15ZM20 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14C16 14.7956 16.3161 15.5587 16.8787 16.1213C17.4413 16.6839 18.2044 17 19 17H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.83C4.32127 8.94302 4.65943 9.00051 5 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V11Z" fill="currentColor"/>
</svg>
    `
  },
  {
    id: 3,
    title: 'Marketplaces & Games',
    description: 'Let balances work while users play or trade.',
    icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
<path d="M13.6 10.9C13.7 11 13.8 11 14 11H21C21.6 11 22 10.6 22 10C22 9.8 22 9.7 21.9 9.6L18.4 2.6C18.1 2.1 17.5 1.9 17 2.2C16.9 2.3 16.7 2.4 16.6 2.6L13.1 9.6C12.9 10 13.1 10.6 13.6 10.9ZM17.5 5.2L19.4 9H15.6L17.5 5.2ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2ZM6.5 9C5.1 9 4 7.9 4 6.5C4 5.1 5.1 4 6.5 4C7.9 4 9 5.1 9 6.5C9 7.9 7.9 9 6.5 9ZM10.7 13.3C10.3 12.9 9.7 12.9 9.3 13.3L6.5 16.1L3.7 13.3C3.3 12.9 2.7 12.9 2.3 13.3C1.9 13.7 1.9 14.3 2.3 14.7L5.1 17.5L2.3 20.3C1.9 20.7 1.9 21.3 2.3 21.7C2.7 22.1 3.3 22.1 3.7 21.7L6.5 18.9L9.3 21.7C9.7 22.1 10.3 22.1 10.7 21.7C11.1 21.3 11.1 20.7 10.7 20.3L7.9 17.5L10.7 14.7C11.1 14.3 11.1 13.7 10.7 13.3ZM21 13H14C13.4 13 13 13.4 13 14V21C13 21.6 13.4 22 14 22H21C21.6 22 22 21.6 22 21V14C22 13.4 21.6 13 21 13ZM20 20H15V15H20V20Z" fill="currentColor"/>
</svg>
    `
  }
]
</script>

<style scoped>
.use-cases {
  padding: 80px 0;
  background: #000000;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.use-case-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0px 0px 20px 0px rgba(119, 0, 255, 0.1) inset;
  transition: all 0.3s ease;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.use-case-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 0px 30px 0px rgba(119, 0, 255, 0.2) inset;
  border: 0.5px solid rgba(119, 0, 255, 0.3);
}

.use-case-icon {
  color: #7700ff;
  opacity: 0.7;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.use-case-content {
  flex: 1;
}

.use-case-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.use-case-description {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  margin: 0;
}

@media (max-width: 768px) {
  .use-cases {
    padding: 60px 0;
  }
  
  .use-cases-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .use-case-card {
    padding: 2rem;
  }
  
  .use-case-title {
    font-size: 1.1rem;
  }
  
  .use-case-description {
    font-size: 0.9rem;
  }
}
</style>