<template>
  <section>

    <div class="cards-wrapper cards-container card2" style="padding-top: 100px; padding-bottom: 100px;"
    ref="cardsContainer">
      <!-- <button @click="scrollLeft" class="scroll-button left">&lt;</button> -->
      
        <div
          class="card"
          v-for="(card, index) in cards"
          :key="index"
          :class="{ 'highlighted': currentIndex === index }"
          @click="moveToCenter(index)"
        >
          <div class="avatar" :style="{ backgroundImage: 'url(' + card.avatar + ')' }"></div>
          <h3 class="mt-5">{{ card.name }}</h3>
          <p>{{ card.quote }}</p>
          <div class="display-flex2">

            <p><strong>{{ card.title }}</strong></p>
            <p> <i class="fa fa-star" aria-hidden="true"></i> {{ card.rating }}</p>
          </div>
        </div>
     
      <!-- <button @click="scrollRight" class="scroll-button right">&gt;</button> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardList',
  data() {
    return {
      cards: [
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      {  avatar: new URL('@/assets/img/sheriff-profile.png', import.meta.url).href, name: 'Sherif', quote: '“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”', title: 'C.E.O Autocredit', rating: '5.0' },
      ],
      currentIndex: 1,
      isDragging: false,
      startX: 0,
      scrollLeft: 0
    };
  },
  methods: {
    scrollLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateScrollPosition();
      }
    },
    scrollRight() {
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
        this.updateScrollPosition();
      }
    },
    moveToCenter(index) {
      this.currentIndex = index;
      this.updateScrollPosition();
    },
    updateScrollPosition() {
      const container = this.$refs.cardsContainer;
      const cardWidth = container.clientWidth / 3;
      const targetScrollLeft = this.currentIndex * cardWidth - cardWidth;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    },
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.pageX || event.touches[0].pageX;
      this.scrollLeft = this.$refs.cardsContainer.scrollLeft;
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
      document.addEventListener('touchend', this.stopDrag);
    },
    onDrag(event) {
      if (!this.isDragging) return;
      const x = event.pageX || event.touches[0].pageX;
      const walk = (x - this.startX) * 2; // Adjust the multiplier for faster/slower scrolling
      this.$refs.cardsContainer.scrollLeft = this.scrollLeft - walk;
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('touchmove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
      document.removeEventListener('touchend', this.stopDrag);
      this.updateCurrentIndex();
    },
    updateCurrentIndex() {
      const container = this.$refs.cardsContainer;
      const cardWidth = container.clientWidth / 3;
      const middleScroll = container.scrollLeft + container.clientWidth / 2;
      this.currentIndex = Math.floor(middleScroll / cardWidth);
      this.updateScrollPosition();
    }
  }
};
</script>

<style scoped>
.fa-star {
  color: #FFC564;
}
.cards-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards-container {
  display: flex;
  overflow: hidden; /* Hide the scrollbar */
  scroll-snap-type: x mandatory;
  gap: 20px;
  padding: 20px;
  background-color: #F1F7FE;
  cursor: grab; 
  user-select: none; 
  width: 100%;
}

.cards-container:active {
  cursor: grabbing;
}

.card {
  
  padding: 20px;
 
  margin: 10px;
  border-radius: 18px;
  /* box-shadow: 0 2px 5px rgba(0,0,0,0.1); */
  background: rgb(238, 240, 243); /* Default background color */
  text-align: center;
  scroll-snap-align: center;
  transition: background 0.3s ease, transform 0.3s ease;
}

.card.highlighted {
  background: white; 
  transform: scale(1.05); /* Slightly larger scale */
}



.avatar {
  position: absolute; /* Position absolute for 50% above */
  top: -50px; /* 50% above the card */
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin: 0 auto 20px;
  border: 3px solid white; /* Optional: Add border to the avatar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add shadow to the avatar */
}

h3 {
  margin: 10px 0;
}

p {
  margin: 5px 0;
}

strong {
  display: block;
  margin-top: 10px;
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #000;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 5px;
  opacity: 0.7;
}

.scroll-button:hover {
  opacity: 1;
}

.scroll-button.left {
  left: 10px;
}

.scroll-button.right {
  right: 10px;
}




:root {
  --page-margin: min(2rem, 5vw);
  color: #444;
}

section {
  display: grid;
  grid-template-columns: var(--page-margin) [center-start] 1fr [center-end] var(--page-margin);
  
  & > * {
    grid-column: center;
  }
}

.cards-wrapper {
  grid-column: center-start / -1;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  overflow-x: auto; /* Allow horizontal scrolling */
  overflow-y: hidden; /* Hide vertical scrollbar, just in case */
  padding-bottom: 1rem;
  padding-right: var(--page-margin);
  -webkit-overflow-scrolling: touch; /* Enable smooth scrolling */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

.cards-wrapper::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}

.card2 .card {
  display: grid;
  place-content: center;
  background-color: #fff;
  border: 1px solid #E3EAF3 !important;

  /* color: #15928A; */
  /* font-size: 1.5rem; */
  height: 20rem;
  min-width: 21rem;
  cursor: pointer;
 
}
.display-flex2{
  display: flex;
  
  justify-content: space-between !important;
  align-items: center !important;
  text-align: center !important;
  padding-top: 30px;
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;
}


</style>
