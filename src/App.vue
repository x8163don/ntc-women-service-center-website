<template>
  <div id="app">
    <Header class="z-9999"></Header>
    <div class="main_content z-100"><router-view /></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./modules/common/components/Header";
import Footer from "./modules/common/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  font-family: "Noto Sans TC", "Roboto";
}

.bg-blue {
  background: #333366;
}

html {
  margin-top: 0 !important;
  max-width: 100%;
}

.header-space {
  margin-top: 64px;
}

.main_content {
  width: 1200px;
  margin: 0 auto;
}

header {
  z-index: 9999;
}
</style>
