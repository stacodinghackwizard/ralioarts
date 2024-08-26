<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="">
    <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row justify-content-between">
                    <div class="col-lg-9 col-md-9 col-sm-6 px-0 mb-30">
                        <div class="single-cta ">
                            <!-- <i class="fas fa-map-marker-alt light-blue"></i> -->
                            <div class="cta-text">
                                <h1 class="" style="font-size: 64px;">have a business idea?</h1>
                                <span class="px-0 mx-0 " style="display: flex;flex-wrap: wrap;font-size: 48px; align-items: center;" ><RouterLink to="/contact-us" class="nav-link pl-0" style="color: #59D4BE; text-decoration: underline">Get in touch</RouterLink>with us</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone light-blue"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>+234 8068524030</span>
                            </div>
                        </div>
                    </div> -->
                    <div class="col-lg-3 col-md-3 col-sm-6 mb-30">
                        <div class="single-cta float-end">
                            <!-- <i class="far fa-envelope-open" style="color: #59D4BE;"></i> -->
                            <div class="cta-text">
                                <!-- <h4>Mail us</h4> -->
                                <span style="font-size: 33px">info@ralioarts.ng</span><br>
                                <span style="font-size: 33px">+2348068524030</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-cta footer-links-content pt-5 pb-5">
                <div class="row ">
                  <div class="col-xl-6 col-lg-4 col-md-4 col-sm-12 mb-50">
                    <div class="footer-widget">
                       
                        
                        <div class="subscribe-form">
                            <form action="#">
                                <input type="text" class="subscribe-input" placeholder="johndoe@sample.com">
                                <!-- <button class="light-blue-bg"><i class="fab fa-telegram-plane"></i></button> -->
                                <button class="bg-white border-white bold">Subscribe</button>
                            </form>
                        </div>
                    </div>
                  </div>
                    
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                    <div class="footer-widget">
                        
                        <div class=" float-end" >
                            <div class="">
                                <ul class="row gap-3">
                                    <li class="col">
                                      <ul class="column" style="display: flex;flex-direction: column;">
                                        <li><a href="#"><span>Facebook</span></a></li>
                                        <li class=""><a href="#">Twitter</a></li>
                                       
                                      </ul>
                                    </li>
                                    <li class="col">
                                      <ul class="column" style="display: flex;flex-direction: column;">
                                        <li class=""><a href="#">Instagram</a></li>
                                        <li><a href="#">Behance</a></li>
                                      </ul>
                                    </li>
                                    
                                    <li class="col"><a href="#"><span>Dribble</span></a></li>
                                    
                                </ul>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                  </div>

                    
                </div>
            </div>
            <div class="footer-content  py-5">
              <div class="row footer-links">

                <div class="col-xl-12 col-lg-12 col-md-12 footer-links-width">
                  <div class="footer-widget">

                    <ul class=" footer-links  d-flex justify-content-between">
                        <li><RouterLink to="/"><span>Home</span></RouterLink></li>
                        <li><RouterLink to="/branding">Branding</RouterLink></li>
                        <li><RouterLink to="/services"><span>Services</span></RouterLink></li>
                        <li><RouterLink to="/">Testimonial</RouterLink></li>
                        <li><RouterLink to="/about-us">About us</RouterLink></li>
                        <li><RouterLink to="/contact-us">Contact us</RouterLink></li>
                        <li><RouterLink to="/website">Website</RouterLink></li>
                        <li><RouterLink to="/mobile-app">Apps</RouterLink></li>
                        <li><RouterLink to="/all-project"><span>All Project</span></RouterLink></li>
                    </ul>
                  </div>
                                     
    
    
    
                </div>
              </div>

            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>&copy; 2021 <a href="#">Ralioarts</a>, All Right Reserved</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><RouterLink to="/" class=""
                                    ><span>Policy</span></RouterLink
                                  ></li>
                                <!-- <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><RouterLink to="/all-project" class=""
                                    ><span>All Project</span></RouterLink
                                  ></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<style scoped>
ul {
    margin: 0px;
    padding: 0px;
}
.footer-section {
  background: #1F2123;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
}

@media (max-width: 991.98px) {
  .footer-section {
   
    position: relative;
    top: 0;
    padding-top: 0;
    padding-bottom: 0;
    /* padding-left: 0px;
    padding-right: 0px; */
  }
}
.footer-cta {
  border-bottom: 1px solid #373636;
}
.footer-links li{
  /* font-size: 43px; */
}
.touch{
  color: #59D4BE;
  padding-right: 10px;
}
.single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4, .cta-text h1 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #757575;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
    max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #7e7e7e;
  line-height: 28px;
}
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg{
  background: #3B5998;
}
.twitter-bg{
  background: #55ACEE;
}
.google-bg{
  background: #DD4B39;
}
.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #ff5e14;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover{
  color: #ff5e14;
}
.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
}
.subscribe-form button {
    position: absolute;
    right: 0;
    background: #ff5e14;
    padding: 13px 20px;
    border: 1px solid #ff5e14;
    top: 0;
}
.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area {
  background: #202020;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a {
  color: #ff5e14;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: #ff5e14;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
.light-blue {
  color: #2866E0 !important;
}
.light-blue-bg {
  background-color: #2866E0 !important;
  border: 1px solid #2866E0 !important;
  outline: 1px solid #2866E0 !important;
}
.logo-bg {
  color: #FFF;
  font-size: 17px;
  font-weight: 700;
}
.logo {
  width: 30px !important;
  height: 30px;
  margin-right: 10px;
}

.navbar-brand {
  color: #fff;
}
.navbar-brand:hover,
.navbar-brand:focus {
  color: #fff !important;
}

@media (max-width: 991.98px) {
  .footer-links ul {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .footer-links ul li {
    flex-basis: 48%; /* Make items roughly half-width to allow wrapping */
    min-width: 150px; /* Prevent items from being too narrow */
  }
}

.subscribe-input{
  background-color: #fff !important;
  color: #2E2E2E !important;
}

</style>