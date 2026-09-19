<template>
  <div class="min-h-screen bg-[#211e25] text-[#8892b0] font-roboto selection:bg-[#ff8c001e] selection:text-[#ccd6f6]">
    <LoadingScreen v-if="$route.path === '/'" />
    <MobileNav />
    <LeftSidebar />
    <RightSidebar />
    <main id="content" class="px-2 md:px-24 lg:px-36 xl:px-48 max-w-[1600px] mx-auto min-h-screen">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { pageSeo } from './composables/pageSeo.js'
import LoadingScreen from './components/LoadingScreen.vue'
import MobileNav from './components/MobileNav.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import RightSidebar from './components/RightSidebar.vue'
import { scrollpsy, topBarScroll } from './composables/controls'

const route = useRoute()

function updateMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }
  element.setAttribute('content', content)
}

watch(() => route.path, (path) => {
  if (typeof document === 'undefined') return
  const normalizedPath = path.replace(/\/$/, '') || '/'
  const metadata = pageSeo[normalizedPath]
  if (!metadata) return
  const canonicalUrl = new URL(normalizedPath, 'https://kromate.dev').href
  document.title = metadata.title
  updateMeta('name', 'description', metadata.description)
  for (const [key, value] of Object.entries({ title: metadata.title, description: metadata.description, image: metadata.image, url: canonicalUrl })) {
    updateMeta('property', `og:${key}`, value)
  }
  for (const [key, value] of Object.entries({ title: metadata.title, description: metadata.description, image: metadata.image, card: 'summary_large_image' })) {
    updateMeta('name', `twitter:${key}`, value)
  }
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.append(canonical)
  }
  canonical.href = canonicalUrl
}, { immediate: true })

onMounted(() => {
  // Initialize scroll controls when the app mounts
  scrollpsy();
  topBarScroll();
})
</script>

<style>
@import './css/global.css';

.font-roboto {
  font-family: 'Roboto', sans-serif;
}
</style>