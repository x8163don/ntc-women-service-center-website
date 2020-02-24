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
  background-image: url("https://lh3.googleusercontent.com/4t1tpJ7dgUfUJX4Ow0tCEAE4uMvlanQ5s9em3XlsTaXAtK52Ufv11eSumazJhY0ilao9vPGi-7hOGrD_Yu0-cF4G8F2EDpxJU9cf6_E7X5lyLIGT6LMPwljz2H4B87hggcjlJSn6o2gla9fYef4ab7qDjqAZDcBMCkLKKObGAIsxBFiFGviMc2g2y9nFrW6k3-EW1v5fEkZuoczO04jY9gU9RZowtjfIrApzfI7DSiM3A9-KVmtH_A7V328OEepJWLomd0WaNdp-zI4V6YY_PwrbPpLvhNiRQL1lZAZUTSZsqwxKv-dMOk5us42kDzadn_vWjF6uplNO-kHqaTzP-v5I6bCiVM85PxxkEAhEFyMZpf8JtCgjT0kY7lSKt1gHLsamL537A8Hior7f80XI9LQFbMDIu2HDtTKpHNAjun1H1-0s_6YO008GbtraxpM2uYWgsxoJUHarYm_T1V7FXbCnABaufw89GxBxHfuxv3Omxvpvy58ATPE4cG6izgsQqwCdwqjm_egt3UORkrcD54cdLef9aoHENgxTob3_VI73uDPwVkmlLYUHoLuqdR5h0zawcXnCXti5jzrVBs8lozRBB1wf57VaUgG9LtXhDUu-A1Lq_jazTu0ngczqRgy9wluGHQ6T2QplkCp_Z48vpm3ItS7FbgYjvSlcq7Z9E8SnnrYjFzQ-=w1550-h882-no");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
</style>
