<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    :class="{ wrapper: false, 'menu--is-revealed': isMenuRevealed }"
    id="wrapper"
  >
    <nav
      class="navbar navbar-expand-lg navbar-dark tta_navbar tta-navbar-light site-navbar-target px-3 px-sm-0"
      id="tta-navbar"
    >
      <div class="container">
        <RouterLink class="navbar-brand" to="/" @click="HideburgerMenu">
          <!-- <img src="/src/assets/tta-logo.png" alt="Logo" /> -->
          <img src="/src/assets/img/ralioLogo.png" class="logo" />
          <span class="logo-bg">Ralioarts</span>
        </RouterLink>

        <button
          type="button"
          id="tta-nav-button"
          data-toggle="collapse"
          data-target="#tta-nav"
          aria-controls="tta-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
          class="menu-toggle navbar-toggler tta-nav-toggle"
        >
          <span class="icon-bars"></span>
        </button>

        <!-- <button
          type="button"
          aria-controls="tta-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          role="button"
          class="menu-toggle navbar-toggler tta-nav-toggle"
          @click="toggleMenu"
        >
          <span class="icon-bars"></span>
        </button> -->
        <!-- <button
          class="navbar-toggler tta-nav-toggle"
        >
          <span class="oi oi-menu"></span>
          <i class="bi bi-list"></i>
        </button> -->

        <div class="collapse navbar-collapse" id="tta-nav">
          <ul class="navbar-nav nav ml-auto">
            <li class="nav-item" @click="HideburgerMenu">
              <RouterLink to="/about" class="nav-link"
                ><span>Branding</span></RouterLink
              >
            </li>
            <li class="nav-item" @click="HideburgerMenu">
              <RouterLink to="/about" class="nav-link"
                ><span>Website</span></RouterLink
              >
            </li>
            <li class="nav-item" @click="HideburgerMenu">
              <RouterLink to="/career" class="nav-link"
                ><span>Apps</span></RouterLink
              >
            </li>
            <li class="nav-item" @click="HideburgerMenu">
              <RouterLink to="/scholarship" class="nav-link"
                ><span>Socials</span></RouterLink
              >
            </li>
           
          </ul>

          <div class="apply_wrap">
            <ul>
              <li><RouterLink to="/apply-now">Start a Project</RouterLink></li>
              <!-- <li><RouterLink to="/login">Login</RouterLink></li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuRevealed: false,
    };
  },
  methods: {
    HideburgerMenu() {
      const ttaNav = document.getElementById("tta-nav");
      const wrapper = document.getElementById("wrapper");
      ttaNav.classList.remove("show");
      this.isMenuRevealed = false;
      wrapper.classList.remove("menu--is-revealed");
    },
    toggleMenu() {
      const toggle = document.querySelector(".dropdown_btn");
      const wrapper = document.getElementById("wrapper");

      // wrapper.classList.add("menu--is-revealed");
      toggle.classList.remove("active");
      if (wrapper.classList.contains("menu--is-revealed")) {
        this.isMenuRevealed = false;
        wrapper.classList.remove("menu--is-revealed");
        // console.log('It contains');
      } else {
        this.isMenuRevealed = true;
        wrapper.classList.add("menu--is-revealed");
        // console.log('It does not contains');
      }
    },
    setActive() {
      const toggle = document.querySelector(".dropdown_btn");

      toggle.onclick = function () {
        toggle.classList.add("active");
      };
    },
    toggleDropdown() {
      const toggle = document.querySelector(".dropdown_btn");

      toggle.onclick = function () {
        toggle.classList.toggle("active");
      };
    },
  },
};
</script>

<style scoped>
/* Nav Burger */
.logo-bg{
  color: #464849;
  font-size: 17px;
  font-weight: 700;
}
.logo{
  width: 30px !important;
  height: 30px;
  margin-right: 10px;
}
.menu-toggle {
  display: block;
  height: 40px;
  padding: 15px 12px;
  position: relative;
  z-index: 1;
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  font-family: sans-serif;
  outline: medium none;
  overflow: visible;
  text-align: center;
  /* vertical-align: middle; */
}

