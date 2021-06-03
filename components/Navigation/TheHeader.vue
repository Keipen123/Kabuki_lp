<template>
  <header>
    <HeaderNav />
    <MobileMenu />
  </header>
</template>

<script>
import HeaderNav from '@/components/Navigation/HeaderNav'
import MobileMenu from '@/components/Navigation/MobileMenu'

export default {
  components: {
    HeaderNav,
    MobileMenu,
  }
}
</script>