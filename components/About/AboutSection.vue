<template>
  
  <DarkBackground class="py-20 sm:py-40">
    <section>
      <div class="flex justify-center pb-8 sm:pb-16">
        <SectionTitle>
          <template v-slot:default>
            <span>KABUKIという</span>
          </template>
          <template v-slot:red>
            <span>名称への想い</span>
          </template>
        </SectionTitle>
      </div>

      <AboutContents />

    </section>
  </DarkBackground>
  
</template>

<script>
import DarkBackground from '@/components/UI/DarkBackground'
import SectionTitle from '@/components/UI/SectionTitle'
import AboutContents from '@/components/About/AboutContents'

export default {
  components: {
    DarkBackground,
    SectionTitle,
    AboutContents,
  }
}
</script>
