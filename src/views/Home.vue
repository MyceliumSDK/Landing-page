<template>
  <div class="home">
    <HeroSection />
    <FeaturesSection />
    <StatsSection />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import CTASection from '@/components/sections/CTASection.vue'
</script>

<style scoped>
.home {
  padding-top: 80px; /* Отступ для фиксированного header */
}
</style>
