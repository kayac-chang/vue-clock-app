<template>
  <div class="flex flex-col gap-10 p-8">
    <header class="flex justify-between items-center">
      <h1 class="font-bold text-3xl text-blue-darker">Clock</h1>

      <button class="w-12 p-3 rounded-full shadow">
        <Cog />
      </button>
    </header>

    <main>
      <Clock />
    </main>
  </div>
</template>

<script setup>
import Cog from "@/assets/cog.svg";
import Clock from "./components/Clock.vue";
</script>
