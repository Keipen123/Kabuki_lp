<template>
  <div>
    <HeroSection />
    <StorySection />
    <AboutSection />
    <TokenSection />
    <RoadmapSection />
    <FaqSection />
  </div>
</template>

<script>
import HeroSection from '@/components/Hero/HeroSection'
import StorySection from '@/components/Story/StorySection'
import AboutSection from '@/components/About/AboutSection'
import TokenSection from '@/components/Token/TokenSection'
import RoadmapSection from '@/components/Roadmap/RoadmapSection'
import FaqSection from '@/components/FAQ/FaqSection'

export default {
  components: {
    HeroSection,
    StorySection,
    AboutSection,
    TokenSection,
    RoadmapSection,
    FaqSection,
  }
}
</script>

