<template>
  <li class="pb-10">
    <h4 class="text-lg sm:text-2xl font-extrabold text-red-600">
      <slot name="date"></slot>
    </h4>
    <div class="py-5 pl-5 border-l-2 border-red-600">
      <h5 class="text-lg sm:text-3xl font-bold">
        <slot name="title"></slot>
      </h5>
      <p>
        <slot name="content"></slot>
      </p>
    </div>
  </li>
</template>