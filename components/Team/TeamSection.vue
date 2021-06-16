<template>
  <section id="team" class="py-20 sm:pb-40 section-container">
    <SectionTitle class="flex flex-col justify-center items-center">
      <template v-slot:default>
        <span>KABUKI</span>
      </template>
      <template v-slot:red>
        <span>TEAM</span>
      </template>
    </SectionTitle>

    <TeamLists />
  </section>
</template>

<script>
import SectionTitle from '@/components/UI/SectionTitle'
import TeamLists from '@/components/Team/TeamLists'

export default {
  components: {
    SectionTitle,
    TeamLists,
  }
}
</script>