<template>
    <div>
        <Hero/>
        <hero-2 />
        <we-do />
        <!-- <marketing /> -->
        
    </div>
</template>

<script>
import Hero from '@/components/website/hero.vue'
import Hero2 from '@/components/website/hero2.vue';
import WeDo from '@/components/website/we-do.vue';
// import marketing from '@/components/website/marketing.vue'

export default{
    components: {
        Hero,
        Hero2,
        WeDo,
        
        
        
    },
  data() {
    return {
      
    };
  },
}
</script>
