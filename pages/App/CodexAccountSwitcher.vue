<template>
  <AppDetails :app="app">
    <template #intro>
      <p class="app-kind">MACOS MENU BAR UTILITY</p>
      <h1 class="chakra" itemprop="name">Codex Account Switcher</h1>
      <p class="app-description" itemprop="description">Switch saved Codex accounts from your Mac's menu bar and check each account's plan, remaining usage, and reset times. An independent utility for Apple Silicon Macs running macOS 14 or later.</p>
      <p class="app-intro-note">Free download. Requires Codex and your own accounts. <a href="https://github.com/kromate/codex-account-switcher/releases/tag/v3.0.0" target="_blank" rel="noopener noreferrer">See the Codex Account Switcher 3.0 release</a>.</p>
    </template>
  </AppDetails>
</template>

<script setup>
import AppDetails from '../../components/AppDetails.vue'
import { getAppById } from '../../composables/apps.js'
const app = getAppById('codex-account-switcher')
</script>
