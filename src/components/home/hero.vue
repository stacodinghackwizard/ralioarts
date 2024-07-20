<template>
    <!-- Header Start -->
    <div class="container-fluid hero-header bg-light py-5">
      <div class="container pt-0 mt-0 ">
        <div class="row g-5 align-items-center pb-3">
          <div class="col-lg-7 pt-5" style="margin-top: 60px;">
            <h1 class="mb-3 animated slideInDown col-lg-9 brand-text px-0">
              <span class="black ">Get your brand the best hands on </span><br>
              <span class="light-blue">Ui/UX Design</span>
            </h1>
            <p class="animated slideInDown space-between develop my-5">
              <span>We design.</span>
              <span>We develop.</span>
            </p>
            <a href="#" class="btn btn-white py-3 px-4 animated slideInDown">
              Get 15min <span class="light-blue btn-blue">FREE</span> Consultation
            </a>
            <div class="message-div mt-3">
              <a class="message-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  class="bi bi-chat"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-lg-5 animated fadeIn pt-0 mt-0">
            <div class="position-relative mt-3 mobile-design" ref="mobileDesign">
              <div
                v-for="(message, index) in messages"
                :key="message.id"
                class="message-container"
                :class="message.position"
                :style="{ top: message.top, left: message.left, right: message.right }"
                @mousedown="startDrag($event, index)"
              >
                <div class="message-avatar">
                  <img :src="message.avatar" alt="avatar" class="avatar" />
                  <span class="message-name">{{ message.name }}</span>
                </div>
                <div class="message">
                  <span class="message-text">{{ message.text }}</span>
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
      messages: [
        { id: 1, text: "I'm Done", name: 'S.T.A', top: '150px', left: '-50px', position: 'left', avatar: new URL('@/assets/img/approach1.png', import.meta.url).href },
        { id: 2, text: "Your connection looks good now!", name: 'TAOFEEK', top: '60px', right: '-20px', position: 'right', avatar: new URL('@/assets/img/approach1.png', import.meta.url).href },
        { id: 3, text: "Looks like you are working great!", name: 'SULAIMON', top: '250px', left: '-130px', position: 'left', avatar: new URL('@/assets/img/approach1.png', import.meta.url).href }
      ],
      originalPositions: [],
      draggingIndex: null,
      offsetX: 0,
      offsetY: 0
    };
  },
  created() {
    // Save the original positions on creation
    this.originalPositions = JSON.parse(JSON.stringify(this.messages));
  },
  methods: {
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
    }
  }
});
</script>
<style scoped>
.bg-light {
  background-color: #f0f5ff !important;
}
.brand-text {
  font-size: 40px;
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
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  height: 400px;
  padding: 20px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.message-container {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  cursor: pointer;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: -20px;
}
.message-name {
  font-size: 12px;
  color: #666;
  position: absolute;
  top: -20px;
  left: 50px;
  margin-left: 5px; /* Adjust to add spacing between avatar and name */
}
.message {
  display: flex;
  flex-direction: column;
  margin-left: 40px; /* Adjust to add spacing between avatar and message text */
}
.message-text {
  font-size: 14px;
  font-weight: 500;
}
</style>
  