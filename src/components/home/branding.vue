<template>
    <!-- Header Start -->
    <div class=" hero-header bg-light py-lg-5">
        <div class="container-fluid px-lg-5   pb-lg-5">
            <div class="row g-0 align-items-top">
                <div class="col-lg-5">
                    <h1 class="mb-3 animated slideInDown col-lg-8 brand-text px-0" ><span class="black">Branding </span></h1>
                    <p class="animated slideInDown mb-5  col-lg-9 px-0" >
                        We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. 
                    </p>
                    <a href="#" class="btn transparent border-dark py-3 px-4 animated slideInDown start-project-btn">Start a Project</a>
                    <div class="brand-footer">
                        <div class="space-between">
                            <a>Logo</a>
                            <a>Typography</a>
                            <a>Visual composition</a>
                        </div>
                        <div class="space-between">
                            <a>Stationary</a>
                            <a>pattern</a>
                        </div>
                        <div class="space-between">
                            <a>Logdkdd</a>
                            <a>Multimedia</a>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-6 animated fadeIn  brandImg">
                    <div class="brandImgPosition">
                        <div class="brandImg1">

                            <img class="img-fluid animated pulse infinite" style="animation-duration: 3s;" src="/src//assets//img/branding-img.png"
                                alt="">
                        </div>
                        <div class="brandImgAbso">
                            <img src="/src//assets/img/branding-img2.png" />
                        </div>
                        <div class="brandImg3">
                            <img src="/src//assets/img/brandingImg3.png" />
                        </div>

                        <div class="case">
                            <a href="#" class="case-link">Check Case Studies</a>
                        </div>
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
.brandImg{
    display: flex;
    justify-content: end;
    align-items: end;
}
@media screen and (max-width: 1000px) {
    .brandImg{
        display: flex;
        justify-content: center;
        padding-top: 40px;
}
}

.brandImgPosition{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;

}
.brandImg1{
    z-index: 2;
    position: relative;
}
.brandImg1 img{
    /* z-index: 2; */
}
.brandImg3{
    position: absolute;
    z-index: 1;
    left: -23%;
    top: 20%;
}
.brandImgAbso{
    position: absolute;
    right: -19%;
    top: 50%;
    z-index: 3;
}
@media screen and (max-width: 800px) {
    .brandImgAbso, .brandImg3 {
        display: none;
        /* position: absolute;
        right: -10%;
        top: 50%; */
    }
    .hero-header{
        padding-bottom: 40px;
    }
}

.border-dark{
    color: black;
    font-weight: 600;
    border: 2px solid black;
}
.bg-light{
    background-color: #F0F5FF !important;
    width: 100%;
    overflow: hidden;
}
.brand-text{
    font-size: 64px;
    font-weight: 600;
}
@media screen and (max-width: 900px) {
   
    .brand-text {
      font-size: 40px !important;
      font-weight: 600;
      padding-top: 40px !important;
    }
}
.black{
    color: #000;
}
.light-blue{
    color: #2866E0;
}
.space-between{
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    color: #ACB0B8;
    font-size: 15px;
}
.develop{
    font-weight: 100;
}
.btn-white{
    background-color: #fff;
}
.btn-blue{
    font-weight: 600;
}
.brand-footer{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 10px;
}
.brand-footer a,  .case a{
    font-size: 18px;
}
.case{
    display: flex;
    justify-content: end;
    margin-top: 60px;
}
.case-link{
    color: #2866E0;
    border-bottom: 2px solid #2866E0;
}

/* Hover animation for the Start a Project button */
.start-project-btn {
    position: relative;
    overflow: hidden;
    color: black; 
    background-color: transparent;
    transition: color 0.3s ease;
    padding: 12px 24px;
    font-weight: 600;
    border: 2px solid black;
    text-align: center;
    display: inline-block;
}

.start-project-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: #2866E0;  */
    color: #fff !important;
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: left;
    z-index: 0;
}

.start-project-btn:hover::before {
    transform: scaleX(1);
    
}

.start-project-btn:hover {
    /* color: #fff !important;  */
  
    

}

.start-project-btn span {
    position: relative;
    z-index: 1;
}

</style>
