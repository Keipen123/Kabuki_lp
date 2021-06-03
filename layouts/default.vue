<template>
  <div>
    <TheHeader />
    <HeroSection />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import HeroSection from '@/components/Hero/HeroSection'
import TheFooter from '@/components/Navigation/TheFooter'

export default {
  components: {
    HeroSection,
    TheHeader,
    TheFooter
  }
}
</script>