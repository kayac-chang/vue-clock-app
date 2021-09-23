<template>
  <span
    :class="[
      'absolute w-1 transform',

      size === 'sm' && 'h-5',
      size === 'md' && 'h-1/2',
      size === 'lg' && 'h-2/3',

      direction === 'left' && 'left-0 translate-x-2',
      direction === 'right' && 'right-0 -translate-x-2',
      direction === 'up' && 'top-0',
      direction === 'down' && 'bottom-0',

      color === 'gray' && 'bg-blue-gray',
      color === 'gray-dark' && 'bg-gray-dark',
      color === 'red' && 'bg-red',

      rounded && 'rounded-full',
    ]"
    :style="{
      '--tw-rotate': `${rotate % 360}deg`,
    }"
  />
</template>

<script>
function includes(array) {
  return (value) => array.includes(value);
}

export default {
  props: {
    size: {
      type: String,
      default: "sm",
      validator: includes(["sm", "md", "lg"]),
    },

    direction: {
      type: String,
      default: "up",
      validator: includes(["up", "down", "left", "right"]),
    },

    rotate: {
      type: Number,
      default: 0,
    },

    color: {
      type: String,
      default: "gray",
      validator: includes(["gray", "red", "gray-dark"]),
    },

    rounded: Boolean,
  },
};
</script>
