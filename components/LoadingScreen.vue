<template>
	<div class="fixed inset-0 h-screen w-screen z-[100]" v-if="show">
		<div class="center h-screen w-screen bg-[#211e25] logo-container !bg-black flex items-center justify-center">
			<div class="relative flex items-center justify-center text-white pos text-7xl">
				<img src="/images/border.svg" alt="border" class="logo-border absolute w-40 rotate-45" />
				<span class="p-10 font-semibold chakra z-10">K</span>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
import { scrollControl } from "../composables/controls.js";

const show = ref(true);

onMounted(() => {
	const { enableScroll, disableScroll } = scrollControl();
    disableScroll(); // Ensure scroll is disabled initially
	
    setTimeout(() => {
		show.value = false;
		enableScroll();
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