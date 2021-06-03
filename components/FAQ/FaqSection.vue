<template>
  
  <DarkBackground class="py-20 sm:py-40">
    <section id="faq">
      <div class="pb-8 sm:pb-16">
        <SectionTitle>
          <template v-slot:default>
            <span>FAQ</span>
          </template>
        </SectionTitle>
      </div>

      <FaqLists />
    </section>
  </DarkBackground>
  
</template>

<script>
import DarkBackground from '@/components/UI/DarkBackground'
import SectionTitle from '@/components/UI/SectionTitle'
import FaqLists from '@/components/FAQ/FaqLists'

export default {
  components: {
    DarkBackground,
    SectionTitle,
    FaqLists
  }
}
</script>