<template>
  <section id="hero-section">
    <HeroTitle />
    <img class="absolute right-0 top-16" src="@/assets/images/kabuki_branch2.png" alt="">
    <img class="absolute left-0 bottom-0" src="@/assets/images/kabuki_branch.png" alt="">
    <img class="kabuki-man" src="@/assets/images/kabuki_man1.png" alt="">
  </section>
</template>

<script>
import HeroTitle from '@/components/Hero/HeroTitle'

export default {
  components: {
    HeroTitle
  }
}
</script>

<style lang="postcss" scoped>

#hero-section {
  background: url('~assets/images/kabuki_bg.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  min-height: 568px;
  display: relative;
}

.kabuki-man {
  @apply absolute w-44 right-0 md:w-56 md:right-32 -bottom-24;
}

</style>