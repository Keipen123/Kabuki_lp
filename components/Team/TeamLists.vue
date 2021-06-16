<template>
  <ul class="sm:grid sm:grid-cols-2 sm:gap-10 mt-16">
    <TeamItem>
      <template v-slot:img>
        <img src="@/assets/images/profile-icon.png" alt="">
      </template>
      <template v-slot:name>
        歌舞伎　歌舞伎
      </template>
      <template v-slot:desc>
        テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
      </template>
    </TeamItem>
    <TeamItem>
      <template v-slot:img>
        <img src="@/assets/images/profile-icon.png" alt="">
      </template>
      <template v-slot:name>
        歌舞伎　歌舞伎
      </template>
      <template v-slot:desc>
        テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
      </template>
    </TeamItem>
    <TeamItem>
      <template v-slot:img>
        <img src="@/assets/images/profile-icon.png" alt="">
      </template>
      <template v-slot:name>
        歌舞伎　歌舞伎
      </template>
      <template v-slot:desc>
        テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
      </template>
    </TeamItem>
  </ul>
</template>

<script>
import TeamItem from '@/components/Team/TeamItem'

export default {
  components: {
    TeamItem,
  }
}
</script>