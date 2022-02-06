<template>
  <div id="app">
    <Header></Header>
    <div class="main_content"><router-view /></div>
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
html,
body {
  font-family: "Noto Sans TC", sans-serif;
  color: #2d2d2d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main_content {
  width: 1200px;
  margin: 0 auto;
}
</style>
