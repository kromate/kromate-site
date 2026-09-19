<template>
  <div class="min-h-screen bg-[#211e25] text-[#8892b0] font-roboto selection:bg-[#ff8c001e] selection:text-[#ccd6f6]">
    <LoadingScreen />
    <MobileNav />
    <LeftSidebar />
    <RightSidebar />
    <main id="content" class="px-2 md:px-24 lg:px-36 xl:px-48 max-w-[1600px] mx-auto min-h-screen">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import MobileNav from './components/MobileNav.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import RightSidebar from './components/RightSidebar.vue'
import { scrollpsy, topBarScroll } from './composables/controls'

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