<template>
    <div>
        <Hero/>
        <hero-2 />
        <we-do />
        <website-platform />
        <mobile-app />
        <branding />
    </div>
</template>

<script>
import Hero from '@/components/services/hero.vue'
import Hero2 from '@/components/services/hero2.vue';
import WeDo from '@/components/services/we-do.vue';
import websitePlatform from '@/components/services/website-platform.vue';
import mobileApp from '@/components/services/mobile-app.vue';
import branding from '@/components/services/branding.vue';
export default{
    components: {
        Hero,
        Hero2,
        WeDo,
        websitePlatform,
        mobileApp,
        branding
        
    },
  data() {
    return {
      
    };
  },
}
</script>
