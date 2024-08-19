<template>
    <!-- Header Start -->
    <div class="bg-white container-fluid">
        <div class="container">
            <div class="py-2">

                <div class="col-lg-5 px-0 content-center">
                    <div class="">
    
                        <p class="animated slideInDown  mb-5 pt-3 px-0">
                            Our job is to get necessary information to the user as seamlessly and effortlessly as possible through effective marketing and communication campaigns.
                        </p>
                        <a href="#" class="btn transparent border-dark read-more py-3 px-4 animated slideInDown">Let's work together</a>
                        
                    </div>
                </div>
            </div>
            <div class="col-12 Img">
                <img src="/src/assets/img/brandingHero2.png" />
            </div>
            <div class="row py-4 px-0 mx-0">
                <div class="col-md-6 col-sm-12 content-center">
                    <h4>
                        <strong>What’s possible <br/>
                            and how</strong>
                    </h4>
                </div>
                <div class="col-md-5 col-sm-12 content-center">
                    <p>
                        The only thing that matters in a brand is what you feel when interacting with a product. When we talk about branding, we mean the vital link between your product and the user.

                    </p>
                    <p>

                        To make your brand recognizable, we develop the logotype, corporate identity, manual, brand book, mockups, and souvenir products. These essential components coalesce into your unique brand which tells your story and makes all the right connections.
                    </p>
                </div>
            </div>
            <div class="col-12 Img mb-5">
                <img src="/src/assets/img/brandingHero3.png" />
            </div>
            <div class="py-5">

                <div class="col-lg-6 px-0 content-center">
                    <div class="">
                        <h6 class="mb-3 animated slideInDown  brand-text px-0">Our Work </h6>
                        <p class="animated slideInDown  mb-5 pt-3 px-0">
                            In recent years, we have developed an approach that includes not only the creation of visual images, but also a strategy for launching and promoting your brand.
                        </p>
                       
                    </div>
                </div>
            </div>
            <div class="py-5">
                <Project />
            </div>


            
            <div class="col-12 py-5 text-center">
                <h1 class="mb-3 animated slideInDown brand-text px-0"><span class="black">Have an Idea? <br/>Tell us about it<br/></span></h1>
            </div>
            <div class="col-12 py-5 text-left px-0">
                <h1 class="mb-3 animated slideInDown brand-text px-0"><span class="black">We work with people <br> from all over the world</span></h1>
            </div>
           
        </div>

            
        
    </div>
    <!-- Header End -->
</template>

<script>
import Project from '@/components/all_project/project.vue'
export default{
    components: {
       
        Project
        
        
    },
  data() {
    return {
      
    };
  },
}
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

.bg-light{
    background-color: #FFF !important;
}
.brand-text{
    
    
    font-size: 40px;
    font-weight: 600;
}







.content-center{
    width: 100%;
    padding: 60px 0px;
    /* border: 1px solid blue; */

    display: flex;
    flex-direction: column;
   
}
.content-center .heading{
    font-weight: 700;
    font-size: 38px;
}
.col-lg-6{
    padding: 0;
    margin: 0;
}













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
