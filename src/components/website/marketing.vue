<template>
    <!-- Header Start -->
    <div class="container-fluid hero-header background py-5">
        <div class="container">
            <div class="col-12 pb-5 text-start">
                <h1 class="mb-3 animated slideInDown brand-text px-0"><span class="black">Our criteria for an <br/>exceptional site</span></h1>
            </div>
            <div class="row gap-bottom">
                <div class="col-sm-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="marketImg">

                                <img src="/src/assets/img/time-zone.png" />
                            </div>
                            <h5 class="card-title">Tight-knit team</h5>
                            <p class="card-text">Wherever you are in the world, you’ll feel like we’re right around the corner. With 10 years of experience, our business processes are seamless and time differences don’t matter.</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="marketImg">

                                <img src="/src/assets/img/consulting-servicesIcon.png" />
                            </div>
                            <h5 class="card-title">We watch the clock</h5>
                            <p class="card-text">Wherever you are in the world, you’ll feel like we’re right around the corner. With 10 years of experience, our business processes are seamless and time differences don’t matter.</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="marketImg">

                                <img src="/src/assets/img/hard-work-icon.png" />
                            </div>
                            <h5 class="card-title">
                                Problem solving</h5>
                            <p class="card-text">Wherever you are in the world, you’ll feel like we’re right around the corner. With 10 years of experience, our business processes are seamless and time differences don’t matter.</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="marketImg">

                                <img src="/src/assets/img/smile-icon.png" />
                            </div>
                            <h5 class="card-title">Flexible work terms</h5>
                            <p class="card-text">Just like we stick to a fixed budget, we stay within a set Time and Materials framework. Whatever terms we agree to will depend on your project needs.</p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 py-5 text-center">
                <h1 class="mb-3 animated slideInDown brand-text px-0"><span class="black">we carry out usability <br/>audits and field <br/> supervision</span></h1>
            </div>
        </div>
    </div>
    <!-- Header End -->
</template>

<script>

</script>

<style scoped>
.card{
    border: 0;
}
.marketImg{
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
}
.marketImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.gap-bottom{
    /* column-gap: 15px; */
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
