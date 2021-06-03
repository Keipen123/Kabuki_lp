<template>
  <div class="light-background">
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.light-background {
  background: url('~assets/images/light-background.png') no-repeat center center;
  background-size: cover;
}
</style>