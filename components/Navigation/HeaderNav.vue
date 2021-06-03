<template>
  <div>
    <nav class="h-16 flex flex-row justify-between items-center bg-black fixed w-full z-50">
      <div>
        <a href="#" class="text-3xl font-bold text-white flex items-center">
          <img class="h-12" src="@/assets/images/kabuki_icon_dog.png" alt="">
          <span class="ml-3">KABUKI COIN</span>
        </a>
      </div>
      <ul class="hidden md:flex flex-row">
        <nav-item link="#story" :mobile="false">STORY</nav-item>
        <nav-item link="#token" :mobile="false">TOKEN</nav-item>
        <nav-item link="#roadmap" :mobile="false">ROADMAP</nav-item>
        <nav-item link="#faq" :mobile="false">FAQ</nav-item>
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