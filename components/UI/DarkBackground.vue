<template>
  <div class="dark-background section-container">
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.dark-background {
  background: url('~assets/images/dark_background.png') no-repeat center center;
  background-size: cover;
}
</style>