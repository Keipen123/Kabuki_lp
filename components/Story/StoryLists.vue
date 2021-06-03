<template>
  <ul class="pt-96 pb-48">
    <li class="md:pt-20 flex justify-center md:justify-end">
      <StoryCard>
        <template v-slot:title>
          01
        </template>
        <template v-slot:content>
          <p>美術品には新作と贋作がある。　真作とは間違いなくその人の作品であること。　贋作とはオリジナルとは別の作者によって模写、模作され、その作者の名を騙り流通する美術品。</p>
          <p>贋作の歴史は古くストックホルム博物館にはエジプト時代のパピルスに、ガラスから宝石を作り出す方法が書かれていたものがある。今回のNFTは、正に真贋を見極めることができるというところがポイントになる。それも特別なスキルを持った者だけということではなく誰もが見極めることができる。つまり購入者はもう意に反して偽物を摑まされることがないのである。</p>
        </template>
        <template v-slot:button>
          <BaseButton link="#token">
            トークン
          </BaseButton>
        </template>
      </StoryCard>
    </li>

    <li class="flex justify-center md:justify-start">
      <StoryCard>
        <template v-slot:title>
          02
        </template>
        <template v-slot:content>
          <p>「本物」の意味には作品の真贋だけでなく、見せかけではなく実質の価値を備えているという意味もある。</p>
          <p>現在、巷では全く価値のない又は作品とは呼べないものまでもがNFT化し、あたかも価値が上がるかのように見せかけて流通させようとしているものが散見される。私達が重要視していることは、NFT化して価値を高めようではなく、価値のあるものをNFT化しようである。芸術作品とは決してその辺りに転がっているものではなく、極めて希少性の高いものであり、それらの作品をNFT化してこそ世界に出せるのである。</p>
        </template>
        <template v-slot:button>
          <BaseButton link="#token">
            トークン
          </BaseButton>
        </template>
      </StoryCard>
    </li>

    <li class="flex justify-center md:justify-end">
      <StoryCard>
        <template v-slot:title>
          03
        </template>
        <template v-slot:content>
          <p>2の部分においてそれは作品だけでなく実社会における事業においても当てはまる。見かけだけ良い事業は必ずメッキが剥がれる。このNFT業界もその通りで、急速に盛り上がりをみせたものの今は少し落ち着きを見せている。これから先本格的な淘汰が始まり収斂されていくだろう。私達はそのように進むことを望んでおり本物だけが残るフィールドで戦いたい。</p>
        </template>
        <template v-slot:button>
          <BaseButton link="#token">
            トークン
          </BaseButton>
        </template>
      </StoryCard>
    </li>
  </ul>
</template>

<script>
import StoryCard from '@/components/Story/StoryCard'
import BaseButton from '@/components/UI/BaseButton'

export default {
  components: {
    StoryCard,
    BaseButton
  }
}
</script>
