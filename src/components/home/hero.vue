<template>
  <!-- Header Start -->
  <div class=" hero-header bg-light py-5">
    <div class="container-fluid px-lg-5">
      <div class="row g-5 align-items-center">
        <div class="col-lg-7 pt-0 mt-0">
          <h1 class="mb-3 animated slideInDown brand-text px-0">
            <span class="">Get your brand <br/> the best hands on</span><br>
            <transition name="slide-fade">
               <span class="changeText typeContent light-blue">{{ displayText }}</span>
            </transition>
          </h1>
          <p class="animated slideInDown space-between develop my-5">
            <span>{{ currentDevelopText[0] }}</span>
            <span>{{ currentDevelopText[1] }}</span>
            <span>{{ currentDevelopText[2] }}</span>
          </p>
          <a href="#" class="btn btn-white py-3 px-4 animated slideInDown"  style="font-size: 18px;">
            Get 15min <span class="light-blue btn-blue">FREE</span> Consultation
          </a>
          <div class="message-div mt-5">
            <a class="message-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-chat" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="col-lg-5 animated imgContainer fadeIn pt-0 mt-5 d-none d-lg-block">
          <div class="position-relative mt-3 mobile-design float-end" ref="mobileDesign">
            <div
              v-for="(message, index) in currentMessages"
              :key="message.id"
              class="message-container"
              :class="message.position"
              :style="{ top: message.top, left: message.left, right: message.right}"
              @mousedown="startDrag($event, index)"
            >
              <div class="message-avatar">
                <img :src="message.avatar" alt="avatar" class="avatar" :style="{ right: message.avatarRight, left: message.avatarLeft }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->
</template>


<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      


      wordList: ["Ui/Ux Design", "Visual Branding", "Web Design"],
      displayText: "",
      wordIndex: 0,
      charIndex: 0,
      isDeleting: false,
      currentIndex: 0,
      typingSpeed: 150, // Speed of typing each character
      pauseDuration: 1000, // Pause duration before switching content
      currentInterval: null,
      brandTextContent: [
        { black: 'Get your brand the best hands on', lightBlue: 'Ui/Ux Design' },
        { black: 'Boost your brand with expert', lightBlue: 'Visual Branding' },
        { black: 'Enhance your brand with top-notch', lightBlue: 'Web Design' }
      ],
      developTextContent: [
        ['We design.', 'We develop.'],
        ['You Ideals.', 'We design.', 'We develop'],
        ['You Ideals.', 'We design.', 'We develop']
      ],
      messagesContent: [
        [
          { id: 1, text: "I'm Done", name: 'Qoreeb', top: '200px', starNone: 'none', avatarLeft: '-15px', avaterNameLeft: '80px', left: '-50px', position: 'left', avatar: new URL('@/assets/img/qoreebImg.svg', import.meta.url).href },
          // { id: 2, text: "Your connection looks good now!", name: 'Tes', starNone: 'none', avaterNameRight: '0px', backgroundColor: '#2F3676', top: '60px', right: '-40px', avatarRight: '45px', position: 'right', avatar: new URL('@/assets/img/TesImg.svg', import.meta.url).href },
          { id: 3, text: "Wow!!! 🥰, I love this you guys are amazing", name: 'S.T.A', avatarLeft: '-25px', avaterNameLeft: '50px',  top: '400px', left: '-30px', position: 'left', avatar: new URL('@/assets/img/clientImg.svg', import.meta.url).href }
        ],
        [
          { id: 4, text: "I'm Done", name: 'Qoreeb', top: '-7px', starNone: 'none', avatarLeft: '-15px', avaterNameLeft: '50px', backgroundColor: '#447F86', left: '-10px', position: 'left', avatar: new URL('@/assets/img/qoreebImg.svg', import.meta.url).href },
          // { id: 5, text: "Your connection looks good now!", name: 'Tes', starNone: 'none', avaterNameRight: '0px', backgroundColor: '#2F3676', top: '250px', right: '-12px', avatarRight: '45px', position: 'right', avatar: new URL('@/assets/img/TesImg.svg', import.meta.url).href },
          { id: 6, text: "Wow!!! 🥰, I love this you guys are amazing", name: 'S.T.A', avatarLeft: '-25px', avaterNameLeft: '50px',  top: '400px', left: '-60px', position: 'left', avatar: new URL('@/assets/img/clientImg.svg', import.meta.url).href }
        ],
        [
          { id: 7, text: "I'm Done", name: 'Qoreeb', top: '400px', starNone: 'none', avatarLeft: '-15px', avaterNameLeft: '50px', backgroundColor: '#447F86', left: '-40px', position: 'bottom', avatar: new URL('@/assets/img/qoreebImg.svg', import.meta.url).href },
          { id: 8, text: "Your connection looks good now!", name: 'Tes', starNone: 'none', avaterNameRight: '0px', backgroundColor: '#2F3676', top: '-7px', left: '50px', avatarRight: '-9px', position: 'top', avatar: new URL('@/assets/img/TesImg.svg', import.meta.url).href },
          // { id: 9, text: "Wow!!! 🥰, I love this you guys are amazing", name: 'S.T.A', avatarLeft: '-190px',   top: '400px', right: '0px', position: 'right', avatar: new URL('@/assets/img/clientImg.svg', import.meta.url).href }
        ]
      ],
     
    };
  },
  computed: {
    currentBrandText() {
      return this.brandTextContent[this.currentIndex];
    },
    currentDevelopText() {
      return this.developTextContent[this.currentIndex];
    },
    currentMessages() {
      return this.messagesContent[this.currentIndex];
    }
  },
  mounted() {
    this.startTypingAnimation();
  },
  beforeUnmount() {
    clearInterval(this.currentInterval);
  },
  methods: {
    startTypingAnimation() {
      this.currentInterval = setInterval(this.typingEffect, this.typingSpeed);
    },
    typingEffect() {
      const currentWord = this.wordList[this.wordIndex];
      if (this.isDeleting) {
        this.displayText = currentWord.substring(0, this.charIndex--);
        if (this.charIndex < 0) {
          this.isDeleting = false;
          this.wordIndex = (this.wordIndex + 1) % this.wordList.length;
          this.charIndex = 0;
          clearInterval(this.currentInterval);
          this.currentInterval = setTimeout(this.startTypingAnimation, this.pauseDuration);
        }
      } else {
        this.displayText = currentWord.substring(0, this.charIndex++);
        if (this.charIndex === currentWord.length) {
          this.isDeleting = true;
          clearInterval(this.currentInterval);
          this.currentInterval = setTimeout(this.startTypingAnimation, this.pauseDuration);
          this.changeContent(); // Change content after typing is complete
        }
      }
    },
    changeContent() {
      this.currentIndex = (this.currentIndex + 1) % this.messagesContent.length;
    },
    startDrag(event, index) {
      this.draggingIndex = index;
      const message = this.messages[index];
      this.offsetX = event.clientX - parseInt(message.left || message.right || 0);
      this.offsetY = event.clientY - parseInt(message.top);
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    onDrag(event) {
      if (this.draggingIndex === null) return;

      const mobileDesign = this.$refs.mobileDesign;
      const message = this.messages[this.draggingIndex];
      const containerRect = mobileDesign.getBoundingClientRect();
      const elementWidth = 200; // Approximate width of the message container
      const elementHeight = 60; // Approximate height of the message container

      let newLeft = event.clientX - this.offsetX;
      let newTop = event.clientY - this.offsetY;

      // Constrain within the container
      newLeft = Math.max(-50, Math.min(containerRect.width - elementWidth, newLeft));
      newTop = Math.max(-20, Math.min(containerRect.height - elementHeight, newTop));

      if (message.position === 'left') {
        message.left = `${newLeft}px`;
      } else {
        message.right = `${containerRect.width - newLeft - elementWidth}px`;
      }
      message.top = `${newTop}px`;
    },
    stopDrag() {
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
      this.draggingIndex = null;
    },
    typeText() {
      if (this.isReverseTyping) {
        this.displayText = this.displayText.slice(0, this.displayText.length - 1);
        if (this.displayText.length === 0) {
          this.wordIndex = 0;
          this.isReverseTyping = false;
          this.i++;
          if (this.i === this.wordList.length - 1) {
            this.i = 0;
          }
        }
      } else {
        this.displayText += this.wordList[this.i][this.wordIndex++];
        if (this.wordIndex === this.wordList[this.i].length) {
          this.isReverseTyping = true;
        }
      }
    },
  },

  beforeDestroy() {
    clearInterval(this.typingInterval);
  },
});
</script>
<style scoped>
.semi-bold{
 
  color: #1F2123;
  font-size: 54px;
}
@media screen and (max-width: 900px) {
    .hero-header{
      min-height: 100vh;
      width: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
    }
    .hero-header .container{
      /* padding-top: 55px; */
    }
    .brand-text {
      font-size: 40px !important;
      font-weight: 600;
      padding-top: 40px !important;
    }
}



