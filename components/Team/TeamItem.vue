<template>
  <li class="p-10 bg-white shadow">

    <div class="flex justify-center">
      <slot name="img"></slot>
    </div>


    <h5 class="pb-5 pt-7 text-3xl font-bold text-center">
      <slot name="name"></slot>
    </h5>

    <p class="py-2 text-gray-600">
      <slot name="desc"></slot>
    </p>


  </li>
</template>

<style lang="postcss" scoped>
  img {
    @apply rounded-full h-40 shadow border;
  }
</style>

