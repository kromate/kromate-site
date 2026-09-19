<template>
  <section id="apps" class="apps-section flex flex-col pt-24">
    <SectionHeading num="04." title="Apps I've built" />
    <p class="apps-intro">
      Small apps I built and use. Download one, try it, and tell me what could work better.
    </p>

    <ul class="apps-grid" aria-label="Apps available to download and test">
      <li v-for="app in apps" :key="app.id">
        <AppCard :app="app" />
      </li>
    </ul>
    <a href="/apps" class="all-apps-link">See all apps <span aria-hidden="true">→</span></a>
  </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
import AppCard from './AppCard.vue'
import { apps } from '../composables/apps'
</script>

<style scoped>
.apps-section {
  scroll-margin-top: 4rem;
}

.apps-intro {
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.7;
  margin: -0.75rem 0 3rem;
  max-width: 42rem;
}

.apps-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.all-apps-link {
  align-items: center;
  color: #ff8c00;
  display: inline-flex;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 700;
  gap: 0.5rem;
  margin: 2rem 0 5rem;
  text-decoration: none;
}

.all-apps-link:hover {
  color: #ccd6f6;
}

.all-apps-link:focus-visible {
  outline: 2px solid #ccd6f6;
  outline-offset: 3px;
}

@media (max-width: 640px) {
  .apps-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
