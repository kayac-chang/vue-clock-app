<template>
  <span
    :class="[
      'absolute w-1',

      size === 'sm' && 'h-5',
      size === 'md' && 'h-1/2',
      size === 'lg' && 'h-2/3',

      direction === 'left' && 'left-0 rotate-90 translate-x-2',
      direction === 'right' && 'right-0 rotate-90 -translate-x-2',
      direction === 'up' && 'top-0',
      direction === 'down' && 'bottom-0',

      color === 'gray' && 'bg-blue-gray',
      color === 'gray-dark' && 'bg-gray-dark',
      color === 'red' && 'bg-red',
    ]"
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

    color: {
      type: String,
      default: "gray",
      validator: includes(["gray", "red", "dark-gray"]),
    },
  },
};
</script>
