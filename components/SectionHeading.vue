<template>
  <h2 class="numbered-heading chakra" :data-num="num">
    {{ title }}
  </h2>
</template>

<script setup>
defineProps({
  num: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.numbered-heading {
  align-items: center;
  background: #000;
  border: 1px solid var(--secondary);
  color: var(--white);
  display: flex;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  margin: 10px 0 40px;
  padding: 2px 20px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.numbered-heading::before {
  bottom: 0;
  color: var(--orange);
  content: attr(data-num);
  font-size: clamp(26px, 7vw, var(--fz-xxl));
  font-weight: 400;
  margin-right: 10px;
  position: relative;
}

@media (max-width: 480px) {
  .numbered-heading::before {
    margin-bottom: -3px;
    margin-right: 5px;
  }
}
</style>