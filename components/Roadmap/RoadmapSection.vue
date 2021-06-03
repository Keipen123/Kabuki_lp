<template>
  <section id="roadmap" class="relative">
    <LightBackground>

      <img class="w-44 md:w-60 lg:w-72 absolute right-0 top-16" src="@/assets/images/kabuki_man3.png" alt="">

      <div class="absolute left-0 top-40">
        <SectionTitle>
          <template v-slot:default>
            <span>OUR</span>
          </template>
          <template v-slot:red>
            <span>ROADMAP</span>
          </template>
        </SectionTitle>
      </div>

      <RoadmapLists />

    </LightBackground>
  </section>
</template>

<script>
import LightBackground from '@/components/UI/LightBackground'
import SectionTitle from '@/components/UI/SectionTitle'
import RoadmapLists from '@/components/Roadmap/RoadmapLists'

export default {
  components: {
    LightBackground,
    SectionTitle,
    RoadmapLists,
  }
}
</script>