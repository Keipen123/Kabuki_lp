<template>
  <li class="md:w-1/2 py-4 md:px-2">
    <h5 class="text-red-600 font-extrabold text-2xl md:text-5xl pb-2 md:pb-6">
      <slot name="title"></slot>
    </h5>
    <div>
      <slot name="img"></slot>
    </div>
    <div class="pt-2 md:pt-6">
      <slot name="content"></slot>
    </div>
  </li>
</template>