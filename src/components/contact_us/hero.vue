<template>
    <!-- Header Start -->
    <div class="container-fluid hero-header bg-light py-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="mb-3 animated slideInDown col-lg-8 brand-text px-0"><span class="black">Hey! Tell us all the things <img src="/src/assets/img/hand.png" /> </span></h1>
                    
                   
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img class="img-fluid animated pulse infinite" style="animation-duration: 3s;" src=""
                        alt="">
                </div>
            </div>
            <div class="brand-footer gap-4">
                <p class="col-9 px-0">I'm interested in...</p>
                <div class="space-between">
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">Logo</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">Web Design</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">App Design</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">ASO esperitse</a>
                </div>
                <div class="space-between">
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">Illustrations</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">iOS Development</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">Design Concept</a>
                </div>
                <div class="space-between">
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">Site from scratch</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">App from scratch</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">Android Development</a>
                </div>
                
            </div>

            <form class="py-5">
                <div class="form-row">
                    <div class="form-group col-md-6 transparent">
                    <!-- <label for="firstName">First Name</label> -->
                        <input type="text" class="form-control transparent bg-light" id="firstName" placeholder="first name">
                    </div>
                    <div class="form-group col-md-6">
                    <!-- <label for="lastName">Last Name</label> -->
                        <input type="text" class="form-control bg-light" id="lastName" placeholder="last name">
                    </div>
                </div>
                <div class="form-group">
                    <!-- <label for="inputEmail">Address</label> -->
                    <input type="email" class="form-control bg-light" id="inputEmail" placeholder="Your Email">
                </div>
                <div class="form-group">
                    <!-- <label for="aboutYourProject">Address 2</label> -->
                    <textarea rows="4" class="form-control bg-light" id="aboutYourProject" placeholder="Tell us about your project">Tell us about yourself </textarea>
                </div>
                
                
                <!-- <button type="submit" class="btn btn-primary">Sign in</button> -->
            </form>

            <div class="brand-footer gap-4">
                <p class="col-9 px-0 pb-0">Project budget (USD)</p>
                <div class="space-between">
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">10K-20K</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">30-40K</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">40-50K</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">50-100K</a>
                    <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">>100K</a>
                </div>
                
                
            </div>

            <div class="py-5">
                <p class="col-9 px-0 pb-0">Add Attachment</p>
                <a href="" class="btn transparent border-dark py-3 px-4 animated slideInDown">Send request</a>
            </div>
        </div>
    </div>
    <!-- Header End -->
</template>

<script>

</script>

<style scoped>
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
.message-div{
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 50px;
    /* padding: 20px; */
    /* display: block; */
}
.brand-footer{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 10px;
    /* padding: 20px; */
    /* display: block; */
}














</style>
