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
        :rotate="minutes"
      />

      <Line
        color="gray-dark"
        size="md"
        rounded
        class="origin-bottom"
        :rotate="hours"
      />
    </Circle>
  </Circle>
</template>

<script setup>
import Line from "./Line.vue";
import Circle from "./Circle.vue";
import { inject } from "vue";

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function deg(value) {
  return lerp(0, 360, value);
}

/**@type {Date} */
const time = inject("time");

const hours = deg(time.getHours() / 12);
const minutes = deg(time.getMinutes() / 60);
</script>
