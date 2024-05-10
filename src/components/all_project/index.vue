<template>
    <!-- Header Start -->
    <div class="container-fluid hero-header bg-light py-5">
        <div class="container py-5 display-column">
            <div class="col-lg-8 my-0 py-0" style="display: flex; flex-direction: column; gap: 0px">
                <p class="py-0 my-1">Filter</p>
                <h1 class="my-0 animated slideInDown brand-text"><span class="black">All Projects </span></h1>
            </div>
            <div class="row  project-align-items">
                <div class="col-lg-6">
                  <div class="col-12 projectImg">
                    <img src="/src/assets/img/project1.png"/>
                    <div class="flex-row">
                        <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 animated fadeIn pt-md-5 brandImg">
                    <div class="col-12 projectImg pt-md-5">
                        <img src="/src/assets/img/project2.png"/>
                        <div class="flex-row">
                            <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row project-align-items">
                <div class="col-lg-6">
                  <div class="col-12 projectImg">
                    <img src="/src/assets/img/project3.png"/>
                    <div class="flex-row">
                        <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 animated fadeIn pt-md-5  brandImg">
                    <div class="col-12 projectImg pt-md-5">
                        <img src="/src/assets/img/project4.png"/>
                        <div class="flex-row">
                            <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row project-align-items">
                <div class="col-lg-6">
                  <div class="col-12 projectImg">
                    <img src="/src/assets/img/project5.png"/>
                    <div class="flex-row">
                        <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 animated fadeIn pt-md-5  brandImg">
                    <div class="col-12 projectImg pt-md-5">
                        <img src="/src/assets/img/project6.png"/>
                        <div class="flex-row">
                            <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row project-align-items">
                <div class="col-lg-6">
                  <div class="col-12 projectImg">
                    <img src="/src/assets/img/project7.png"/>
                    <div class="flex-row">
                        <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 animated fadeIn pt-md-5  brandImg">
                    <div class="col-12 projectImg pt-md-5">
                        <img src="/src/assets/img/project8.png"/>
                        <div class="flex-row">
                            <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row project-align-items">
                <div class="col-lg-6">
                  <div class="col-12 projectImg">
                    <img src="/src/assets/img/project9.png"/>
                    <div class="flex-row">
                        <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 animated fadeIn pt-md-5  brandImg">
                    <div class="col-12 projectImg pt-md-5">
                        <img src="/src/assets/img/project10.png"/>
                        <div class="flex-row">
                            <p class="bolder">Muzika - </p> <p class=""><span>Online platform for </span> <span>good music</span></p>
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
.project-align-items{
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; */
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
.projectImg{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;

}
.projectImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
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
.flex-row{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 10px;
    text-align: center;
}
.bolder{
    font-weight: 700;
}
.display-column{
    display: flex;
    flex-direction: column;
    gap: 60px;
}
</style>
