<template>
  <section id="works" class="flex flex-col min-h-screen pt-24">
    <SectionHeading num="03." title="my projects" />
    <p class="text-[#8892b0] mb-12 -mt-3">
      There are about <span class="text-[#ff8c00] text-xl font-bold">{{ projectsArr.length }}</span> projects listed here and counting 👍🏾
    </p>

    <transition-group
      appear
      name="staggered-list"
      tag="ul"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[15px] mb-12"
    >
      <li
        v-for="(project, index) in projects"
        :key="project.name"
        :style="{ '--index': index }"
        class="staggered-item h-full"
      >
        <div class="card bg-[#2f293ae8] rounded-sm hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_-15px_#211e25] h-full flex flex-col justify-between">
          <header class="w-full">
            <div class="flex items-center justify-between w-full mb-6">
              <!-- Folder Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-[#ff8c00]">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div class="flex items-center gap-3.5">
                <a 
                  v-for="link in project.links" 
                  :key="link.url"
                  :href="link.url" 
                  class="text-[#8892b0] hover:text-[#ff8c00] transition-all duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <!-- Redirect Icon -->
                  <svg v-if="link.name === 'live'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <!-- Github Icon -->
                  <svg v-if="link.name === 'github'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>

            <h3 class="text-white font-semibold text-2xl mb-2 chakra">
              {{ project.name }}
            </h3>
            <p class="text-[#8892b0] text-[15px] leading-relaxed">
              {{ project.desc }}
            </p>
          </header>
          <footer class="flex gap-2 mt-5 flex-wrap">
            <span class="pill !py-1" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </footer>
        </div>
      </li>
    </transition-group>

    <div class="flex justify-center mt-12 mb-20">
      <button v-if="showMoreValue" class="big-btn w-auto" @click="showMore">
        Show More
      </button>
      <button v-else class="big-btn w-auto" @click="showLess">
        Show Less
      </button>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
import { projects, showMore, showMoreValue, showLess, projectsArr } from '../composables/projects'
</script>

<style scoped>
ul {
	list-style: none;
	padding: 0px;
	margin: 50px 0px 0px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 15px;
	position: relative;
}
.card {
	box-shadow: 0 10px 30px -15px var(--primary);
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	height: 100%;
	padding: 2rem 1.75rem;
	overflow: auto;
}
.pill {
  background-color: #2f293ae8;
  border: 1px solid #8892b0;
  border-radius: 4px;
  color: #ccd6f6;
  font-size: 12px;
  padding: 6px 10px;
  text-align: center;
}

.big-btn {
  background-color: transparent;
  color: #ff8c00;
  border: 1px solid #ff8c00;
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.big-btn:hover {
  background-color: #ff8c001e;
  outline: none;
}

/* Staggered entry animation */
.staggered-item {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  animation-delay: calc(var(--index) * 0.1s);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Transition Group classes */
.staggered-list-enter-active,
.staggered-list-leave-active {
  transition: all 0.5s ease;
}

.staggered-list-enter-from,
.staggered-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>