<template>
  <a class="shadow-lg text-2xl ml-5 font-extrabold px-4 py-2 md:ml-0 text-white md:text-4xl md:px-8 md:py-4 bg-red-600 hover:bg-red-400" :href="link">
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