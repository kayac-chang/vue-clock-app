<template>
  <div
    :class="[
      'rounded-full',
      'flex justify-center items-center',
      'aspect-square solid',
      'relative',
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}

.solid {
  box-shadow: -4px -2px 16px #ffffff, 4px 2px 16px rgba(136, 165, 191, 0.48);
}
</style>
