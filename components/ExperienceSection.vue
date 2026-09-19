<template>
  <section id="experience" class="min-h-screen pt-24" ref="expRef" :class="{ 'visible': isVisible }">
    <SectionHeading num="02." title="My Experience" />
    <div class="relative mt-14 content-fade-up">
      <div
        class="absolute z-0 border-r border-[#ff8c00] left-[15px] md:left-[31px] top-14 bottom-14"
      ></div>
      <div class="relative z-10 flex flex-col gap-4">
        <div
          class="flex items-center gap-2 md:gap-10 group"
          v-for="(experience, n) in experiences"
          :key="n"
        >
          <div class="card-circle transition-all duration-300 group-hover:bg-[#ff8c00] group-hover:text-[#211e25] group-hover:border-[#ff8c00]">
            {{ String(n).padStart(2, '0') }}
          </div>
          <div class="card transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1">
            <div class="flex items-center gap-4 md:gap-10">
              <div>
                <div class="text-[#ccd6f6] opacity-90 font-medium md:text-xl">
                  {{ experience.title }}
                  <span v-if="experience.link">
                    (
                    <a
                      :href="experience.link.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="font-bold text-[#ff8c00] hover:underline"
                      >{{ experience.link.name }}</a
                    >
                    )
                  </span>
                </div>
                <div
                  class="mt-2 text-sm md:text-base text-[#8892b0] leading-relaxed desc"
                  v-html="experience.desc"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionHeading from './SectionHeading.vue'
import { experiences } from '../composables/experiences'

const expRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.1 })
  
  if (expRef.value) {
    observer.observe(expRef.value)
  }
})
</script>

<style scoped>
@import '../css/experience.css';

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

<style>
.desc a {
  @apply text-[#ff8c00];
}
</style>