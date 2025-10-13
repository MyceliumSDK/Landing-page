<template>
  <section class="section" id="contacts">
    <div class="container">
      <h2 class="section-title">Contact us</h2>

      <div class="founders-grid">
        <div
          class="card fade-in-up"
          v-for="founder in founders"
          :key="founder.id"
        >
          <div class="founder-avatar">
            <img :src="founder.avatar" :alt="founder.name" />
          </div>
          <h3 class="card-title">{{ founder.name }}</h3>
          <p class="founder-role">{{ founder.role }}</p>
          <div class="founder-bio-container">
            <p class="card-description">{{ founder.bio }}</p>
            <div class="founder-contacts">
              <a
                :href="founder.github"
                target="_blank"
                class="contact-link github"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path :d="icons.github" />
                </svg>
                <span class="contact-link-text">GitHub</span>
              </a>
              <a
                :href="founder.linkedin"
                target="_blank"
                class="contact-link linkedin"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path :d="icons.linkedin" />
                </svg>
                <span class="contact-link-text">LinkedIn</span>
              </a>
              <a
                :href="founder.telegram"
                target="_blank"
                class="contact-link telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path :d="icons.telegram" />
                </svg>
                <span class="contact-link-text">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const founders = [
  {
    id: 1,
    name: "Mike Krupin",
    role: "Co-Founder & CEO",
    bio: "Product at @Blockscout",
    avatar: "https://github.com/0xdeval.png",
    github: "https://github.com/0xdeval",
    telegram: "https://t.me/maikyman",
    linkedin: "https://linkedin.com/in/mike-krupin/",
  },
  {
    id: 2,
    name: "Vladimir Sabitov",
    role: "Co-Founder & CTO",
    bio: "Full-stack dev at @tezos",
    avatar: "https://github.com/sstark21.png",
    github: "https://github.com/sstark21",
    telegram: "https://t.me/vladimir_kotkot",
    linkedin: "https://linkedin.com/in/vladimirsabitov/",
  },
];

const icons = {
  github:
    "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  telegram:
    "M21.2647 1.42778C20.98 1.19091 20.6364 1.03567 20.2704 0.978584C19.9045 0.921494 19.5299 0.964688 19.1866 1.10357L1.26566 8.33892C0.88241 8.4966 0.556176 8.76711 0.33026 9.11454C0.104343 9.46196 -0.0105725 9.86988 0.000764965 10.2841C0.0121025 10.6984 0.149157 11.0994 0.393738 11.434C0.638319 11.7685 0.978859 12.0208 1.37016 12.1573L4.99516 13.418L7.01566 20.0997C7.04312 20.1889 7.08297 20.2739 7.13404 20.352C7.14179 20.364 7.15272 20.373 7.16096 20.3846C7.21996 20.467 7.29127 20.5397 7.37239 20.6004C7.39546 20.618 7.41755 20.6345 7.44221 20.6501C7.53714 20.7131 7.64228 20.7591 7.75294 20.7862L7.76478 20.7872L7.77149 20.7901C7.83802 20.8036 7.90574 20.8105 7.97364 20.8106C7.98017 20.8106 7.98597 20.8074 7.99244 20.8073C8.0949 20.8055 8.19647 20.7879 8.29353 20.755C8.31611 20.7473 8.33546 20.7345 8.35737 20.7252C8.42975 20.6952 8.49832 20.6567 8.56166 20.6106C8.61238 20.5679 8.66312 20.5251 8.71388 20.4824L11.416 17.4991L15.4463 20.6211C15.8011 20.8974 16.2379 21.0475 16.6875 21.0479C17.1587 21.0473 17.6154 20.8847 17.9809 20.5874C18.3465 20.2901 18.5987 19.8762 18.6954 19.4151L21.958 3.39849C22.032 3.03801 22.0065 2.66421 21.8844 2.31708C21.7623 1.96995 21.5481 1.66255 21.2647 1.42778ZM8.37016 13.7364C8.2315 13.8745 8.13672 14.0505 8.0977 14.2422L7.78819 15.7462L7.00413 13.1532L11.0694 11.0362L8.37016 13.7364ZM16.6719 19.0401L11.9092 15.3506C11.71 15.1966 11.46 15.1234 11.2092 15.1455C10.9583 15.1675 10.725 15.2833 10.5557 15.4697L9.69029 16.4249L9.99613 14.9385L17.0791 7.85549C17.2482 7.68665 17.3512 7.46285 17.3695 7.22461C17.3878 6.98638 17.3201 6.74947 17.1788 6.55681C17.0375 6.36414 16.8319 6.22845 16.5992 6.17433C16.3664 6.1202 16.122 6.15121 15.9102 6.26174L5.74491 11.5544L2.02055 10.1915L19.999 2.99905L16.6719 19.0401Z",
};
</script>

<style scoped>
.founders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
}

.card-title {
  margin-bottom: 0.3rem;
}

.founder-bio-container {
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.founder-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 3px solid rgba(119, 0, 255, 0.3);
  box-shadow: 0 0 30px rgba(119, 0, 255, 0.2);
}

.founder-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder-role {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 1rem;
  font-family: var(--font-family);
}

.founder-contacts {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.contact-link {
  display: flex;
  align-items: center;
  color: #fff;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.contact-link:hover {
  transform: translateY(-2px);
  border: 1px solid rgba(119, 0, 255, 0.3);
  background: rgba(119, 0, 255, 0.1);
}

@media (max-width: 768px) {
  .founders-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .founder-avatar {
    width: 100px;
    height: 100px;
  }

  .founder-contacts {
    gap: 0.5rem;
  }

  .contact-link {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
  .contact-link-text {
    display: none;
  }
}
</style>
