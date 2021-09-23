<template>
  <span
    :class="[
      'absolute',

      direction === 'left' && 'left-0',
      direction === 'right' && 'right-0',
      direction === 'up' && 'top-0',
      direction === 'down' && 'bottom-0',

      'transform origin-bottom transition-all',
    ]"
    :style="{
      '--tw-rotate': `${rotate % 360}deg`,
    }"
  >
    <span
      :class="[
        'absolute w-1',
        'transform -translate-x-1/2',

        ['left', 'right', 'down'].includes(direction) && '-translate-y-full',

        size === 'xs' && 'h-5',
        size === 'sm' && 'h-12',
        size === 'md' && 'h-20',
        size === 'lg' && 'h-28',

        color === 'gray' && 'bg-blue-gray',
        color === 'gray-dark' && 'bg-gray-dark',
        color === 'red' && 'bg-red',

        rounded && 'rounded-full',
      ]"
    />
  </span>
</template>

<script>
function includes(array) {
  return (value) => array.includes(value);
}

export default {
  props: {
    size: {
      type: String,
      default: "xs",
      validator: includes(["xs", "sm", "md", "lg"]),
    },

    direction: {
      type: String,
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
