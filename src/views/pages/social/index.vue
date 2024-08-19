<template>
    <div>
        <Hero/>
        <hero-2 />
        <we-do />
        <company-card/>
        <testimony-test/>
        <Testimonial />
        <other-service />
        <!-- <marketing /> -->
        
    </div>
</template>

<script>
import Hero from '@/components/social/hero.vue'
import Hero2 from '@/components/social/hero2.vue';
import WeDo from '@/components/social/we-do.vue';
import CompanyCard from '@/components/home/company-card.vue';
import TestimonyTest from '@/components/social/testimony.vue';
import Testimonial from '@/components/home/testimonial.vue';
import OtherService from '@/components/otherService.vue'
// import marketing from '@/components/branding/marketing.vue'

export default{
    components: {
        Hero,
        Hero2,
        WeDo,
        CompanyCard,
        TestimonyTest,
        Testimonial,
        OtherService
        
        
    },
  data() {
    return {
      
    };
  },
}
</script>
