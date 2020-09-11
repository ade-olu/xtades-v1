<template>
  <div id="app">
      <router-view>
        <home></home>
    </router-view>
  </div>
</template>

<script>
import home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    'home': home
  },
}
</script>

<style lang="scss">
@import "styles/variables.scss";

* {
  margin: 0 !important;
  padding: 0 !important;
}

body {
  font-family: $font;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  background: $bColor !important;
  -webkit-tap-highlight-color: transparent !important;
}

// Media Queries
// 575px
@media screen and (max-width: 575px) {
body {
  overflow-y: auto !important;
  }
}
</style>
