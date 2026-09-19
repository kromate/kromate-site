<template>
  <AppDetails :app="app">
    <template #intro>
      <p class="app-kind">LOCAL FILE TRANSFER</p>
      <h1 class="chakra" itemprop="name">WiFi Drop</h1>
      <p class="app-description" itemprop="description">Transfer large videos and files between your phone and Mac over the same Wi-Fi. Your phone connects through its browser, with no cloud upload or phone app to install.</p>
      <p class="app-intro-note">Free download for Apple Silicon Macs. <a href="https://github.com/kromate/wifi-drop/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">See the WiFi Drop 1.0.0 release</a>.</p>
    </template>
  </AppDetails>
</template>

<script setup>
import AppDetails from '../../components/AppDetails.vue'
import { getAppById } from '../../composables/apps.js'
const app = getAppById('wifi-drop')
</script>
