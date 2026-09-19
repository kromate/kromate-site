<template>
  <section class="apps-page">
    <p class="eyebrow">BY ANTHONY AKPAN</p>
    <h1 class="chakra">Apps I've built</h1>
    <p class="introduction">Small tools I use myself, available for you to download and try.</p>
    <p class="directory-summary">
      Send phone videos to your Mac with <a href="/app/wifi-drop">WiFi Drop</a>,
      or manage your Codex accounts from the menu bar with
      <a href="/app/codex-account-switcher">Codex Account Switcher</a>.
    </p>
    <ul class="directory-grid" aria-label="Available apps">
      <li v-for="app in apps" :key="app.id"><AppCard :app="app" /></li>
    </ul>
    <p class="directory-footer">Built for Apple Silicon Macs. Each app page includes its requirements, installation guide, and feedback link.</p>
    <a class="back-link" href="/">Back to my portfolio</a>
  </section>
</template>

<script setup>
import AppCard from '../components/AppCard.vue'
import { apps } from '../composables/apps.js'
</script>

<style scoped>
.apps-page { padding-top: 8rem; padding-bottom: 5rem; }
.eyebrow { color: #ff8c00; font-size: 0.8rem; letter-spacing: 0.15em; margin-bottom: 1rem; }
h1 { color: #ccd6f6; font-size: clamp(2.4rem, 5vw, 4.4rem); line-height: 1.1; margin: 0 0 1.5rem; }
.introduction { font-size: 1.2rem; color: #ccd6f6; line-height: 1.6; }
.directory-summary { max-width: 42rem; line-height: 1.8; color: #a7adc4; margin: 1rem 0 3rem; }
a { color: #ff8c00; text-underline-offset: 4px; }
a:focus-visible { outline: 2px solid #ccd6f6; outline-offset: 4px; }
.directory-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); list-style: none; gap: 1.5rem; padding: 0; margin: 0; }
.directory-grid > li { min-width: 0; }
.directory-footer { color: #a7adc4; font-size: 0.9rem; line-height: 1.7; margin: 2rem 0; }
.back-link { display: inline-block; padding: 0.5rem 0; }
@media(max-width: 680px) { .directory-grid { grid-template-columns: minmax(0, 1fr); } .apps-page { padding-top: 7rem; } }
</style>
