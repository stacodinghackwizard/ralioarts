<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-3">
        <div class="column">
          <div class="card card-blue clickable-card" @click="selectImage('/public/workLogo1.png')">
            <div class="card-body card-body-center">
              <!-- Logo Container -->
              <div class="logo-container">
                <!-- Your logo image -->
                <img src="/src/assets/img/workLogo1.png" alt="Logo" />
              </div>
            </div>
          </div>
          <div class="card clickable-card" style="background-color: #DCE2C6;" @click="selectImage('/public/crownbirth.png')">
            <div class="card-body card-body-center">
              <!-- Logo Container -->
              <div class="logo-container">
                <!-- Your logo image -->
                <img src="/src/assets/img/crownbirth.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 px-5 middle-card" style="display: flex; align-items: center;">
        <div class="card-body column-left">
          <div class="pb-5">
            <!-- Transition wrapper for image animation -->
            <transition name="fade">
              <!-- Middle card displays the selected image -->
              <img v-if="selectedImage" :src="selectedImage" alt="Selected Logo" key="selectedImage" />
            </transition>
          </div>
          <p class="card-text">“We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.”</p>
          <a href="#" class="btn transparent border-dark px-4 py-3 animated slideInDown">Check out</a>
        </div>
      </div>

      <div class="col-md-3">
        <div class="column">
          <div class="card clickable-card" style="background-color: #FFF1EF;" @click="selectImage('/public/birdViewLogo.png')">
            <div class="card-body card-body-center">
              <!-- Logo Container -->
              <div class="logo-container">
                <!-- Your logo image -->
                <img src="/src/assets/img/birdViewLogo.png" alt="Logo" />
              </div>
            </div>
          </div>
          <div class="card clickable-card" style="background-color: #282A65;" @click="selectImage('/public/autocreditLogo.png')">
            <div class="card-body card-body-center">
              <!-- Logo Container -->
              <div class="logo-container">
                <!-- Your logo image -->
                <img src="/src/assets/img/autocreditLogo.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  data() {
    return {
      // Set initial image to be displayed in the middle card
      selectedImage: '/src/assets/img/crownbirth2.png',
    };
  },
  methods: {
    // Method to update the selected image
    selectImage(image) {
      this.selectedImage = ''; // Clear the image first to trigger the fade-out
      setTimeout(() => {
        this.selectedImage = image; // Set the new image after a short delay
      }, 300); // Adjust the delay to match the transition duration
    },
  },
};
</script>

<style scoped>
/* Your CSS styles go here */
.card {
  border-radius: 0px;
  border: 0px;
}

.card p {
  line-height: 1.5;
}

.card img {
  width: 100%;
}

.card__content {
  width: 100%;
}

.card__action,
.card__copy,
.card__header {
  background-color: white;
  margin: 0 2rem;
  padding: 1rem;
  position: relative;
}

.card__header {
  min-width: 25%;
}

.card__media {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.card__media img {
  min-height: 100%;
  width: 100%;
}

.card__title,
.card__subtitle {
  text-align: center;
}

.card__title {
  font-size: 1.115rem;
  margin-bottom: 0;
  text-transform: uppercase;
}

.card__subtitle {
  color: #999;
  font-size: 1.15rem;
  font-style: italic;
  font-weight: 100;
  margin: 0.5rem 0;
}

.column {
  display: flex;
  flex-direction: column;
}

.column-left {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.bg-blue {
  background-color: #0e2c5a;
  width: 100%;
  height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-red {
  background-color: red;
  height: 100% !important;
  width: 100%;
}

.card-body-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.logo-container {
  text-align: center;
}

.logo-container img {
  max-width: 100%;
  max-height: 100%;
}

.card-blue {
  background-color: #200e5a;
}

/* Add cursor pointer to clickable cards */
.clickable-card {
  cursor: pointer;
}

/* Fade transition effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
