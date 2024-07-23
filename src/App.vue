<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <Loader :isLoading="isLoading"></Loader>
    
    <main>
      <!-- Page content goes here -->
      <router-view></router-view>
    </main>

    <footer>
      <Footer></Footer>
    </footer>

    
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from '../src/components/navbar/index.vue';
import Footer from '../src/components/footer/index.vue';
import Loader from '../src/components/loader/loader.vue';

export default {
  components: {
    Navbar,
    Footer,
    Loader
  },
  data() {
    return {
      isLoading: false,
      scrollTimeout: null
    };
  },
  methods: {
    handleScroll() {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      this.isLoading = true;
      this.scrollTimeout = setTimeout(() => {
        this.isLoading = false;
      }, 300); // Delay before hiding loader (300ms)
    }
  },
  onMounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  onUnmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
/* Your existing styles */
</style>
