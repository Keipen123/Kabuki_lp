<template>

  <div>
    <h1 class="text-5xl sm:text-7xl lg:text-9xl font-extrabold">
      <slot></slot>
    </h1>
    <h1 class="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-red-600">
      <slot name="red"></slot>
    </h1>
  </div>

</template>