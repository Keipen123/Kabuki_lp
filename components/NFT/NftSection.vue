<template>
  <LightBackground class="py-20 sm:py-40">
    <section>

      <SectionTitle class="pb-8 sm:pb-16">
        <template v-slot:default>
          <span>NFT市場の</span>
        </template>
        <template v-slot:red>
          <span>可能性</span>
        </template>
      </SectionTitle>

      <NftContents />

      <NftLists />

    </section>
  </LightBackground>
</template>

<script>
import LightBackground from '@/components/UI/LightBackground'
import SectionTitle from '@/components/UI/SectionTitle'
import NftContents from '@/components/NFT/NftContents'
import NftLists from '@/components/NFT/NftLists'

export default {
  components: {
    LightBackground,
    SectionTitle,
    NftContents,
    NftLists,
  }
}
</script>