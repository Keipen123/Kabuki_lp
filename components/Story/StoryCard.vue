<template>
  <div class="w-full md:w-1/2 bg-white p-10 relative">
    <h5 class="font-extrabold text-3xl mb-4">
      <slot name="title"></slot>
    </h5>
    <div>
      <slot name="content"></slot>
    </div>

    <div class="absolute -bottom-7 right-7">
      <BaseButton link="#">
        トークン
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton'

export default {
  components: {
    BaseButton
  }
}
</script>

<style lang="postcss" scoped>
  p {
    @apply mb-2;
  }
</style>