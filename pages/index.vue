<template>
  <div>
    <StorySection />
    <AboutSection />
    <ProjectSection />
    <NftSection />
    <TokenSection />
    <TeamSection />
    <RoadmapSection />
    <FaqSection />
    <SocialSection />
  </div>
</template>

<script>
import StorySection from '@/components/Story/StorySection'
import AboutSection from '@/components/About/AboutSection'
import ProjectSection from '@/components/Projects/ProjectSection'
import NftSection from '@/components/NFT/NftSection'
import TokenSection from '@/components/Token/TokenSection'
import TeamSection from '@/components/Team/TeamSection'
import RoadmapSection from '@/components/Roadmap/RoadmapSection'
import FaqSection from '@/components/FAQ/FaqSection'
import SocialSection from '@/components/Social/SocialSection'

export default {
  components: {
    StorySection,
    AboutSection,
    ProjectSection,
    NftSection,
    TokenSection,
    TeamSection,
    RoadmapSection,
    FaqSection,
    SocialSection
  }
}
</script>

