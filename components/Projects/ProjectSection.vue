<template>
  <WaveBackground class="py-20 sm:py-40 relative">
    <section id="projects">
      <SectionTitle class="flex flex-col justify-center items-center sm:absolute sm:top-40 sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <template v-slot:default>
          <span>NFT作品</span>
        </template>
        <template v-slot:red>
          <span>NFT事業</span>
        </template>
      </SectionTitle>
      
      <div class="flex justify-center pt-20 sm:pt-0 sm:block">
        <img class="h-72 sm:h-full" src="@/assets/images/kabuki_man4.png" alt="">
      </div>

      <ProjectContents />
    </section>
  </WaveBackground>
</template>

<script>
import WaveBackground from '@/components/UI/WaveBackground'
import SectionTitle from '@/components/UI/SectionTitle'
import ProjectContents from '@/components/Projects/ProjectContents'

export default {
  components: {
    WaveBackground,
    SectionTitle,
    ProjectContents
  }
}
</script>