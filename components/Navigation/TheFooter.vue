<template>

  <footer class="bg-black flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-5 lg:py-10">
    <div class="order-2 sm:order-1">
      <div>
        <a href="#" class="text-xl sm:text-3xl font-bold text-white flex items-center">
          <img class="h-12" src="@/assets/images/kabuki_icon_dog.png" alt="">
          <span class="ml-3">KABUKI COIN</span>
        </a>
      </div>
      <p class="text-white text-xs">© KABUKI COIN. All rights reserved.</p>
    </div>

    <ul class="order-1 pb-3 sm:flex sm:pb-0 sm:order-2">
      <li>
        <a href="#story">STORY</a>
      </li>
      <li>
        <a href="#token">TOKEN</a>
      </li>
      <li>
        <a href="#roadmap">ROADMAP</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
    </ul>

  </footer>
</template>

<style lang="postcss" scoped>
  li > a {
    @apply text-white text-sm font-bold sm:ml-3 sm:text-lg lg:text-xl hover:text-red-600;
  }
</style>