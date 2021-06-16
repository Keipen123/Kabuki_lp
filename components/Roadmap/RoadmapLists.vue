<template>
  <ul class="pt-96 pb-20 lg:pt-144">
    <RoadmapItems>
      <template v-slot:date>
        2021/3
      </template>
      <template v-slot:title>
        NFT事業化プロジェクト　発足
      </template>
    </RoadmapItems>
    <RoadmapItems>
      <template v-slot:date>
        2021/5
      </template>
      <template v-slot:title>
        海外法人スマートラボ社　設立
      </template>
    </RoadmapItems>
    <RoadmapItems>
      <template v-slot:date>
        2021/7
      </template>
      <template v-slot:title>
        Whitepaper公開
      </template>
      <template v-slot:title2>
        ニコニコ動画ライブドローイング番組スタート
      </template>
    </RoadmapItems>
    <RoadmapItems>
      <template v-slot:date>
        2021/8
      </template>
      <template v-slot:title>
        一流アーティストによる生ライブの実施、及びライブのNFT化
      </template>
      <template v-slot:title2>
        歌舞伎コイン ( Ticker : KABUKI ) Binance Smart Chain上のDEXへリスティング
      </template>
    </RoadmapItems>
    <RoadmapItems>
      <template v-slot:date>
        2021/9
      </template>
      <template v-slot:title>
        オークションプラットフォーム ローンチ
      </template>
    </RoadmapItems>
    <RoadmapItems>
      <template v-slot:date>
        2021/12
      </template>
      <template v-slot:title>
        オークションプラットフォーム アップデート
      </template>
    </RoadmapItems>
    <RoadmapItems>
      <template v-slot:date>
        2022/1
      </template>
      <template v-slot:title>
        デジタル美術館事業の着手
      </template>
    </RoadmapItems>
  </ul>
</template>

<script>
import RoadmapItems from '@/components/Roadmap/RoadmapItems'

export default {
  components: {
    RoadmapItems,
  }
}
</script>