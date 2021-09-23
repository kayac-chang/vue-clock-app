<template>
  <div
    :class="[
      'rounded-full',
      'flex justify-center items-center',
      'aspect-square shadow',
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
</style>
