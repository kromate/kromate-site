<template>
  <article class="app-card">
    <div class="app-card-header">
      <div class="app-icon" aria-hidden="true">
        <svg v-if="app.id === 'wifi-drop'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 20a24 24 0 0 1 32 0" />
          <path d="M13.5 26a16 16 0 0 1 21 0" />
          <path d="M19 32a8 8 0 0 1 10 0" />
          <circle cx="24" cy="38" r="1.75" fill="currentColor" stroke="none" />
          <path d="M31 12h9v9" />
          <path d="m40 12-12 12" />
        </svg>
        <svg v-else viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="17" cy="18" r="7" />
          <path d="M5 39c1.5-7 6-11 12-11s10.5 4 12 11" />
          <path d="M34 15h9v9" />
          <path d="m43 15-9 9" />
          <path d="M43 33h-9v-9" />
          <path d="m34 33 9-9" />
        </svg>
      </div>
      <span class="app-kind">{{ app.kind }}</span>
    </div>

    <div>
      <p class="app-platform">{{ app.platform }}</p>
      <h2 class="chakra"><a :href="`/app/${app.id}`">{{ app.name }}</a></h2>
      <p class="app-summary">{{ app.summary }}</p>
    </div>

    <a :href="`/app/${app.id}`" class="view-app-link" :aria-label="`View ${app.name} details`">
      View app details
      <span aria-hidden="true">→</span>
    </a>
  </article>
</template>

<script setup>
defineProps({
  app: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.app-card {
  background: #2f293ae8;
  border: 1px solid rgba(136, 146, 176, 0.25);
  box-shadow: 0 10px 30px -15px #211e25;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
  padding: 2rem 1.75rem;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.app-card:hover {
  border-color: #ff8c00;
  transform: translateY(-4px);
}

.app-card-header {
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.app-icon {
  color: #ff8c00;
  flex: 0 0 auto;
  height: 3rem;
  width: 3rem;
}

.app-icon svg {
  height: 100%;
  width: 100%;
}

.app-kind,
.app-platform {
  color: #8892b0;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  margin: 0;
  text-transform: uppercase;
}

.app-card h2 {
  color: #ccd6f6;
  font-size: clamp(1.4rem, 3vw, 1.7rem);
  line-height: 1.2;
  margin: 0.45rem 0 0.75rem;
}

.app-summary {
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.view-app-link {
  align-items: center;
  color: #ff8c00;
  display: inline-flex;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  gap: 0.5rem;
  margin-top: auto;
  text-decoration: none;
}

.view-app-link:hover {
  color: #ccd6f6;
}

.view-app-link:focus-visible {
  outline: 2px solid #ccd6f6;
  outline-offset: 4px;
}

@media (max-width: 640px) {
  .app-card {
    padding: 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .app-card {
    transition: none;
  }

  .app-card:hover {
    transform: none;
  }
}
.app-card h2 a { color: inherit; text-decoration: none; }
.app-card h2 a:hover { color: #ff8c00; }
</style>
