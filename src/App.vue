<template>
  <div id="app">
    <div>
      <Header></Header>
      <router-view class="header-space bg-white" />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "../src/modules/common/components/Header";
import Footer from "../src/modules/common/components/Footer";

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
</style>
