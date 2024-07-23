<template>
    <!-- Header Start -->
    <div class="container-fluid hero-header background py-5">
        <div class="container">
            <div class="col-12 pb-5 text-center">
                <h1 class="mb-3 animated slideInDown brand-text px-0"><span class="black">Mobile <br/>Applications </span></h1>
            </div>
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 pr-md-5">
                    <div class="pr-md-5">

                        <h6 class="mb-3 animated slideInDown  brand-text px-0">Mobile Applications</h6>
                        <p class="animated slideInDown  mb-5 pt-3 px-0">
                            Ralioarts doesn’t do cookie-cutter solutions. Every project involves stages of target audience research and prototype testing. The result? A product that’s perfectly suited to your users.
                        </p>
                        <a href="#" class="btn transparent border-dark read-more py-3 px-4 animated slideInDown">Read more</a>
                        
                    </div>
                </div>
                <div class="col-lg-6 animated fadeIn  brandImg">
                    <div class="brandImgPosition">
                        <div class="brandImg1">

                            <img class="img-fluid animated pulse infinite" style="animation-duration: 3s;" src="/src//assets//img/serviceMobile1.png"
                                alt="">
                        </div>
                        <!-- <div class="brandImgAbso">
                            <img src="/src//assets/img/branding-img2.png" />
                        </div>
                        <div class="brandImg3">
                            <img src="/src//assets/img/brandingImg3.png" />
                        </div> -->

                        
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

.read-more{
    border-radius: 50px;
}
.background{
    background-color: #FFF;
}
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
    /* position: relative; */
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
    
    
    font-size: 30px;
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
    color: #E19183;
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
    padding-right: 55px;
}
.case-link{
    color: #000;
    border-bottom: 2px solid #000;
}
</style>
