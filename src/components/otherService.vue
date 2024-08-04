<template>
    <!-- Header Start -->
    <div class="bg-white container-fluid">
        <div class="container">
            
            <div class="row py-4 px-0 mx-0">
                <div class="col-md-8 col-lg-8 col-sm-6 content-center">
                    <h4>
                        <strong>Other<br/>
                            services</strong>
                    </h4>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 content-center">
                   <ul class="column">
                        <li><RouterLink to="/branding"><span> Branding</span></RouterLink></li>
                        <li><RouterLink to="/mobile-app">Mobile Development</RouterLink></li>
                        <li><RouterLink to="/social"><span>Socials</span></RouterLink></li>
                        
                   </ul>
                </div>
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
ul {
    margin: 0px;
    padding: 0px;
    float: end;
    display: flex;
    flex-direction: column;
}
ul li {
  display: block;
  float: left;
  padding: 12px 0;
  text-decoration: underline;
  
}
ul li a:hover{
  color: #ff5e14;
}
ul li a {
  color: #1F2123;
  text-transform: capitalize;
}
</style>
