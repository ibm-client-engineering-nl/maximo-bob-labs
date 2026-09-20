<script setup>
defineProps({
  cols: { type: [String, Number], default: 3 }
})
</script>

<template>
  <div class="card-grid" :style="{ '--card-cols': cols }">
    <slot />
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(var(--card-cols), minmax(0, 1fr));
  gap: 16px;
  margin: 16px 0;
}
@media (max-width: 768px) {
  .card-grid { grid-template-columns: 1fr; }
}
</style>
