<template>
  <div>
    <header>
      <navbar></navbar>
    </header>
    
    <!-- <main class="main"> -->
      <main class="">

      <!-- Page content goes here -->
      <router-view></router-view>
    </main>

    <footer>
      <!-- Footer content goes here -->
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../src/components/navbar/index.vue'
import Footer from '../src/components/footer/index.vue'


export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      
    };
  },
  created() {
    // Call the method to check the current route initially
    
  },
  methods: {
    // checkRoute() {
    //   // Get the current route name
    //   const currentRoute = this.$route.name;
    //   // console.log('Current Route', currentRoute);


    //   const pageMain = document.querySelector(".overall_wrap");
    //   // Check if the current route is 'apply-now' or 'login'
    //   if (currentRoute === 'login' || currentRoute === 'apply-now') {
    //     if (pageMain.classList.contains('page_main')) {
    //       pageMain.classList.remove('page_main');
    //     }
    //     this.showHeader = false;
    //     this.showFooter = false;
    //   } else {
    //     this.showHeader = true;
    //     this.showFooter = true;
    //   }
    // }
  },
  
};
</script>

<style scoped>
.main.page_main {
  padding-top: 78px;
}
@media screen and (max-width: 991px) {
  .main.page_main {
  padding-top: 63px;
}
}
</style>