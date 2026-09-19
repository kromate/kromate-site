<template>
  <section id="hero" class="flex flex-col items-start justify-center min-h-screen pt-20" ref="heroSection">
    <div class="sm:leading-[5rem] leading-[3rem]">
      <h1 class="animate-fade-up text-xl text-[#ff8c00] chakra font-medium" style="animation-delay: 3.35s">Hi, my name is</h1>
      <h2 class="animate-fade-up text-[clamp(40px,8.8vw,60px)] font-bold text-[#ccd6f6] mt-2 leading-none" style="animation-delay: 3.60s">Anthony Akpan.</h2>
      <h3 class="animate-fade-up text-[clamp(40px,8.8vw,60px)] font-bold text-[#8892b0] mt-2 leading-none" style="animation-delay: 3.85s">I solve problems and create magic.</h3>
    </div>
    <p class="animate-fade-up text-[#8892b0] max-w-[540px] mt-5 text-[16px] leading-relaxed" style="animation-delay: 4.10s">
      I'm a software engineer specialized in building Frontend applications, occasionally backend and rarely design. I take pride in my work and ensure I deliver the fastest, most accessible and most responsive application possible.
    </p>
    <div class="animate-fade-up mt-12" style="animation-delay: 4.35s">
      <a href="https://docs.google.com/document/d/1trkAjxyYv9xF7cXyCfz2BebI3CnuZmhlSsHeRf9_fyQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="big-btn">
        Resume
      </a>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
}

@media (max-width: 768px) {
  .animate-fade-up {
    animation-delay: calc(var(--mobile-delay, 2s) + 0.25s) !important;
  }
  h1 { animation-delay: 2.0s !important; }
  h2 { animation-delay: 2.25s !important; }
  h3 { animation-delay: 2.5s !important; }
  p { animation-delay: 2.75s !important; }
  div.mt-12 { animation-delay: 3.0s !important; }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>