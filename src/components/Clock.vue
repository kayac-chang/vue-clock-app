<template>
  <Circle>
    <Line direction="left" />
    <Line direction="right" />
    <Line direction="up" />
    <Line direction="down" />

    <Circle class="w-1/2">
      <Line color="red" size="lg" class="rounded-full -translate-y-1/4" />
      <Line color="gray-dark" size="md" class="rounded-full" />
    </Circle>
  </Circle>
</template>

<script setup>
import Line from "./Line.vue";
import Circle from "./Circle.vue";
</script>
