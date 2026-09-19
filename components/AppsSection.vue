<template>
  <section id="apps" class="apps-section flex flex-col pt-24">
    <SectionHeading num="04." title="Apps I've built" />
    <p class="apps-intro">
      Small apps I built and use. Download one, try it, and tell me what could work better.
    </p>

    <ul class="apps-grid" aria-label="Apps available to download and test">
      <li v-for="app in apps" :key="app.name" class="app-card">
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
          <h3 class="chakra">{{ app.name }}</h3>
          <p class="app-description">{{ app.description }}</p>
        </div>

        <div class="app-requirements">
          <p class="requirements-label">You’ll need</p>
          <ul>
            <li v-for="requirement in app.requirements" :key="requirement">{{ requirement }}</li>
          </ul>
        </div>

        <div class="app-actions">
          <a :href="app.downloadUrl" class="download-link" target="_blank" rel="noopener noreferrer">
            {{ app.downloadLabel }}
            <span aria-hidden="true">↗</span>
          </a>
          <div class="app-secondary-links">
            <a :href="app.repositoryUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a :href="app.installUrl" target="_blank" rel="noopener noreferrer">Install guide</a>
            <a :href="app.issuesUrl" target="_blank" rel="noopener noreferrer">Feedback</a>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'

const apps = [
  {
    id: 'wifi-drop',
    name: 'WiFi Drop',
    kind: 'LOCAL FILE TRANSFER',
    description: 'Move large videos and files between your phone and laptop on the same Wi-Fi. Open the transfer page in your phone browser and send files directly across your local network.',
    requirements: ['Apple Silicon Mac', 'macOS', 'Phone and laptop on the same Wi-Fi'],
    downloadLabel: 'Download for Apple Silicon macOS',
    downloadUrl: 'https://github.com/kromate/wifi-drop/releases/latest/download/WiFi-Drop-macOS-Apple-Silicon.zip',
    repositoryUrl: 'https://github.com/kromate/wifi-drop',
    installUrl: 'https://github.com/kromate/wifi-drop#readme',
    issuesUrl: 'https://github.com/kromate/wifi-drop/issues'
  },
  {
    id: 'codex-account-switcher',
    name: 'Codex Account Switcher',
    kind: 'MENU BAR UTILITY',
    description: 'An independent macOS menu bar utility for switching saved Codex accounts and checking each account’s plan, remaining usage, and reset times.',
    requirements: ['Apple Silicon Mac with macOS 14 or later', 'Codex installed', 'Your own Codex accounts'],
    downloadLabel: 'Download for Apple Silicon macOS',
    downloadUrl: 'https://github.com/kromate/codex-account-switcher/releases/latest/download/Codex-Account-Switcher-macOS-Apple-Silicon.zip',
    repositoryUrl: 'https://github.com/kromate/codex-account-switcher',
    installUrl: 'https://github.com/kromate/codex-account-switcher#readme',
    issuesUrl: 'https://github.com/kromate/codex-account-switcher/issues'
  }
]
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
  margin: 0 0 5rem;
  padding: 0;
}

.app-card {
  background: #2f293ae8;
  border: 1px solid rgba(136, 146, 176, 0.25);
  box-shadow: 0 10px 30px -15px #211e25;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  justify-content: space-between;
  gap: 1rem;
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
.requirements-label {
  color: #8892b0;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  margin: 0;
}

.app-card h3 {
  color: #ccd6f6;
  font-size: clamp(1.4rem, 3vw, 1.7rem);
  line-height: 1.2;
  margin: 0 0 0.75rem;
}

.app-description {
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.app-requirements {
  border-left: 2px solid #ff8c00;
  padding-left: 0.9rem;
}

.app-requirements ul {
  color: #ccd6f6;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.82rem;
  gap: 0.4rem 0.75rem;
  line-height: 1.5;
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
}

.app-requirements li::before {
  color: #ff8c00;
  content: '•';
  margin-right: 0.35rem;
}

.app-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.download-link {
  align-items: center;
  background: #ff8c00;
  color: #211e25;
  display: inline-flex;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  gap: 0.5rem;
  justify-content: center;
  letter-spacing: 0.03em;
  min-height: 2.75rem;
  padding: 0.7rem 1rem;
  text-align: center;
  text-decoration: none;
}

.download-link:hover {
  background: #ccd6f6;
}

.app-secondary-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
}

.app-secondary-links a {
  color: #ccd6f6;
  font-size: 0.85rem;
  text-decoration: none;
}

.app-secondary-links a:hover {
  color: #ff8c00;
}

.app-card a:focus-visible {
  outline: 2px solid #ccd6f6;
  outline-offset: 3px;
}

@media (max-width: 640px) {
  .apps-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .app-card {
    padding: 1.5rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .app-card { transition: none; }
  .app-card:hover { transform: none; }
}
</style>
