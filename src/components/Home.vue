<template>
  <div class="app-home">
    <!-- Nav Bar -->
<div class="n" id="nId" :class="{ bkg: isActive }">
    <a href="https://xtades.xyz" id="lg">
    <img @click="scroll1" class="lg" src="../assets/xtades-logo.svg">
    </a>

    <!-- For Larger Screens -->
        <!-- Nav Menu -->
        <div class="nav-menu" id="nMenu">
            <ul class="nav-links-2" id="nLinks2">
                <li><router-link to="/projects" class="nl-2" id="pId2" :class="{ acolor: norm }">
                  <span>Projects</span></router-link></li>
                <li><router-link to="/designs" class="nl-2" id="dId2" :class="{ acolor: norm }">
                <span>Designs</span></router-link></li>
                <!-- For Desktop (Contact) -->
                <li class="con-l"><a href="#" v-scroll-to="'#contactId'" @click="scroll3" :class="{ act: clicked, acolor: norm }" class="nl-2" id="cId2">
                  <span>Contact</span></a></li>
                  <!-- For Mobile (Contact) -->
                  <li class="ct-l"><router-link to="/contact" class="nl-2" id="cId2" :class="{ acolor: norm }">
                  <span>Contact</span></router-link></li>
            </ul>
        </div> 

<!-- For Mobile -->
<!-- Nav Bar Menu -->
    <div class="hamWrap">
    <div class="menu-wrapper" id="ham">
        <div class="hamburger-menu" @click="menu" :class="{ animate: isActive }"></div>
    </div>
</div>
</div>
    <!-- Nav Bar Links -->
    <div class="nlDiv" id="nLD" :class="{ change: isActive }">
    <ul class="nav-links" id="navLinks">
        <br class="k">
        <li><router-link to="/projects" class="nl" id="pId">
          <span @mouseover="mOverPr" @mouseleave="mLeave" :class="{ active: hoverPr }">
            Projects</span></router-link></li>
        <li><router-link to="/designs" class="nl" id="dId">
          <span @mouseover="mOverDs" @mouseleave="mLeave" :class="{ active: hoverDs }">
            Designs</span></router-link></li>
        <li><router-link to="/contact" class="nl" id="cId">
        <span @mouseover="mOverCt" @mouseleave="mLeave" :class="{ active: hoverCt }">
          Contact</span></router-link></li>
    </ul>
    </div>

<div class="lg-container" id="l_g" :class="{ cover: isActive }">
<!-- Home -->
<div style="text-align: center;">
<div class="home" id="homeId" @mousemove="scroll1">
    <div class="hl">
    <div class="hello" id="helLo">
        <div data-aos="fade-up" data-aos-duration="550" class="fd">
        He
        <div class="r-m">
        llo<span  style="color: #f84c46; -webkit-text-stroke: 2px #19181b;">.</span>
        </div>
        <!-- Arrow -->
        <div class="arw arw1">
        <a href="#" v-scroll-to="'#aboutId'" @click="scroll2" id="a2"><i class="fas fa-angle-down" id="arrow"></i></a></div>

        <!-- Arrow (Mobile) -->
        <div class="arw arw2">
        <a href="#" v-scroll-to="'#ftId'" @click="scroll2" id="a2"><i class="fas fa-angle-down" id="arrow"></i></a></div>
        </div>
    </div>
    </div>
</div>
</div>

<!-- About (Home) -->
<div class="about" id="aboutId" @mousemove="scroll2">
        <div style="text-align: center;">
    <div class="a-text">
    <!-- Name -->
    <div class="text sn" id="myN">
        I'm Oluwatobiloba Adegbaju
        <br>
        <span class="ab-txt" id="abTxt">
        Front-End Developer & UI Designer
    </span>
        </div>

    </div>

</div>
</div>

