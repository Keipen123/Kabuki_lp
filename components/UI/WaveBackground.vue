<template>
  <div class="wave-background section-container">
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.wave-background {
  background: url('~assets/images/wave_background.jpg') no-repeat center center;
  background-size: cover;
}
</style>