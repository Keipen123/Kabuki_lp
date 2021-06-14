<template>
  <ul class="md:flex md:flex-row flex-wrap">
    <NftItem>
      <template v-slot:title>
        Enjin
      </template>
      <template v-slot:img>
        <img src="@/assets/images/chart-enjin.jpg" alt="">
      </template>
      <template v-slot:content>
        <p>MicrosoftやSamsungと提携。</p>
        <p>35種類ものオンラインゲームで利用可能するNFT。異なるゲーム間でアイテムの売買が可能になる。</p>
      </template>
    </NftItem>
    <NftItem>
      <template v-slot:title>
        Flow
      </template>
      <template v-slot:img>
        <img src="@/assets/images/chart-flow.jpg" alt="">
      </template>
      <template v-slot:content>
        <p>クリプトキティをリリースしたDapperLabsが作成したブロックチェーン。イーサリアム上で代表的な通貨。</p>
      </template>
    </NftItem>
    <NftItem>
      <template v-slot:title>
        Rarible
      </template>
      <template v-slot:img>
        <img src="@/assets/images/chart-rarible.jpg" alt="">
      </template>
      <template v-slot:content>
        <p>NFT作品を購入することができるプラットフォーム。Raribleで販売or購入するだけでマイニングが可能。毎週RARIトークンを付与され、直近3ヶ月の間に10倍に上昇。</p>
      </template>
    </NftItem>
    <NftItem>
      <template v-slot:title>
        Chilliz
      </template>
      <template v-slot:img>
        <img src="@/assets/images/chart-chilliz.jpg" alt="">
      </template>
      <template v-slot:content>
        <p>スポーツクラブとそのファンを繋ぐNFT。エンジンと提携し、バイナンス、ChilizExchange、HitBTC、Bitcoin.com、Changellyに上場。</p>
      </template>
    </NftItem>
  </ul>
</template>

<script>
import NftItem from '@/components/NFT/NftItem'

export default {
  components: {
    NftItem
  }
}
</script>

<style lang="postcss" scoped>
  img {
    @apply max-h-72;
  }
</style>