<!-- Contact -->
<div style="text-align: center;">
    <div class="contact" id="contactId" @mousemove="scroll3">
        <div class="cont">
        <div class="ct">
            <h1 class="c-hed">Contact Me</h1>
            <!-- Form -->
            <form class="conForm" action="https://formspree.io/adegbajuoezekiel@gmail.com" method="POST">
                <!-- Name -->
                <div class="f-d">
                <label class="name-label" for="fName"><span class="s-l">Full Name</span></label>
                <input type="name" name="Name" id="fName" placeholder="Enter Full Name" required>
                </div>

                <!-- Email -->
                <div class="f-d">
                <label class="mail-label" for="mail"><span class="s-l">Email</span></label>
                <input type="email" name="Email" id="mail" placeholder="Enter Email" required>
                </div>

                <!-- Message -->
                <div class="f-d">
                <label class="mes-label" for="mes"><span class="s-l">Message</span></label>
                <textarea type="text" name="Message" id="mes"  placeholder="Enter Message" required></textarea>
                </div>

                <!-- Submit Btn -->
                <button class="slide" id="subBtn">Send</button>
            </form>
        </div>
        </div>
    </div>
    </div>

    <!-- Footer -->
    <div class="ftr" id="ftId" @mousemove="scroll4">
      <div class="foot">
<footer class="f-t"> 
   <div class="f-tp">
  <h2><span class="h-3">Say Hi</span></h2>
  <br>
     <!-- Mail -->
    <a href="mailto:adegbajuoezekiel@gmail.com" class="em" id="aId1">adegbajuoezekiel@gmail.com</a>
    </div>
    <br><br>

    <div class="h-r h-line"></div>
    <br><br>

    <div class="f-bt">
    <p class="par"><i class="far fa-copyright" id="far-fa"></i> Oluwatobiloba Adegbaju 2020</p>
    <br class="br-e"><br class="br-e">
    <div class="ft-er">
    <!-- Instagram -->
    <a href="https://www.instagram.com/ade._olu/" id="aId" target="_blank"><i class="fab fa-instagram" id="iId"></i></a>
    <!-- Twitter -->
    <a href="https://www.twitter.com/_ade_olu/" id="aId" target="_blank"><i class="fab fa-twitter" id="iId"></i></a>
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/tobiloba-adegbaju/" id="aId" target="_blank"><i class="fab fa-linkedin-in" id="iId"></i></a>
    <!-- GitHub -->
    <a href="https://github.com/ade-olu" id="aId" target="_blank"><i class="fab fa-github" id="iId"></i></a>
    <!-- Dribbble -->
    <a href="https://dribbble.com/ade-olu" class="db" id="aId" target="_blank"><i class="fab fa-dribbble" id="iId"></i></a>
    </div>
    </div>
</footer>
    </div>
    </div>