.fa-star {
  color: green;
}
.bg-light {
  background-color: #f0f5ff !important;
}
.brand-text {
  font-size: 64px;
  font-weight: 600;
}
.black {
  color: #000;
}
.light-blue {
  color: #2866e0;
}
.space-between {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  color: #acb0b8;
  font-size: 15px;
}
.develop {
  font-weight: 100;
  font-size: 24px;
  transition: all 0.5s ease-in-out;
}
.btn-white {
  background-color: #fff;
}
.btn-blue {
  font-weight: 600;
}
.message-div {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 50px;
}
.mobile-design {
  /* background-color: ; */
  background-image: url('/src/assets/img/mobileImgNew.png');
  background-position: top bottom;
  background-attachment: initial;
  background-repeat: no-repeat;
  
  width: 70%;
  height: 650px;
  
  /* position: relative; */
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  transition: all 0.5s ease-in-out;
}
.imgContainer{}
.message-container {
  /* display: flex;
  align-items: center;
  
  gap: 10px;
  color: #fff; */
  /* padding: 10px; */
  /* margin-left: 0 !important;
  padding-left: 0 !important; */
  
  /* border-radius: 10px; */
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  position: absolute;
  cursor: pointer;
  /* <!-- transform: rotate(15deg); --> */
}
.message-container.left {
  left: 10px;
}
.message-container.right {
  right: 10px;
}
.message-avatar {
  display: flex;
  align-items: center;
}
.avatar {
  width: 140px;
  height: 90px;
  
  position: absolute;
  top: -40px;
}
.avatar-right {
  right: 5px;
}
.message-name {
  font-size: 12px;
  color: #666;
  position: absolute;
  top: -20px;
  /* left: 50px; */
  margin-left: 5px;
}
.message {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}
.message-text {
  font-size: 14px;
  font-weight: 500;
}



.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 1s ease-in-out; 
}
.slide-fade-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}



.auto-typing-container {
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  left: 10%;
  font-size: 20px;
}
.typeContentH1 {
  color: rgb(255, 183, 0);
}
.typeContent {
  /* color: rgb(255, 255, 255); */
}
.typeContent::after {
  content: "|";
}
</style>