.menu-toggle:before {
  content: attr(data-label);
  display: block;
  padding: 12px 0;
  position: absolute;
  right: 100%;
  top: 0;
  transition: color 0.2s ease 0s, opacity 0.3s ease 0s, visibility 0.3s ease 0s;
}

.menu--is-revealed .menu-toggle:before {
  opacity: 0;
  visibility: hidden;
}

.menu-toggle .icon-bars,
.menu-toggle .icon-bars:before,
.menu-toggle .icon-bars:after {
  transition: background-color 0.2s ease;
}
/* .menu-toggle:focus .icon-bars,
.menu-toggle:focus .icon-bars:before,
.menu-toggle:focus .icon-bars:after, */
.menu-toggle:hover .icon-bars,
.menu-toggle:hover .icon-bars:before,
.menu-toggle:hover .icon-bars:after {
  background-color: #4242ab;
}

.menu-toggle .icon-bars {
  transition: transform 0.3s ease-in, background-color 0.2s ease;
}
.menu-toggle .icon-bars:before,
.menu-toggle .icon-bars:after {
  transition: top 0.3s 0.3s ease-in, transform 0.3s ease-in,
    background-color 0.2s ease;
}

.menu-toggle:active .icon-bars,
.menu--is-revealed .menu-toggle .icon-bars {
  transition: transform 0.3s 0.2s ease-in, background-color 0.2s ease;
  transform: rotate3d(0, 0, 1, 135deg);
}
.menu-toggle:active .icon-bars:before,
.menu-toggle:active .icon-bars:after,
.menu--is-revealed .menu-toggle .icon-bars:before,
.menu--is-revealed .menu-toggle .icon-bars:after {
  transition: top 0.2s ease-in, transform 0.3s 0.2s ease-in,
    background-color 0.2s ease;
  transform: rotate3d(0, 0, 1, 90deg);
  top: 0;
}
.menu--is-revealed .menu-toggle .icon-bars,
.menu--is-revealed .menu-toggle .icon-bars:before,
.menu--is-revealed .menu-toggle .icon-bars:after {
  background-color: #4242ab;
}

.icon-bars {
  position: relative;
}
.icon-bars,
.icon-bars:before,
.icon-bars:after {
  display: block;
  width: 32px;
  height: 2px;
  background-color: currentColor;
}
.icon-bars,
.icon-bars:before,
.icon-bars:after {
  background-color: #15154f;
}
.icon-bars:before,
.icon-bars:after {
  content: "";
  position: absolute;
  left: 0;
}
.icon-bars:before {
  top: 0.5em;
}
.icon-bars:after {
  top: -0.5em;
}

/* Nav Styles */
.tta-navbar-light {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  /* border-bottom: 1px solid black; */
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add this line */
}



@media (max-width: 991.98px) {
  .tta-navbar-light {
    background: #f0f2fd !important;
    position: relative;
    top: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0px;
    padding-right: 0px;
  }
}

.tta-navbar-light .container {
  width: 1110px;
  margin: 0 auto;
  padding: 0;
}

.tta-navbar-light .navbar-brand {
  color: #fff;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
}

.tta-navbar-light .navbar-brand:hover,
.tta-navbar-light .navbar-brand:focus {
  color: #fff !important;
}

@media (max-width: 991.98px) {
  .tta-navbar-light .navbar-brand {
    color: #fff;
  }
}

@media (max-width: 991.98px) {
  .tta-navbar-light .navbar-nav {
    padding-top: 20px;
    padding-bottom: 0px;
    margin-right: 0;
  }
}

