<template>
  <div class="main-content">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <AppsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AppsSection from '../components/AppsSection.vue'
import ContactSection from '../components/ContactSection.vue'
</script>

<style scoped>
.main-content {
  counter-reset: section;
}
</style>
