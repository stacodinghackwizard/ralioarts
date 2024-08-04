<template>
    <!-- Header Start -->
    <div>
        <Hero class="hero-header"/>
        <MakeTeam />
        <Branding />
        <web-design />
        <app-design />
        <approach />
        <Testimonial />
        <company-card/>
    </div>
    <!-- Header End -->
</template>

<script>
import Hero from '../../../components/home/hero.vue'
import MakeTeam from '../../../components/home/make-team.vue'
import Branding from '../../../components/home/branding.vue'
import WebDesign from '@/components/home/web-design.vue'
import AppDesign from '@/components/home/app-design.vue'
import Approach from '@/components/home/approach.vue'
import Testimonial from '@/components/home/testimonial.vue'
import companyCard from '@/components/home/company-card.vue'

export default{
    components: {
        Hero,
        MakeTeam,
        Branding,
        WebDesign,
        AppDesign,
        Approach,
        Testimonial,
        companyCard
        
    },
  data() {
    return {
      
    };
  },
}
</script>

<style scoped>
.hero-header{
  /* height: 100%; */
}
</style>
