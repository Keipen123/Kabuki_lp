<template>
  <li class="py-5 sm:py-0 flex flex-col items-center">

    <div>
      <slot name="img"></slot>
    </div>

    <h5 class="py-3 text-xl font-bold">
      <slot name="name"></slot>
    </h5>

    <div>
      <p>
        <slot name="desc"></slot>
      </p>
    </div>

  </li>
</template>

<style lang="postcss" scoped>
  img {
    @apply rounded-full h-40;
  }
</style>

