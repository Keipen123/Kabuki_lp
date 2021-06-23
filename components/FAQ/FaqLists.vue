<template>
  <ul>
    <FaqItem>
      <template v-slot:question>
        NFT作品はどこで購入できますか
      </template>
      <template v-slot:answer>
        KABUKIプラットフォームもしくは世界の主要なNFTオークションプラットフォームで購入できます。
      </template>
    </FaqItem>
    <FaqItem>
      <template v-slot:question>
        購入したNFT作品は転売することも可能ですか
      </template>
      <template v-slot:answer>
        購入した作品似関しては転売も可能です。KABUKIプラットフォームだけでなく他のプラットフォームでも転売できます。
      </template>
    </FaqItem>
    <FaqItem>
      <template v-slot:question>
        絵画以外のNFT作品はありますか
      </template>
      <template v-slot:answer>
        絵画以外のNFT作品もあります。海外に留まらず、動画や音楽等の希少性の高いコンテンツを多く取り扱っていきます。
      </template>
    </FaqItem>
    <FaqItem>
      <template v-slot:question>
        歌舞伎プロジェクトについてもっと詳しく知りたいです。
      </template>
      <template v-slot:answer>
        歌舞伎プロジェクトの詳細についてはホワイトペーパーで詳しく記載しています。その他気になる点は、運営事務局にメール等でお問い合わせください。
      </template>
    </FaqItem>
    <FaqItem>
      <template v-slot:question>
        KABUKIトークンはどこで購入できますか？
      </template>
      <template v-slot:answer>
        Pancakeswapで購入が可能です。
      </template>
    </FaqItem>
    <FaqItem>
      <template v-slot:question>
        KABUKIトークンの購入方法を教えて下さい
      </template>
      <template v-slot:answer>
        KABUKIトークンの購入動画にて説明しています。
      </template>
    </FaqItem>
    <FaqItem>
      <template v-slot:question>
        KABUKIは中央集権型取引所への上場は考えていますか
      </template>
      <template v-slot:answer>
        はい、来年にランキング50位以内の取引所で上場を想定しています。
      </template>
    </FaqItem>
  </ul>
</template>

<script>
import FaqItem from '@/components/FAQ/FaqItem'
export default {
  FaqItem
}
</script>