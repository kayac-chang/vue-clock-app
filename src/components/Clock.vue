<template>
  <Circle>
    <Line direction="left" :rotate="90" />
    <Line direction="right" :rotate="90" />
    <Line direction="up" :rotate="0" />
    <Line direction="down" :rotate="0" />

    <Circle class="w-1/2">
      <Line
        color="red"
        size="lg"
        rounded
        class="-translate-y-1/4 origin-bottom"
        :rotate="360"
      />

      <Line
        color="gray-dark"
        size="md"
        rounded
        class="origin-bottom"
        :rotate="30"
      />
    </Circle>
  </Circle>
</template>

<script setup>
import Line from "./Line.vue";
import Circle from "./Circle.vue";
</script>
