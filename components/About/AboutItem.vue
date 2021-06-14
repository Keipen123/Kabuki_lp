<template>
  <li class="md:w-1/2 py-4 md:px-2">
    <h5 class="text-red-600 font-bold text-2xl md:text-4xl">
      <slot name="title"></slot>
    </h5>
    <div>
      <slot name="img"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </li>
</template>


<style lang="postcss" scoped>
  
</style>