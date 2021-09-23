<template>
  <Circle>
    <Line direction="left" :rotate="90" />
    <Line direction="right" :rotate="270" />
    <Line direction="up" :rotate="0" />
    <Line direction="down" :rotate="0" />

    <Circle class="w-1/2">
      <Line color="red" size="lg" rounded :rotate="seconds" />
      <Line color="gray" size="md" rounded :rotate="minutes" />
      <Line color="gray-dark" size="sm" rounded :rotate="hours" />
    </Circle>
  </Circle>
</template>

<script setup>
import Line from "./Line.vue";
import Circle from "./Circle.vue";
import timer from "@/stores/timer";
import { ref, watch } from "vue";

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function deg(value) {
  return lerp(0, 360, value);
}

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

watch(
  () => timer.state.time,
  (time) => {
    console.log(time);

    hours.value = deg(time.getHours() / 12);
    minutes.value = deg(time.getMinutes() / 60);
    seconds.value = deg(time.getSeconds() / 60);

    console.log(seconds.value);
  }
);
</script>