.tta-navbar-light .navbar-nav > .nav-item > .nav-link {
  font-size: 17px;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: 20px;
  padding-right: 20px;
  color: #464849;
  font-weight: 700;
  opacity: 1 !important;
}

.tta-navbar-light .navbar-nav > .nav-item > .nav-link span {
  position: relative;
  display: block;
  padding-bottom: 2px;
}

@media (max-width: 1199.98px) {
  .tta-navbar-light .navbar-nav > .nav-item > .nav-link span {
    display: inline-block;
  }
}

.tta-navbar-light .navbar-nav > .nav-item > .nav-link span:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background: #4242ab;
  visibility: visible;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.tta-navbar-light .navbar-nav > .nav-item > .nav-link:hover span:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
.tta-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
  color: #4242ab;
}

@media (max-width: 991.98px) {
  .tta-navbar-light .navbar-nav > .nav-item > .nav-link {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 1rem;
    padding-top: 0;
    color: #15154f;
    transition: all 0.3s ease-in-out 0s;
  }

  .tta-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
    padding-left: 5px;
    padding-right: 0;
    padding-bottom: 1rem;
    padding-top: 0;
    color: #4242ab;
  }
}

.tta-navbar-light .navbar-nav > .nav-item.cta > a {
  color: #15154f;
  border: 1px solid #15154f;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: 18px;
  padding-right: 18px;
  background: #15154f;
  margin-top: 0;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
}

.tta-navbar-light .navbar-nav > .nav-item.cta > a span {
  display: inline-block;
  color: #15154f;
}

.tta-navbar-light .navbar-nav > .nav-item.cta > a:hover {
  background: #4242ab !important;
  border: 1px solid #15154f;
}

.tta-navbar-light .navbar-nav > .nav-item.cta.cta-colored a {
  border: 1px solid #a0f669;
  background: #a0f669 !important;
}

.tta-navbar-light .navbar-nav > .nav-item .nav-link.active {
  background: transparent;
  background: none;
  color: #15154f;
}

.tta-navbar-light
  .navbar-nav
  > .nav-item
  .nav-link.router-link-active
  span:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}

@media (max-width: 991.98px) {
  .tta-navbar-light .navbar-nav > .nav-item.active > a {
    color: #15154f;
  }
}

.tta-navbar-light .navbar-toggler {
  border: none !important;
  color: rgba(255, 255, 255, 0.5) !important;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.1em;
}
.tta-navbar-light .navbar-toggler:focus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}

.tta-navbar-light .navbar-toggler:hover,
.tta-navbar-light .navbar-toggler:focus {
  text-decoration: none;
  color: #15154f;
  outline: none !important;
}
.navbar-toggler i {
  font-size: 2em;
  color: #15154f;
}

.tta-navbar-light.scrolled {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  margin-top: -130px;
  /* background: #000000 !important; */
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0 15px;
}

.tta-navbar-light.scrolled .nav-item > .nav-link {
  color: #15154f !important;
}

.tta-navbar-light.scrolled .nav-item > .nav-link:hover {
  color: #4242ab !important;
}

@media (max-width: 991.98px) {
  .tta-navbar-light.scrolled .nav-item > .nav-link {
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 20px !important;
  }
  .tta-navbar-light.scrolled .nav-item > .nav-link:hover {
    padding-left: 5px !important;
    padding-right: 0 !important;
    padding-bottom: 20px !important;
  }
}

.tta-navbar-light.scrolled .nav-item.active > a {
  color: #15154f !important;
}

.tta-navbar-light.scrolled .nav-item.cta > a {
  color: #15154f !important;
  background: #15154f;
  border: none !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  margin-top: 5px !important;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
}

.tta-navbar-light.scrolled .nav-item.cta > a span {
  display: inline-block;
  color: #15154f !important;
}

.tta-navbar-light.scrolled .nav-item.cta.cta-colored span {
  border-color: #15154f;
}

