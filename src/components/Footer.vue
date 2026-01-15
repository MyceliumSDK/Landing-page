<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-bottom">
        <p class="footer-copyright">
          © 2026 Mycelium SDK. All rights reserved.
        </p>
        <div class="footer-legal">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #fff;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
}

.footer-description {
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #3b82f6;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #b0b0b0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #3b82f6;
  color: #fff;
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-copyright {
  color: #b0b0b0;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-legal {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
