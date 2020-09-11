<template>
  <div class="app-contact">
      <!-- Nav Bar -->
<div class="n n-b" id="nId">
    <router-link to="/" id="lg">
    <img class="lg" src="../assets/xtades-logo.svg">
    </router-link>

    <!-- For Larger Screens -->
        <!-- Nav Menu -->
        <div class="nav-menu" id="nMenu">
            <ul class="nav-links-2" id="nLinks2">
                <li><router-link to="/projects" class="nl-2" id="pId2">
                  <span>Projects</span></router-link></li>
                <li><router-link to="/designs" class="nl-2" id="dId2">
                <span>Designs</span></router-link></li>
                  <li><router-link to="/contact" class="nl-2 act" id="cId2">
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

<!-- Contact -->
    <div class="contact" id="contactId" :class="{ cover: isActive }">
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
</template>

<script>
export default {
data () {
    return {
      isActive: false,
      hoverPr: false,
      hoverDs: false,
      hoverCt: false,
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
<style lang="scss" scoped>
@import "../styles/contact.scss";
</style>