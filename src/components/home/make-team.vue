<template>
    <!-- Header Start -->
    <div class="hero-header bg-light">
        <div class="row make-team">
            <div class="col-lg-6 col-sm-12 p-0 m-0">
                <img class="makeTeamImg" src="/src/assets/img/smallTeam.svg"/>
            </div>
            <div class="col-lg-6 col-sm-12 p-0 m-0">
                <div class="content-center bg-white px-md-4 px-sm-5 px-lg-5">
                    <div class="content-wrapper ">
                        <h1 class="heading mb-3 px-0 col-lg-10 col-sm-12">We make it all <br/>make sense</h1>
                        <p class="maketeam-content col-lg-11 px-0">
                            We take your brand to where it needs to be through Visuals, we are everything that happens between your first idea to a product everyone is using. We achieve this by our tested and proven approach. We will like to help you on your next project.
                        </p>
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
.row-wrap{
    flex-wrap: wrap;
    gap: 0 !important;
}
.bg-light{
    background-color: #F0F5FF !important;
}
.maketeam-content{
    
    /* width: 400px; */
    line-height: 35px;
    
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
.make-team{
    width: 100%;
    /* height: 550px; */
    /* border-top: 1px solid black; */
    /* border-bottom: 2px solid red; */
    overflow: hidden
}


.make-team {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
}

.makeTeamImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

@media (max-width: 992px) {
    .make-team,
    .makeTeamImg {
        height: auto;
    }

    .makeTeamImg img {
        height: auto;
        width: 100%;
    }

    .content-center {
        height: auto;
        padding: 50px;
    }
    .heading {
        font-size: 40px !important;
        font-weight: 600 !important;
    
    }
}

.content-center .heading {
    font-size: 56px;
    font-weight: 600;
   
}


.px-lg-5{
    max-width: 100%;
    padding: ;
    
}
/* .content-center .heading{
    font-weight: 700;
    font-size: 38px;
} */
/* .content-wrapper p{
    font-size: 16px;
    font-weight: 200;
} */
.col-lg-6{
    padding: 0;
    margin: 0;
}


.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: -20px;
  }


 

@media (max-width: 768px) {
    .content-center .heading {
        font-size: 24px;
        padding-left: 10px !important;
    }
}

@media (max-width: 576px) {
    .content-center .heading {
        font-size: 20px;
        padding-left: 10px !important;
    }

    /* .content-center {
        padding: 30px;
        text-align: justify;
    } */
}
</style>
