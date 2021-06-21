<template>
  <div>
    <div class="mt-5">
      <h5>NFT作品</h5>
      <ProjectWork />
    </div>

    <div class="mt-10">
      <h5>NFT事業</h5>
      <ProjectServices />
    </div>
  </div>
</template>

<script>
import ProjectWork from '@/components/Projects/ProjectWork'
import ProjectServices from '@/components/Projects/ProjectServices'

export default {
  components: {
    ProjectWork,
    ProjectServices
  }
}
</script>

<style lang="postcss" scoped>
 h5 {
   @apply font-bold text-5xl text-red-600 text-center;
 }
</style>