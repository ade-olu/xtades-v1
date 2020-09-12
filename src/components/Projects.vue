<template>
  <div class="app-projects">
    <!-- Nav Bar -->
<div class="p-n" id="nId" :class="{ bkg: isActive }">
  <!-- For Desktop (Logo) -->
  <a href="https://xtades.xyz" id="lg1">
    <img class="lg x-logo" src="../assets/xtades-logo.svg">
    </a>
    <!-- For Mobile (Logo) -->
    <router-link to="/" id="lg2">
    <img class="lg x-logo" src="../assets/xtades-logo.svg">
    </router-link>

    <!-- For Larger Screens -->
        <!-- Nav Menu -->
        <div class="nav-menu" id="nMenu">
            <ul class="nav-links-2 p-nav-links-2" id="nLinks2">
                <li><router-link to="/projects" class="nl-2 actcolor" id="pId2">
                  <span>Projects</span></router-link></li>
                <li><router-link to="/designs" class="nl-2 acolor" id="dId2">
                <span>Designs</span></router-link></li>
                <!-- For Desktop (Contact) -->
                  <li class="con-l"><a href="https://xtades.xyz/#contactId" class="nl-2 acolor" id="cId2">
                  <span>Contact</span></a></li>
                  <!-- For Mobile (Contact) -->
                  <li class="ct-l"><router-link to="/contact" class="nl-2 acolor" id="cId2">
                  <span>Contact</span></router-link></li>
            </ul>
        </div> 

<!-- For Mobile -->
<!-- Nav Bar Menu -->
    <div class="hamWrap">
    <div class="menu-wrapper menu-wr" id="ham">
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

<!-- Projects -->
<div class="projects" id="projectsId" :class="{ cover: isActive }">
<div class="proj">
<h1 class="pj">Projects</h1>

<!-- Projects Gallery -->
<div class="gallery" id="gal">

<!-- Project 1 -->
<div data-aos="zoom-in" data-aos-duration="800">
<a href="https://xtades.xyz" target="_blank">
<div class="pr" id="pr1">
<img src="../assets/projects/pr1.png" id="pr1Img" alt="Xtades">

<div class="pr-text">
<h3 class="pr-hd">Xtades</h3>
<h5 class="pr-hd2">My Portfolio Website</h5>
</div>
</div>
</a>
</div>

<!-- Project 2 -->
<div data-aos="zoom-in" data-aos-duration="800">
<a href="https://colorcg.netlify.app" target="_blank">
<div class="pr" id="pr2">
<img src="../assets/projects/pr2.png" id="pr2Img" alt="CCG">

<div class="pr-text pr-text-c">
<h3 class="pr-hd">CCG</h3>
<h5 class="pr-hd2">A Color Code Generator Website</h5>
</div>
</div>
</a>
</div>

<!-- Project 3 -->
<div data-aos="zoom-in" data-aos-duration="800">
<a href="https://evolveicons.netlify.app" target="_blank">
<div class="pr" id="pr3">
<img src="../assets/projects/pr3.png" id="pr3Img" alt="Evolve">

<div class="pr-text">
<h3 class="pr-hd">Evolve</h3>
<h5 class="pr-hd2">A Website To Get SVG Icons</h5>
</div>
</div>
</a>
</div>

<!-- Project 4 -->
<div data-aos="zoom-in" data-aos-duration="800">
<a href="https://vectstudio.netlify.app" target="_blank">
<div class="pr" id="pr4">
<img src="../assets/projects/pr4.png" id="pr4Img" alt="Vect">

<div class="pr-text">
<h3 class="pr-hd">Vect</h3>
<h5 class="pr-hd2">A Web Based Drawing App</h5>
</div>
</div>
</a>
</div>

<!-- Space -->
<div class="sp">
</div>

<!-- Space -->
<div class="sp">
</div>

  </div>
    </div>
</div>

    </div>
</template>

<script>
export default {
data () {
    return {
      isActive: false,
      hoverPr: false,
      hoverDs: false,
      hoverCt: false
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
    mLeave: function () {
      this.hoverPr = false,
      this.hoverDs = false,
      this.hoverCt = false
    }
  }
}
</script>

<!-- SCSS -->
<style lang="scss">
@import "../styles/projects.scss";
</style>
