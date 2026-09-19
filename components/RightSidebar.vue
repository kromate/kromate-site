<template>
  <nav
    aria-label="site navigation"
    class="fixed right-0 bottom-0 top-0 hidden md:flex flex-col items-center justify-between border-l border-[#8892b0] z-20 w-[60px] pb-10 pt-5 opacity-0 animate-fade-in-slide-left chakra"
  >
    <ul class="flex flex-col gap-6 pt-4 links items-center">
      <li class="nav-link">
        <a href="#about" @click.prevent="scrollToSection('about')" class="hover:text-[#ff8c00] transition-all duration-300">About</a>
      </li>
      <li class="nav-link">
        <a href="#experience" @click.prevent="scrollToSection('experience')" class="hover:text-[#ff8c00] transition-all duration-300">Experience</a>
      </li>
      <li class="nav-link">
        <a href="#works" @click.prevent="scrollToSection('works')" class="hover:text-[#ff8c00] transition-all duration-300">Work</a>
      </li>
      <li class="nav-link">
        <a href="#contact" @click.prevent="scrollToSection('contact')" class="hover:text-[#ff8c00] transition-all duration-300">Contact</a>
      </li>
      <li class="nav-link">
        <a href="https://blog.kromate.dev" target="_blank" class="hover:text-[#ff8c00] transition-all duration-300 font-bold">Blog</a>
      </li>
    </ul>

    <div class="mt-auto flex flex-col items-center gap-10">
      <a class="nav-link mail-link hover:text-[#ff8c00] transition-all duration-300 tracking-widest" href="mailto:akpananthony33@gmail.com">
        akpananthony33@gmail.com
      </a>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import { scrollpsy } from '../composables/controls'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Initialize scrollspy for navigation links
  scrollpsy()
})
</script>

<style scoped>
.animate-fade-in-slide-left {
  animation: fadeInSlideLeft 0.5s ease-out 1.75s forwards;
}

@keyframes fadeInSlideLeft {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav-link {
  display: block;
}

.nav-link a {
  writing-mode: vertical-rl;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 14px;
  letter-spacing: 0.1em;
}

.mail-link {
  writing-mode: vertical-rl;
}

.links .nav-link:not(:first-child) {
  padding-top: 20px;
}

.links a:hover {
  transform: translateY(-3px);
}
</style>