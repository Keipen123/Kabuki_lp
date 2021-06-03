<template>
  <section id="token" class="py-20 sm:py-40 section-container">
    <div class="flex justify-center">
      <img src="@/assets/images/kabuki_mask.png" alt="">
    </div>
    <SectionTitle class="flex flex-col justify-center items-center">
      <template v-slot:default>
        <span>KABUKI</span>
      </template>
      <template v-slot:red>
        <span>TOKEN</span>
      </template>
    </SectionTitle>

    <ul class="pt-10 flex flex-col items-center md:flex-row md:justify-between">
      <TokenItems>
        <template v-slot:title>
          総供給量
        </template>
        <template v-slot:quantity>
          1,000,000,000
        </template>
        <template v-slot:unit>
          KABUKI
        </template>
      </TokenItems>
      <TokenItems>
        <template v-slot:title>
          流通量
        </template>
        <template v-slot:quantity>
          1,000,000,000
        </template>
        <template v-slot:unit>
          KABUKI
        </template>
      </TokenItems>
      <TokenItems>
        <template v-slot:title>
          ガス費用
        </template>
        <template v-slot:quantity>
          1,000,000,000
        </template>
        <template v-slot:unit>
          KABUKI
        </template>
      </TokenItems>
    </ul>
  </section>
</template>

<script>
import SectionTitle from '@/components/UI/SectionTitle'
import TokenItems from '@/components/Token/TokenItems'

export default {
  components: {
    SectionTitle,
    TokenItems
  }
}
</script>

