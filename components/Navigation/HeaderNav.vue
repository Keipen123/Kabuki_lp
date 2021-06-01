<template>
  <div>
    <nav class="h-16 flex flex-row justify-between items-center bg-black">
      <div>
        <a class="text-3xl font-bold text-white" href="#">KABUKI</a>
      </div>
      <ul class="hidden md:flex flex-row">
        <nav-item :mobile="false">STORY</nav-item>
        <nav-item :mobile="false">TOKEN</nav-item>
        <nav-item :mobile="false">ROADMAP</nav-item>
        <nav-item :mobile="false">FAQ</nav-item>
      </ul>

      <div class="block md:hidden">
        <NavHamburger @toggleMenu="openMenu"/>
      </div>

    </nav>
    <MobileMenu />
  </div>
</template>

<script>
import NavItem from '@/components/UI/NavItem'
import NavHamburger from '@/components/UI/NavHamburger'
import MobileMenu from '@/components/Navigation/MobileMenu'

export default {
  components: {
    NavItem,
    NavHamburger,
    MobileMenu,
  },
  methods: {
    openMenu() {
      this.$store.commit('openMenu')
    }
  }
}
</script>