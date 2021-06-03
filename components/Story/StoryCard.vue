<template>
  <div class="w-full md:w-2/3 bg-white p-10 relative my-12 z-10 max-w-2xl">
    <h5 class="font-extrabold text-3xl mb-4">
      <slot name="title"></slot>
    </h5>
    <div>
      <slot name="content"></slot>
    </div>

    <div class="absolute -bottom-7 right-16">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  p {
    @apply mb-2;
  }
</style>