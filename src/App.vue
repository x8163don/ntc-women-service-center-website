<template>
  <div id="app">
    <div class="w-80 mv4 center">
      <Header></Header>
      <router-view />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "../src/modules/common/components/Header"
import Footer from "../src/modules/common/components/Footer"

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      backgroundUrl: process.env.VUE_APP_BACKGROUND
    }
  }
}
</script>

<style>
* {
  font-family: "Noto Sans TC", "Roboto";
}

body {
  background-image: url("https://lh3.googleusercontent.com/lLyjyfiHRlCk-KKYK6z7ylftNIXFWz5K5S6dAOlX58nnxX1PAm4ra9VfjJ-Dj2Qb8_l3aqTIy3i7svSsUngkx9etycigK5NBGqfsSeArlh4gj4v1_ZfkKCbffYvRJIUiRr9vpqbVrIwUSTIlFZAfFU1N31ttOW1OJT4D3A2gbky_Yt3YLT6ZuugAyL8sRNVgs1fK6DHc8e_RYk9VDzTEd2uN1IiL3wXyAge-0NoBZvjvyt8b5Drl0Gq5d1Q4n2VgTSrPzOkcpH_4adx3g-NefSEjftVm6Cee-Od8MLV0rSIzDPbqHd81skW_7DnAFlmyzuegpA4r9OVI8tiz_VVkiCKFgwJlMINV7Pp-T0BmdQdkW6-sQjC-Qg0_vZ1rAIurvakvr0S0VIcUAvjphTMutZfOQjS70Cui4IM-2ISum7H9Pfp-Kw65Cact5MRLQujpFHH9MfASXnwuM5Vv-7chXTyc5Yr_TcqIH-epgwJy5C7OPBwa8uxrFf7JZ09ZaET8HTsUtvaEe-ouk0lKUn5YJnI4D1JIQmPMJIkoTnAhkpGzXvXbRSjem7JA4nBIaXGAht9f3hc7HQCNaJEaFwAI_QBTdsBXCGeAdJURjb4N2ufIi4wwAy2jUiqdDFsewxxxWqFMc0q5eUN6Qj6v_FrCVUZ-YN0wLMzqDy5j-qSZDv5lmftadHqwmg=w1280-h720-no");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.bg-blue {
  background: #333366;
}
</style>
