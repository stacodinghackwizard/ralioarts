<template>
    <!-- Header Start -->
    <div class="hero-header make-team bg-light">
        
            <div class="row align-items-center">
                <div class="col-lg-6">
                   <div class="makeTeamImg">
                        <img src="/src//assets/img/make-team.png" />
                   </div>
                </div>
                <div class="col-lg-6">
                    <div class="content-center bg-white">
                        <div class="col-lg-8">
                            <h1 class="heading mb-3">We make it all make sense</h1>
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
    height: 75vh;
    /* border-top: 1px solid black; */
    /* border-bottom: 2px solid red; */
    overflow: hidden
}
.makeTeamImg{
    width: 100%;
    height: 75vh;
    /* border: 1px solid green; */
}

.makeTeamImg img{
    
    background-repeat: no-repeat;
    height: 75vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
.content-center{
    width: 100%;
    height: 75vh;
    /* border: 1px solid blue; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content-center .heading{
    font-weight: 700;
    font-size: 38px;
}
.col-lg-6{
    padding: 0;
    margin: 0;
}
</style>
