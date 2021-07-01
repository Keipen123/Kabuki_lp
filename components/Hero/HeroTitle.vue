<template>
  <div class="flex flex-col justify-center items-center h-full">
    <div>
      <h3 class="text-white text-5xl lg:text-9xl font-extrabold opacity-90 flex items-center">
        <img class="h-16 lg:h-24 mr-4" src="@/assets/images/kabuki_icon_dog.png" alt="">
        KABUKI COIN
      </h3>
      <h1 class="font-extrabold text-9xl lg:text-350 text-brown opacity-60">歌舞伎</h1>
      
      <div class="relative z-20 pt-14">      
        <LargeButton link="#">White Paper</LargeButton>
      </div>


    </div>
  </div>
</template>

<script>
import LargeButton from '@/components/UI/LargeButton'

export default {
  components: {
    LargeButton,
  }
}
</script>