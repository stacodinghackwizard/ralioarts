<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="">
    <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row justify-content-between">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <!-- <i class="fas fa-map-marker-alt light-blue"></i> -->
                            <div class="cta-text">
                                <h1>Have a business idea?</h1>
                                <span><a href="/contact-us" class="touch">Get in touch</a>with us</span>
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
                    <div class="col-xl-4 col-md-4 float-end mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open light-blue"></i>
                            <div class="cta-text">
                                <!-- <h4>Mail us</h4> -->
                                <span>info@ralioarts.ng</span><br>
                                <span>+2348068524030</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-cta footer-links-content pt-5 pb-5">
                <div class="row gap-3">
                  <div class="col-xl-6 col-lg-6 col-md-6 mb-50">
                    <div class="footer-widget">
                       
                        
                        <div class="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Email Address">
                                <button class="light-blue-bg"><i class="fab fa-telegram-plane"></i></button>
                            </form>
                        </div>
                    </div>
                  </div>
                    
                  <div class="col-xl-5 col-lg-5 col-md-5 mb-30">
                    <div class="footer-widget">
                        
                        <div class="row">
                            <div class="col">
                                <ul class="">
                                    <li><RouterLink to="/"><span>Facebook</span></RouterLink></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><RouterLink to="/services"><span>Dribble</span></RouterLink></li>
                                    <li><a href="#">Twitter</a></li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul>
                                    <li><a href="#">Behance</a></li>
                                    <!-- <li><a href="/website">Website</a></li>
                                    <li><a href="/mobile-app">Apps</a></li>
                                    <li><RouterLink to="/all-project"><span>All Project</span></RouterLink></li> -->
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

                    <ul class="  d-flex justify-content-between">
                        <li><RouterLink to="/"><span>Home</span></RouterLink></li>
                        <li><a href="#">Branding</a></li>
                        <li><RouterLink to="/services"><span>Services</span></RouterLink></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="/contact-us">Contact us</a></li>
                        <li><a href="/website">Website</a></li>
                        <li><a href="/mobile-app">Apps</a></li>
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
                            <p>Copyright &copy; 2021, All Right Reserved <a href="#">Ralioarts</a></p>
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
  background: #151414;
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

</style>