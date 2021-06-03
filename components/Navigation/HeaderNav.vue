<template>
  <nav class="h-16 flex flex-row justify-between items-center bg-black fixed w-full z-50 px-3 md:px-10">
    <div>
      <a href="#" class="text-xl sm:text-3xl font-bold text-white flex items-center">
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
    
</template>

<script>
import NavItem from '@/components/UI/NavItem'
import NavHamburger from '@/components/UI/NavHamburger'

export default {
  components: {
    NavItem,
    NavHamburger,
  },
  methods: {
    openMenu() {
      this.$store.commit('openMenu')
    }
  }
}
</script>