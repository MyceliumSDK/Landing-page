<template>
  <section class="contacts">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Contact us</h2>
        <!-- <p class="section-subtitle fade-in-up">
          Get in touch with our team
        </p> -->
      </div>
      
      <div class="founders-grid">
        <div class="founder-card fade-in-up" v-for="founder in founders" :key="founder.id">
          <div class="founder-avatar">
            <img :src="founder.avatar" :alt="founder.name" />
          </div>
          <div class="founder-info">
            <h3 class="founder-name">{{ founder.name }}</h3>
            <p class="founder-role">{{ founder.role }}</p>
            <p class="founder-bio">{{ founder.bio }}</p>
          </div>
          <div class="founder-contacts">
            <a :href="founder.github" target="_blank" class="contact-link github">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <!-- <a :href="founder.twitter" target="_blank" class="contact-link twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </a> -->
            <a :href="founder.linkedin" target="_blank" class="contact-link linkedin">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a :href="founder.email" class="contact-link email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
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
    name: 'Mike Krupin',
    role: 'Co-Founder & CEO',
    bio: 'Product Growth and Development @Blockscout',
    avatar: 'https://github.com/0xdeval.png',
    github: 'https://github.com/0xdeval',
    // twitter: 'https://twitter.com/mikejohnson',
    linkedin: 'https://linkedin.com/in/mike-krupin/',
    email: 'mailto:myceliumsdk@gmail.com'
  },
  {
    id: 2,
    name: 'Vladimir Sabitov',
    role: 'Co-Founder & CTO',
    bio: 'Full-stack developer specializing in Web3 integrations. Previously at Tezos Baking Bad team.',
    avatar: 'https://github.com/sstark21.png',
    github: 'https://github.com/sstark21',
    // twitter: 'https://twitter.com/sarahchen',
    linkedin: 'https://linkedin.com/in/vladimirsabitov/',
    email: 'mailto:myceliumsdk@gmail.com'
  }
]
</script>

<style scoped>
.contacts {
  padding: 80px 0;
  background: #000000;
}

.section-header {
  margin-bottom: 4rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.founders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.founder-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(119, 0, 255, 0.1) inset;
  transition: all 0.3s ease;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.founder-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 0px 30px 0px rgba(119, 0, 255, 0.2) inset;
  border: 0.5px solid rgba(119, 0, 255, 0.3);
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

.founder-info {
  margin-bottom: 2rem;
}

.founder-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
}

.founder-role {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.founder-bio {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  margin: 0;
}

.founder-contacts {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

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
  .contacts {
    padding: 60px 0;
  }
  
  .founders-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .founder-card {
    padding: 2rem;
  }
  
  .founder-avatar {
    width: 100px;
    height: 100px;
  }
  
  .founder-name {
    font-size: 1.3rem;
  }
  
  .founder-contacts {
    gap: 0.5rem;
  }
  
  .contact-link {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
}
</style>