<template>
  <div>
    <!-- menu overlay -->
    <div v-if="menuOpen" @click="closeMenu" class="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>

    <!-- mobile menu -->
    <nav class="fixed top-0 h-full bg-black w-52 -left-52 transition-transform duration-200 ease-out z-50" :class="{'transform translate-x-52': menuOpen}">
      <div class="flex justify-end m-5">
        <CloseButton @close="closeMenu"/>
      </div>
      <ul class="flex flex-col items-center">
        <nav-item link="#story" :mobile="true">STORY</nav-item>
        <nav-item link="#token" :mobile="true">TOKEN</nav-item>
        <nav-item link="#team" :mobile="true">TEAM</nav-item>
        <nav-item link="#roadmap" :mobile="true">ROADMAP</nav-item>
        <nav-item link="#faq" :mobile="true">FAQ</nav-item>
      </ul>
    </nav>
  </div>
</template>

<script>
import CloseButton from '@/components/UI/CloseButton'
import NavItem from '@/components/UI/NavItem'

export default {
  components: {
    CloseButton,
    NavItem
  },
  computed: {
    menuOpen() {
      return this.$store.getters.menuOpen
    }
  },
  methods: {
    closeMenu() {
      this.$store.commit('closeMenu')
    }
  }
}
</script>