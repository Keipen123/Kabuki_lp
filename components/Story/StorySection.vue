<template>
  <section>
    <LightBackground>

      <SectionTitle>
        <template v-slot:default>
          <span>OUR</span>
        </template>
        <template v-slot:red>
          <span>STORY</span>
        </template>
      </SectionTitle>

      <img class="w-52 md:w-80 lg:w-96" src="@/assets/images/kabuki_man2.png" alt="">

      <StoryCard>
        <template v-slot:title>
          01
        </template>
        <template v-slot:content>
          <p>美術品には新作と贋作がある。　真作とは間違いなくその人の作品であること。　贋作とはオリジナルとは別の作者によって模写、模作され、その作者の名を騙り流通する美術品。</p>
          <p>贋作の歴史は古くストックホルム博物館にはエジプト時代のパピルスに、ガラスから宝石を作り出す方法が書かれていたものがある。今回のNFTは、正に真贋を見極めることができるというところがポイントになる。それも特別なスキルを持った者だけということではなく誰もが見極めることができる。つまり購入者はもう意に反して偽物を摑まされることがないのである。</p>
        </template>
      </StoryCard>
    </LightBackground>
  </section>
</template>

<script>
import LightBackground from '@/components/UI/LightBackground'
import SectionTitle from '@/components/UI/SectionTitle'
import StoryCard from '@/components/Story/StoryCard'

export default {
  components: {
    LightBackground,
    SectionTitle,
    StoryCard
  }
}
</script>