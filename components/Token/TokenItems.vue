<template>
  <li>
    <h5 class="text-2xl mb-2 mt-4">
      <slot name="title"></slot>
    </h5>
    <div>
      <p class="text-2xl font-extrabold">
        <slot name="quantity"></slot>
        <span class="text-red-600">
          <slot name="unit"></slot>
        </span>
      </p>
    </div>
  </li>
</template>