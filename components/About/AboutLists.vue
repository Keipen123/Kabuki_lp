<template>
  <ul class="md:flex md:flex-row flex-wrap">
    <AboutItem>
      <template v-slot:title>
        Enjin
      </template>
      <template v-slot:img>
        <img class="max-h-72 my-2" src="@/assets/images/enjin.jpg" alt="">
      </template>
      <template v-slot:content>
        <p>MicrosoftやSamsungと提携。</p>
        <p>35種類ものオンラインゲームで利用可能するNFT。異なるゲーム間でアイテムの売買が可能になる。</p>
      </template>
    </AboutItem>
    <AboutItem>
      <template v-slot:title>
        Flow
      </template>
      <template v-slot:img>
        <img class="max-h-72 my-2" src="@/assets/images/flow.jpg" alt="">
      </template>
      <template v-slot:content>
        <p>クリプトキティをリリースしたDapperLabsが作成したブロックチェーン。イーサリアム上で代表的な通貨。</p>
      </template>
    </AboutItem>
    <AboutItem>
      <template v-slot:title>
        Rarible
      </template>
      <template v-slot:img>
        <img class="max-h-72 my-2" src="@/assets/images/rarible.jpg" alt="">
      </template>
      <template v-slot:content>
        <p>NFT作品を購入することができるプラットフォーム。Raribleで販売or購入するだけでマイニングが可能。毎週RARIトークンを付与され、直近3ヶ月の間に10倍に上昇。</p>
      </template>
    </AboutItem>
    <AboutItem>
      <template v-slot:title>
        Chilliz
      </template>
      <template v-slot:img>
        <img class="max-h-72 my-2" src="@/assets/images/chilliz.jpg" alt="">
      </template>
      <template v-slot:content>
        <p>スポーツクラブとそのファンを繋ぐNFT。エンジンと提携し、バイナンス、ChilizExchange、HitBTC、Bitcoin.com、Changellyに上場。</p>
      </template>
    </AboutItem>
  </ul>
</template>

<script>
import AboutItem from '@/components/About/AboutItem'

export default {
  components: {
    AboutItem
  }
}
</script>