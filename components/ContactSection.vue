<template>
  <section id="contact" class="flex flex-col items-center justify-center min-h-screen text-center" ref="contactRef" :class="{ 'visible': isVisible }">
    <SectionHeading num="04." title="Contact" class="mb-4" />
    
    <div class="content-fade-up flex flex-col items-center mt-[10vh]">
      <p class="text-[#8892b0] mb-5 text-xl">That's all folks</p>
      
      <h2 class="text-4xl md:text-6xl text-[#ff8c00] font-bold chakra mb-6">
        Get in Touch
      </h2>
      
      <p class="text-[#8892b0] max-w-[600px] mb-8 leading-relaxed text-[16px]">
        If you would love to work with me, collaborate on a project or just say 'Hi'<br/>
        <span class="hidden md:inline">click the links on the <strong class="text-white">sidebar</strong></span>
        <span class="md:hidden">click the button below</span>
      </p>
      
      <a href="mailto:akpananthony33@gmail.com" class="big-btn md:hidden">
        say hello
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionHeading from './SectionHeading.vue'

const contactRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.3 })
  
  if (contactRef.value) {
    observer.observe(contactRef.value)
  }
})
</script>

<style scoped>
.content-fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.visible .content-fade-up {
  opacity: 1;
  transform: translateY(0);
}

:deep(.numbered-heading) {
  margin: 0 auto;
}
</style>