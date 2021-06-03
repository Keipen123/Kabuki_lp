<template>
  <a class="inline-block text-2xl font-bold text-white px-4 py-2 bg-red-600 hover:bg-red-400" :href="link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>