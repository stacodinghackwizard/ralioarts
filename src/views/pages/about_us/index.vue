<template>
    <div>
        <Hero/>
        <hero-2 />
        <we-do />
        <website-platform />
        <company-card/>
        <testimony-test/>
        <Testimonial />
        <mobileApp/>
        >
    </div>
</template>

<script>
import Hero from '@/components/about-us/hero.vue'
import Hero2 from '@/components/about-us/hero2.vue';
import WeDo from '@/components/about-us/we-do.vue';
import websitePlatform from '@/components/about-us/website-platform.vue';
import CompanyCard from '@/components/home/company-card.vue';
import TestimonyTest from '@/components/branding/testimony.vue';
import Testimonial from '@/components/home/testimonial.vue';
import mobileApp from '@/components/about-us/mobile-app.vue';
import branding from '@/components/about-us/branding.vue';
import designConcept from '@/components/about-us/design-concept.vue';
import socialMedia from '@/components/about-us/social-media.vue';
import marketing from '@/components/about-us/marketing.vue';
export default{
    components: {
        Hero,
        Hero2,
        WeDo,
        websitePlatform,
        CompanyCard,
        TestimonyTest,
        Testimonial,
        mobileApp,
        branding,
        designConcept,
        socialMedia,
        marketing
        
    },
  data() {
    return {
      
    };
  },
}
</script>