@media (max-width: 991.98px) {
  .tta-navbar-light .navbar-nav > .nav-item > .nav-link span:before {
    display: none;
  }
  .tta-navbar-light.scrolled .navbar-nav {
    background: none;
    border-radius: 0px;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
  }
}

.tta-navbar-light.scrolled .navbar-toggler {
  border: none !important;
  outline: none !important;
  color: rgba(0, 0, 0, 0.5) !important;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.1em;
}
.tta-navbar-light.scrolled .navbar-toggler:focus {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}

.tta-navbar-light.scrolled .nav-link {
  /* color: #000000 !important; */
}

.tta-navbar-light.scrolled .nav-link.active {
  /* color: #15154f !important; */
}

.tta-navbar-light.scrolled.awake {
  margin-top: 0px;
  -webkit-transition: 0.3s all ease-out;
  -o-transition: 0.3s all ease-out;
  transition: 0.3s all ease-out;
}

.tta-navbar-light.scrolled.sleep {
  -webkit-transition: 0.3s all ease-out;
  -o-transition: 0.3s all ease-out;
  transition: 0.3s all ease-out;
}

.tta-navbar-light.scrolled .navbar-brand {
  color: #15154f;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 24px;
}

.navbar-brand {
  font-weight: 900;
  font-size: 24px;
  text-transform: capitalize;
}
.navbar-brand img {
  width: 100px;
}

.apply_wrap {
  margin-left: 3em;
}
.apply_wrap ul {
  padding: 0;
  margin: 0;
  display: inline-block;
}
.apply_wrap ul li {
  list-style: none;
  display: inline-block;
}
.apply_wrap ul li:nth-of-type(1) {
  margin-right: 10px;
}
.apply_wrap ul li:nth-of-type(1) a {
  padding: 9.5px 15px 9.5px 15px;
  border-radius: 65.78px;
  border: 1px solid #4242ab;
  gap: 6.58px;
  font-size: 14px;
  color: #fff;
  /* background: #eceaf0; */
  text-decoration: none;
  transition: 0.2s ease-out;
  background: #4242ab;
}
.apply_wrap ul li:nth-of-type(1) a:hover {
  background: #4242ab;
  border: 1px solid #4242ab;
  color: white;
}
.apply_wrap ul li:nth-of-type(2) a {
  font-size: 16px;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: 20px;
  padding-right: 20px;
  color: #15154f;
  font-weight: 400;
  opacity: 1 !important;
  text-decoration: none;
}

.apply_wrap ul li a:hover {
  color: #4242ab;
}

.nav-item a.router-link-active {
}

.navbar-nav .nav-item:nth-of-type(1) a span:before {
  visibility: visible;
  -webkit-transform: scaleX(0) !important;
  -moz-transform: scaleX(0) !important;
  -ms-transform: scaleX(0) !important;
  -o-transform: scaleX(0) !important;
  transform: scaleX(0) !important;
}
.dropdown_btn {
  position: relative;
}
.dropdown_btn a i {
  display: block;
  font-size: 11px;
  margin-top: 3px;
  transition: 0.3s ease-out;
  color: #15154f !important;
}
.dropdown_btn:hover a i {
  margin-top: 0px;
  transform: rotateX(-180deg);
  color: #4949d7 !important;
}

.dropdown_wrapper {
  padding-top: 11px;
  position: absolute;
  transform: translateX(-25px);
  /* transform: translateY(25px); */
  transition: 0.3s ease-out;
  opacity: 0;
  visibility: hidden;
  z-index: 99999 !important;
  width: 30em;
}

nav.scrolled .dropdown_wrapper {
  padding-top: 10px;
}

.dropdown_menu {
  background: #f0f2fd;
  max-width: 100%;
  /* margin-top: 13px; */
  border-radius: 0 0 6px 6px;
}

