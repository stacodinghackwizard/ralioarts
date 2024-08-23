<template>
    <!-- Header Start -->
    <div class="hero-header make-team bg-light">
        
            <div class="row align-items-center">
                <div class="col-lg-6 col-sm-12 col-12">
                   <div class="makeTeamImg">
                        <img src="/src//assets/img/make-team.png" />
                   </div>
                </div>
                <div class="col-lg-6 col-sm-12 col-12">
                    <div class="content-center bg-white">
                        <div class="content-wrapper px-5">
                            <h1 class="heading col-lg-8 mb-3 px-0">We make it all make sense</h1>
                            <p>
                                We take you to where you need to be through Visuals, we are everything that happens between your first idea to a product everyone is using. We achieve this by our tested and proven approach. We will like to help you on your next project.
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
    height: 60vh;
    /* border-top: 1px solid black; */
    /* border-bottom: 2px solid red; */
    overflow: hidden
}
.makeTeamImg{
    width: 100%;
    height: 60vh;
    /* border: 1px solid green; */
}

.makeTeamImg img{
    
    background-repeat: no-repeat;
    height: 60vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */
}
.content-center{
    width: 100%;
    height: 60vh;
    /* border: 1px solid blue; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.content-wrapper {
    max-width: 90%;
    
}
.content-center .heading{
    font-weight: 700;
    font-size: 38px;
}
.content-wrapper p{
    font-size: 16px;
    font-weight: 200;
}
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


  @media (max-width: 992px) {
    .make-team, .makeTeamImg {
        height: auto;
    }

    .makeTeamImg img {
        height: auto;
        width: 100%;
    }

    .content-center {
        height: auto;
        padding: 40px;
    }

    .content-wrapper {
        max-width: 100%;
    }

    .content-center .heading {
        font-size: 28px;
    }
}

@media (max-width: 768px) {
    .content-center .heading {
        font-size: 24px;
        padding-left: 0;
    }
}

@media (max-width: 576px) {
    .content-center .heading {
        font-size: 20px;
        padding-left: 0;
    }

    .content-center {
        padding: 30px;
        text-align: justify;
    }
}
</style>
