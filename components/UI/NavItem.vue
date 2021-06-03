<template>
  <li :class="mobile ? 'my-5' : 'ml-7'">
    <a class="text-xl font-bold text-white hover:text-red-700" :href="link">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    mobile: {
      type: Boolean,
      required: true,
      default: true,
    },
    link: {
      type: String,
      required: true,
      default: '#'
    }
  }
}
</script>