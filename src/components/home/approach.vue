<template>
    <!-- Header Start -->
    <div class="container-fluid hero-header background py-5">
        <div class="container">
          <div class="">
            <h1 class="py-5 animated slideInDown col-lg-8 approach-text px-0"><span class="black">Our Approach</span></h1>
          </div>
          <div class="card-group gap-5">
            <div class="card">
              <div class="card-img-top">
                <img src="/src/assets/img/search.png" />
              </div>
              <div class="card-body px-0 pt-5 col-md-9">
                <h5 class="card-title"><strong>Research</strong></h5>
                <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. </p>
                
              </div>
            </div>
            <div class="card">
              <div class="card-img-top">
                <img src="/src/assets/img/strategize-icon.png" />
              </div>
              <div class="card-body px-0 pt-5 col-md-9">
                <h5 class="card-title"><strong>Strategize</strong></h5>
                <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. </p>
               
              </div>
            </div>
            <div class="card">
              <div class="card-img-top">
                <img src="/src/assets/img/implement-icon.png" />
              </div>
              <div class="card-body px-0 pt-5 col-md-9">
                <h5 class="card-title"><strong>Implement</strong></h5>
                <p class="card-text">We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.</p>
                
              </div>
            </div>
          </div>
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
  background-color: #e1e1e1;
  height: 160px;
  width: 100%;
  border-radius: 20px !important;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
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
    
    
    font-size: 40px;
    font-weight: 600;
}
.black{
    color: #000;
}
</style>
