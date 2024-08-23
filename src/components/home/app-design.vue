<template>
    <!-- Header Start -->
     <div class="background">

         <div class="container-fluid appImg hero-header mt-lg-5  ">
             <div class="container py-5">
                 <div class="row g-0 align-items-top">
                     <div class="col-lg-6 pt-5 px-0 ">
                         <h1 class="mb-3  animated slideInDown brand-text col-lg-8 ml-0 pl-0"><span class="black">Mobile App Design</span></h1>
                         <p class="animated col-lg-9 px-0 slideInDown mb-5">
                             We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using.
                         </p>
                         <a href="#" class="btn transparent border-dark py-3 px-4 animated slideInDown">Start a Project</a>
                         <div class="brand-footer">
                             <div class="space-between">
                                 <a>Logo</a>
                                 <a>Typography</a>
                                 <a>Visual composition</a>
                             </div>
                             <div class="space-between">
                                 <a>Stationary</a>
                                 <a>Pattern</a>
                             </div>
                             <div class="space-between">
                                 <a>Logdkdd</a>
                                 <a>Multimedia</a>
                             </div>
                         </div>
                         <div class="case">
                             <a href="#" class="case-link">Check Case Studies</a>
                         </div>
                     </div>
                     <!-- <div class="col-lg-6  pr-0 mr-0 right-content animated fadeIn">
                         <img class="img-fluid animated pulse infinite" src="/src/assets/img/mobileDesign.png" alt="">
                     </div> -->
                 </div>
             </div>
         </div>
     </div>
    <!-- Header End -->
</template>

<script>
export default {
    // Your script content (if any)
}
</script>

<style scoped>
.background {
    background-color: #F2FFF5;
    width: 100%;
    overflow: hidden; /* Ensure no overflow */
}
.appImg{
    background-image: url('/src/assets/img/mobileDesign.png');
    background-repeat: no-repeat;
    background-position: right;
    display: block;
    
}
@media (max-width: 1000px) {
    .appImg{
        background-image: url('');
        background-repeat: no-repeat;
        background-position: right;
        display: block;
    
    
    }
}

.container-fluid.no-padding {
    padding-right: 0;
}

.row.g-0 {
    margin: 0; 
}

.left-content {
    /* padding-right: ;  */
}

.right-content {
    display: flex;
    justify-content: flex-end; 
    align-items: flex-end;
    padding-right: 0; 
    margin-right: 0;
}

.right-content img {
    max-width: 100%;
    height: auto;
}

@media (max-width: 1000px) {
    .right-content {
        justify-content: center; 
    }
}

@media (max-width: 800px) {
    .brandImgAbso,
    .brandImg3 {
        display: none; 
    }
}

.border-dark {
    color: black;
    font-weight: 600;
    border: 2px solid black;
}

.bg-light {
    background-color: #F0F5FF !important;
}

.brand-text {
    font-size: 40px;
    font-weight: 600;
}

.black {
    color: #000;
}

.light-blue {
    color: #2866E0;
}

.space-between {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    color: #64AB70;
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

.brand-footer {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 10px;
}

.case {
    margin-top: 60px;
}

.case-link {
    color: #000;
    border-bottom: 2px solid #000;
}
</style>
