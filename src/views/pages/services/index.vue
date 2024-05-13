<template>
    <div>
        <Hero/>
        <hero-2 />
        <we-do />
        <website-platform />
        <mobile-app />
        <branding />
        <design-concept />
        <social-media />
        <marketing />
    </div>
</template>

<script>
import Hero from '@/components/services/hero.vue'
import Hero2 from '@/components/services/hero2.vue';
import WeDo from '@/components/services/we-do.vue';
import websitePlatform from '@/components/services/website-platform.vue';
import mobileApp from '@/components/services/mobile-app.vue';
import branding from '@/components/services/branding.vue';
import designConcept from '@/components/services/design-concept.vue';
import socialMedia from '@/components/services/social-media.vue';
import marketing from '@/components/services/marketing.vue';
export default{
    components: {
        Hero,
        Hero2,
        WeDo,
        websitePlatform,
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
