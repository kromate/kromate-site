<template>
	<div class="fixed inset-0 h-screen w-screen z-[100]" v-if="show">
		<div class="center h-screen w-screen bg-[#211e25] logo-container !bg-black flex items-center justify-center">
			<div class="relative flex items-center justify-center text-white pos text-7xl">
				<svg aria-hidden="true" class="logo-border absolute w-40 h-40 rotate-45" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="59" width="5" height="22" transform="rotate(-90 1 59)" fill="white" stroke="white" stroke-width="2" />
    <rect x="6" y="59" width="5" height="22" transform="rotate(180 6 59)" fill="white" stroke="white" stroke-width="2" />
    <rect x="1" y="1" width="5" height="22" fill="white" stroke="white" stroke-width="2" />
    <rect x="1" y="6" width="5" height="22" transform="rotate(-90 1 6)" fill="white" stroke="white" stroke-width="2" />
    <rect x="37" y="59" width="5" height="22" transform="rotate(-90 37 59)" fill="white" stroke="white" stroke-width="2" />
    <rect x="54" y="37" width="5" height="22" fill="white" stroke="white" stroke-width="2" />
    <rect x="59" y="23" width="5" height="22" transform="rotate(180 59 23)" fill="white" stroke="white" stroke-width="2" />
    <rect x="37" y="6" width="5" height="22" transform="rotate(-90 37 6)" fill="white" stroke="white" stroke-width="2" />
</svg>
				<span class="p-10 font-semibold chakra z-10">K</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, nextTick } from "vue";
import { scrollControl } from "../composables/controls.js";

const show = ref(true);

onMounted(() => {
	const { enableScroll, disableScroll } = scrollControl();
    disableScroll(); // Ensure scroll is disabled initially
	
    setTimeout(() => {
		show.value = false;
		enableScroll();
        nextTick(() => {
            const section = document.getElementById(window.location.hash.slice(1));
            section?.scrollIntoView({ behavior: "instant" });
        });
	}, 2500);
});
</script>

<style scoped>
	.logo-container {
		animation: fade 0.67s 2s 1 forwards;
	}

	.logo-border {
		animation: spin 1.5s 1;
	}

	.pos {
		animation: fadeScale 0.5s 1.5s 1 forwards;
	}

	@keyframes fade {
		from {
			opacity: 1;
			display: flex;
		}

		to {
			opacity: 0;
			display: none;
			z-index: -1;
		}
	}

	@keyframes fadeScale {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
			display: none;
			transform: scale(0.2);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(45deg) scale(1);
		}

		50% {
			transform: rotate(135deg) scale(1.5);
		}

		100% {
			transform: rotate(225deg) scale(1);
		}
	}
</style>