.dropdown_btn:hover .dropdown_wrapper {
  opacity: 1;
  visibility: visible;
  transform: translateX(0px);
  /* transform: translateY(0px); */
}
.dropdown_menu h4 {
  color: #15154f !important;
  font-size: 1.2em;
}
.nav-pills button {
  color: #000000 !important;
  /* padding: 10px 0 !important; */
  line-height: 1.55 !important;
  text-align: left !important;
  transition: 0.3s ease-out;
}
.nav-pills button.active,
.nav-pills button:hover {
  color: #4949d7 !important;
  padding-left: 4px !important;
}
.dropdown_menu p {
  margin-bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.dropdown_menu p a {
  color: #4949d7;
  padding: 10px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s ease-out;
}
.dropdown_menu p:hover a {
  color: #15154f;
}

.dropdown_menu .indicator_line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  height: 100%;
  background: #d6d7e0;
  border-radius: 5px;
}
.dropdown_menu .indicator_line span {
  display: block;
  width: 100%;
  height: 25%;
  background: #4949d7;
  transition: 0.3s ease-out;
  border-radius: 5px;
}

.nav-pills button:nth-of-type(1).active ~ .indicator_line span {
  transform: translateY(0px);
}

.nav-pills button:nth-of-type(2).active ~ .indicator_line span {
  transform: translateY(41px);
}

.nav-pills button:nth-of-type(3).active ~ .indicator_line span {
  transform: translateY(82px);
}

.nav-pills button:nth-of-type(4).active ~ .indicator_line span {
  transform: translateY(123px);
}

@media screen and (min-width: 992px) {
  .tab_pane_wrap {
    width: fit-content !important;
  }
}

@media screen and (max-width: 991px) {
  .dropdown_btn a i {
    display: block;
    font-size: 16px;
    margin-top: 3px;
    transition: 0.3s ease-out;
    float: right;
    margin-left: auto !important;
  }
  .dropdown_btn:hover a i {
    margin-top: 3px;
    transform: rotateX(0deg);
    color: #4949d7 !important;
  }
  .dropdown_btn.active a i {
    margin-top: 0px;
    transform: rotateX(-180deg);
    color: #4949d7 !important;
  }
  .dropdown_wrapper {
    border-top: 1px solid #dee2e6 !important;
    border-bottom: 1px solid #dee2e6 !important;
    width: auto;
    max-width: 100% !important;
    transform: translateX(-25px);
    height: 0;
    transition: all 0.3s ease-in-out 0s;
  }
  .dropdown_btn:hover .dropdown_wrapper {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-25px);
  }
  .dropdown_btn.active .dropdown_wrapper {
    transform: translateX(0px);
    position: relative;
    visibility: visible;
    opacity: 1;
    height: 100%;
  }
  .apply_wrap {
    margin-left: 0;
    /* padding-bottom: 1em; */
  }
  .apply_wrap ul {
    display: block;
  }
  .apply_wrap ul li {
    list-style: none;
    display: block;
    width: 100%;
    /* border: 1px solid black; */
    height: auto;
    transition: all 0.3s ease-in-out 0s;
  }
  .apply_wrap ul li:hover {
    padding-left: 5px;
  }
  .apply_wrap ul li a {
    display: block;
  }
  .apply_wrap ul li a {
    padding: 0px 15px 20px 0px !important;
  }
  .apply_wrap ul li:nth-of-type(1) a {
    width: 100%;
    border: 2px solid black;
    border-radius: 65.78px;
    border: none !important;
    gap: 0;
    font-size: 14px;
    color: #15154f;
    background: transparent !important;
    text-decoration: none;
    transition: 0.2s ease-out;
  }
  .apply_wrap ul li a:hover {
    background: transparent !important;
    border: none !important;
    color: #4242ab !important;
  }
  /* .apply_wrap ul li:nth-of-type(2) a {
    padding: 10px 15px 10px 0px !important;
  } */
}

@media screen and (max-width: 576px) {
  .navbar-brand img {
    width: 70px;
  }
}
</style>