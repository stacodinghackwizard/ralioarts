<template>
    <!-- Header Start -->
    <div class="container-fluid hero-header background py-5">
        <div class="container">
            
            <div class="row g-5 py-5 align-items-center">
                <div class="col-lg-6 animated fadeIn  brandImg">
                    <div class="brandImgPosition">
                        <div class="brandImg1">

                            <img class="img-fluid animated pulse infinite" style="animation-duration: 3s;" src="/src//assets//img/aboutUsImg1.png"
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
                <div class="col-lg-6 pl-md-4  brandImg">
                    <div class="brandImgPosition pt-md-3 mt-md-3">
                        <div class="brandImg1 pt-md-5 mt-md-5">

                            <img class="img-fluid animated pulse infinite" style="animation-duration: 3s;" src="/src//assets//img/aboutUsImg2.png"
                                alt="">
                        </div>

                        <!-- <h6 class="mb-3 animated slideInDown  brand-text px-0">Website and platsform </h6>
                        <p class="animated slideInDown  mb-5 pt-3 px-0">
                            In our team, Developer work alongside designers, This is crucial in creating fast and responsive websites that would excite the audience
                        </p>
                        <a href="#" class="btn transparent border-dark read-more py-3 px-4 animated slideInDown">Read more</a> -->
                        
                    </div>
                </div>
                
            </div>

            <div class="py-5">

                <div class="col-lg-8 col-md-7 col-sm-12 px-0 content-center">
                    <div class="">
                        <h6 class="mb-3 animated slideInDown  brand-text px-0">Simply put, we dare <br/>
                            what others don't </h6>
                        <p class="animated slideInDown  py-4 px-0">
                            We make things, and we're awesome at it . Cuberto is a tight-knit team of experts who are ready to tackle the most intricate puzzles when it comes to websites and mobile apps development. We love what we do and we bet on the success of each and every project we undertake.

                        </p>
                        <p class="animated slideInDown    px-0">
                            
Mainstream? No, thanks. Because it's not just work, it's passion . It's not just clients, it's people. Every project we take on is important to us, and every client is a big deal. We take care of your projects, your deadlines, and your nerves no matter what, and that’s a promise.
                        </p>
                    
                    </div>
                </div>
            </div>
            <div class="col-12 Img py-5">
                <img src="/src/assets/img/aboutUsImg3.png" />
            </div>
            <div class="col-12 Img py-5">
                <img src="/src/assets/img/aboutUsImg4.png" />
            </div>
            <div class="col-12 py-5 text-left px-0">
                <h1 class="mb-3 animated slideInDown brand-text px-0"><span class="black">We work with people <br> from all over the world</span></h1>
            </div>
        </div>
    </div>
    <!-- Header End -->
</template>

<script>

</script>

<style scoped>
.Img{
    width: 100%;
    padding: 0;
    margin: 0;
}
.Img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    padding: 0;
    margin: 0;
}

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
