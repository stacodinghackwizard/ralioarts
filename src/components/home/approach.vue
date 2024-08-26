<template>
    <!-- Header Start -->
    <div class=" hero-header background py-5">
        <div class="container-fluid px-lg-5 ">
          <div class="py-5">

            <div class="col-lg-12 px-0 text-center">
                <div class="text-center display-center">
                    <h6 class="mb-3 animated slideInDown  approach-text px-0">Our Approach </h6>
                    <p class="animated slideInDown text-center col-md-7  pt-3 px-0" style="font-size: 18px;">
                      We blend creativity with strategy, starting with understanding your needs and goals. Through collaborative brainstorming and meticulous planning, we prioritize user experience and innovative design to deliver stunning and high-performing projects from concept to execution.
                    </p>
                  
                </div>
            </div>
          </div>
         
          <section>
           
            <div class="cards-wrapper card-group  card2">
              <div class="card">
                <div class="card-img-top">
                  <img src="/src/assets/img/search.png" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><strong>Research</strong></h5>
                  <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. </p>
                  
                </div>
              </div>
              <div class="card">
                <div class="card-img-top">
                  <img src="/src/assets/img/strategize-icon.png" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><strong>Strategize</strong></h5>
                  <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. </p>
                
                </div>
              </div>
              <div class="card">
                <div class="card-img-top">
                  <img src="/src/assets/img/implement-icon.png" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><strong>Implement</strong></h5>
                  <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.</p>
                  
                </div>
              </div>
              <div class="card">
                <div class="card-img-top">
                  <img src="/src/assets/img/search.png" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><strong>Research</strong></h5>
                  <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. </p>
                  
                </div>
              </div>
              <div class="card">
                <div class="card-img-top">
                  <img src="/src/assets/img/strategize-icon.png" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><strong>Strategize</strong></h5>
                  <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. </p>
                
                </div>
              </div>
              <div class="card">
                <div class="card-img-top">
                  <img src="/src/assets/img/implement-icon.png" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><strong>Implement</strong></h5>
                  <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.</p>
                  
                </div>
              </div>
              
            </div>
          </section>
        </div>
    </div>
    <!-- Header End -->
</template>

<script>

</script>

<style scoped>
.background{
    background-color: #FFF;
}

.card {
  border: none;
  border-radius: 0;
  /* box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18); */
}
.carousel-inner {
  padding: 1em;
}
.card-img-top{
  /* background-color: #e1e1e1; */
  height: 60px;
  width: 100%;
  border-radius: 20px !important;
  text-align: left;
  justify-content: left;
  display: flex;
  align-items: left;
  padding-left: 15px;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.carousel-control-prev span,
.carousel-control-next span {
  width: 1.5rem;
  height: 1.5rem;
}
.card-title{
  font-size: 40px;
}
.card-text{
  font-size: 18px;
}
@media screen and (min-width: 577px) {
  .cards-wrapper {
    display: flex;
  }
  .card {
    margin: 0 0.5em;
    width: calc(100% / 2);
  }
  .image-wrapper {
    height: 20vw;
    margin: 0 auto;
  }
}
@media screen and (max-width: 576px) {
  .card:not(:first-child) {
    display: none;
  }
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
}


.approach-text{
    
    
    font-size: 64px;
    font-weight: 600;
}
@media screen and (max-width: 900px) {
   
   .approach-text {
     font-size: 40px !important;
     font-weight: 600;
     padding-top: 40px !important;
   }
}
.black{
    color: #000;
}
.brand-text{
    
    
    font-size: 40px;
    font-weight: 600;
}
.display-center{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  min-width: 19rem;
  cursor: pointer;
  border-radius: 5px !important;
}
.card2 .card:hover{
  background-color: #F1F7FE;
  transition: all 0.5s ease-in-out;
}

</style>
