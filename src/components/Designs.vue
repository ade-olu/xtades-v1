<template>
  <div class="app-designs">
    <!-- Nav Bar -->
<div class="p-n" id="nId" :class="{ bkg: isActive }">
  <!-- For Desktop (Logo) -->
  <a href="/" id="lg1">
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
                <li><router-link to="/projects" class="nl-2 acolor" id="pId2">
                  <span>Projects</span></router-link></li>
                <li><router-link to="/designs" class="nl-2 actcolor" id="dId2">
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

<!-- Designs -->
<div class="designs" id="designsId" :class="{ cover: isActive }">
<div class="des">
<h1 class="ds">Designs</h1>

<!-- Design Menu -->
<div class="designs-menu" id="dMenu">
<ul class="menu-links" id="mLinks">
<li><router-link to="/designs" class="ml actcolor" id="mAni"><span>UI</span></router-link></li>
<li><router-link to="/illustrations" class="ml" id="mAni"><span>Illustrations</span></router-link></li>
<li><router-link to="/3d" class="ml" id="mAni"><span>3D</span></router-link></li>
</ul>
</div>

<!-- Design Gallery -->
<div class="d-gallery" id="dGal">

<!-- Design 1 -->
<div data-aos="zoom-in" data-aos-duration="800">
<div class="de-signs" id="ui1">
<img src="../assets/designs/u1.svg" class="u-img-1" id="uImg1">
</div>
</div>

<!-- Design 2 -->
<div data-aos="zoom-in" data-aos-duration="800">
<div class="de-signs" id="ui2">
<img src="../assets/designs/u2.png" class="u-img-2" id="uFit">
</div>
</div>

<!-- Design 3 -->
<div data-aos="zoom-in" data-aos-duration="800">
<div class="de-signs" id="ui3">
<img src="../assets/designs/u3.png" class="u-img" id="uFit">
</div>
</div>

<!-- Design 4 -->
<div data-aos="zoom-in" data-aos-duration="800">
<div class="de-signs" id="ui4">
<img src="../assets/designs/u4.png" class="u-img" id="uFit">
</div>
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
@import "../styles/designs.scss";
</style>
