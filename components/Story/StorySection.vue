<template>
  
  <LightBackground>
    <section id="story" class="relative">

    <img class="w-52 md:w-80 lg:w-96 absolute right-0 top-36" src="@/assets/images/kabuki_man2.png" alt="">

    <div class="absolute left-0 top-40">
      <SectionTitle>
        <template v-slot:default>
          <span>OUR</span>
        </template>
        <template v-slot:red>
          <span>STORY</span>
        </template>
      </SectionTitle>
    </div>

    <StoryLists />

    <img class="absolute bottom-10 left-0" src="@/assets/images/kabuki_temple.png" alt="">
    
    </section>
  </LightBackground>
  
</template>

<script>
import LightBackground from '@/components/UI/LightBackground'
import SectionTitle from '@/components/UI/SectionTitle'
import StoryLists from '@/components/Story/StoryLists'

export default {
  components: {
    LightBackground,
    SectionTitle,
    StoryLists
  }
}
</script>

<style lang="postcss" scoped>

</style>