<!-- Scroll Buttons (Squircles) -->
<div class="scroll" id="scrOll">
<!-- Squircle 1 -->
<a href="#" v-scroll-to="'#nId'" @click="scroll1" id="a1">
<svg :class="{ switch: scrl1, normal: scl1, ncolor: scrl4 }" class="sc1" width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
<path id="sc_1" d="M6 40C6 23.9571 8.15069 16.3346 12.2426 12.2426C16.3346 8.15069 23.9571 6 40 6C56.0429 6 63.6654 8.15069 67.7574 12.2426C71.8493 16.3346 74 23.9571 74 40C74 56.0429 71.8493 63.6654 67.7574 67.7574C63.6654 71.8493 56.0429 74 40 74C23.9571 74 16.3346 71.8493 12.2426 67.7574C8.15069 63.6654 6 56.0429 6 40Z" stroke-width="12"/>
</svg></a>
<!-- Squircle 2 -->
<a href="#" v-scroll-to="'#aboutId'" @click="scroll2" id="a2">
<svg :class="{ switch: scrl2, normal: scl2, ncolor: scrl4 }" class="sc2" width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
<path id="sc_2" d="M6 40C6 23.9571 8.15069 16.3346 12.2426 12.2426C16.3346 8.15069 23.9571 6 40 6C56.0429 6 63.6654 8.15069 67.7574 12.2426C71.8493 16.3346 74 23.9571 74 40C74 56.0429 71.8493 63.6654 67.7574 67.7574C63.6654 71.8493 56.0429 74 40 74C23.9571 74 16.3346 71.8493 12.2426 67.7574C8.15069 63.6654 6 56.0429 6 40Z" stroke-width="12"/>
</svg></a>
<!-- Squircle 3 -->
<a href="#" v-scroll-to="'#contactId'" @click="scroll3" id="a3">
<svg :class="{ switch: scrl3, normal: scl3, ncolor: scrl4 }" class="sc3" width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
<path id="sc_3" d="M6 40C6 23.9571 8.15069 16.3346 12.2426 12.2426C16.3346 8.15069 23.9571 6 40 6C56.0429 6 63.6654 8.15069 67.7574 12.2426C71.8493 16.3346 74 23.9571 74 40C74 56.0429 71.8493 63.6654 67.7574 67.7574C63.6654 71.8493 56.0429 74 40 74C23.9571 74 16.3346 71.8493 12.2426 67.7574C8.15069 63.6654 6 56.0429 6 40Z" stroke-width="12"/>
</svg></a>
<!-- Squircle 4 -->
<a href="#" v-scroll-to="'#ftId'" @click="scroll4" id="a4">
<svg :class="{ normal: scl4, switch4: scrl4, ncolor: scrl4 }" class="sc4" width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
<path id="sc_4" d="M6 40C6 23.9571 8.15069 16.3346 12.2426 12.2426C16.3346 8.15069 23.9571 6 40 6C56.0429 6 63.6654 8.15069 67.7574 12.2426C71.8493 16.3346 74 23.9571 74 40C74 56.0429 71.8493 63.6654 67.7574 67.7574C63.6654 71.8493 56.0429 74 40 74C23.9571 74 16.3346 71.8493 12.2426 67.7574C8.15069 63.6654 6 56.0429 6 40Z" stroke-width="12"/>
</svg></a>
</div>

</div>

  </div>
</template>

<script>
export default {
  name: 'Home',
data () {
    return {
      isActive: false,
      hoverPr: false,
      hoverDs: false,
      hoverCt: false,
      scrl1: false,
      scrl2: false,
      scrl3: false,
      scrl4: false,
      scl1: false,
      scl2: false,
      scl3: false,
      scl4: false,
      norm: false,
      clicked: false
    }
  },
  methods: {
    menu: function () {
      this.isActive = !this.isActive
    },
    // Projects
    mOverPr: function () {
      this.hoverPr = true
    },
    // Designs
    mOverDs: function () {
      this.hoverDs = true
    },
    // Contact
    mOverCt: function () {
      this.hoverCt = true
    },
    // Scroll 1
    scroll1: function () {
      this.scrl1 = true
      this.scrl2 = false
      this.scrl3 = false
      this.scrl4 = false

      this.scl1 = false
      this.scl2 = true
      this.scl3 = true
      this.scl4 = true

      this.clicked = false

      this.norm = false
    },
    // Scroll 2
    scroll2: function () {
      this.scrl1 = false
      this.scrl2 = true
      this.scrl3 = false
      this.scrl4 = false

      this.scl1 = true
      this.scl2 = false
      this.scl3 = true
      this.scl4 = true

      this.clicked = false

      this.norm = false
    },
    // Scroll 3
    scroll3: function () {
      this.scrl1 = false
      this.scrl2 = false
      this.scrl3 = true
      this.scrl4 = false

      this.sc11 = true
      this.scl2 = true
      this.scl3 = false
      this.scl4 = true

      this.clicked = true

      this.norm = false
    },
    // Scroll 4
    scroll4: function () {
      this.scrl1 = false
      this.scrl2 = false
      this.scrl3 = false
      this.scrl4 = true

      this.sc11 = true
      this.scl2 = true
      this.scl3 = true
      this.scl4 = false

      this.clicked = false

      this.norm = true
    },
    mLeave: function () {
      this.hoverPr = false,
      this.hoverDs = false,
      this.hoverCt = false
    }
  }
}
</script>

<!-- SCSS -->
<style lang="scss" scoped>
@import "../styles/styles.scss";
</style>
