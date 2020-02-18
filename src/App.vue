<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../src/modules/common/components/Header"
import Footer from "../src/modules/common/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  font-family: "Noto Sans TC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
