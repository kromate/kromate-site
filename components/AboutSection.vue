<template>
  <section id="about" class="min-h-screen pt-24" ref="aboutRef" :class="{ 'visible': isVisible }">
    <SectionHeading num="01." title="About Me" />

    <div
      class="inner items-start justify-items-end content-fade-up grid md:grid-cols-[3fr_2fr] gap-12"
    >
      <div class="styledText text-[#8892b0] leading-relaxed text-[16px]">
        <div>
          <p class="mb-4">
            Ohayo! 👋🏾 My name is Anthony Akpan. I am a Frontend Engineer who loves building crazy ideas and trying out new things. I got into programming in 2017 when I found a Python e-book and then switched from Python to Web Development in 2018.
          </p>

          <p class="mb-6">
            Over the years, I have had the opportunity to work with amazing companies and people, and on diverse projects.
            <br />I recently started a
            <a
              href="https://www.youtube.com/c/Kromate_24"
              class="text-[#ff8c00] transition-colors hover:text-[#ccd6f6]"
              target="_blank"
              rel="noopener noreferrer"
              >YouTube channel</a
            >
            which is focused on documenting my Passion Projects (open source projects I work on) and my journey in tech. <br />When I am not writing code, I am usually binging an anime/TV series. <br />PS: I looove One Piece. It's all you want in an anime (interesting and non-ending😂).
          </p>
        </div>

        <p class="italic my-3 chakra text-[#ff8c00]">
          Below are a list of my tools and languages
        </p>
        <ul class="flex items-center gap-2 flex-wrap">
          <li v-for="skill in skills" :key="skill" class="pill inline">{{ skill }}</li>
        </ul>
      </div>

      <div class="flex flex-col gap-4 mt-1 md:mt-0 items-center md:items-start">
        <div class="relative group">
          <div class="absolute inset-0 border-2 border-[#ff8c00] rounded-md translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>
          <img
            class="img w-[270px] rounded-md filter grayscale hover:grayscale-0 transition-all duration-300 relative z-10 bg-[#211e25]"
            src="https://firebasestorage.googleapis.com/v0/b/goalmatics.firebasestorage.app/o/sites%2F12ce3127-ff9d-45b4-967e-0acf4d68f71d%2Fassets%2Fimage%2068.png?alt=media&token=6bf3e3d5-eade-4259-8a1f-01bed9c341d2"
            alt="Headshot"
          />
        </div>
      
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionHeading from './SectionHeading.vue'

const skills = [
  'Javascript',
  'Vue & Vuex',
  'Ionic',
  'React',
  'Python',
  'Tensorflow.js',
  'Figma',
  'Adobe XD',
  'Android Studio',
  'Firebase',
  'Mongodb',
  'WebSockets',
  'WebRTC',
  'Animations',
  'APIs',
  'plugins',
  'chrome extensions',
  'Testing (unit and E2E)',
  'System Design',
]

const aboutRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.2 })
  
  if (aboutRef.value) {
    observer.observe(aboutRef.value)
  }
})
</script>

<style scoped>
#about {
  color: var(--secondary);
}

.pill {
  background-color: #2f293ae8;
  border: 1px solid #8892b0;
  border-radius: 4px;
  color: #ccd6f6;
  font-size: 12px;
  padding: 6px 10px;
}

@media (max-width: 768px) {
  .inner {
    @apply flex flex-col justify-center items-center;
  }
}

.content-fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.visible .content-fade-up {
  opacity: 1;
  transform: translateY(0);
}
</style>