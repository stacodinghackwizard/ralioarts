<template>
    <!-- Header Start -->
    <div class="container-fluid hero-header bg-light py-5">
        <div class="container py-5">
            <div class="row g-5 align-items-top">
                <div class="col-lg-5">
                    <h1 class="mb-3 animated slideInDown col-lg-8 brand-text px-0"><span class="black">Branding </span></h1>
                    <p class="animated slideInDown my-5 col-lg-9 px-0">
                        We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. 
                    </p>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">Start a Project</a>
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
}

.border-dark{
    color: black;
    font-weight: 600;
    border: 2px solid black;
}
.bg-light{
    background-color: #F0F5FF !important;
}
.brand-text{
    
    
    font-size: 40px;
    font-weight: 600;
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
    /* padding: 20px; */
    /* display: block; */
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
</style>
