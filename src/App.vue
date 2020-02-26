<template>
  <div id="app">
    <div class="w-80 mv4 center">
      <Header></Header>
      <router-view class="bg-white" />
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
  background-image: url("https://lh3.googleusercontent.com/4abG_YPtH2mCY-GSz_oUStwVdamsqo5T2fkb3zV1RS7i3td82R4f1I-ZN3Ytg4oAQQn97YR05kNJ-bkZMhotuCDOZTvxJvOJ8dg1iZ7jh5qSejdt1LXurkj_251M_aFNPmL9Fvq9hZKhdf4dAJoi9hoqTPsQQsH7KAtiBDkmuqfvuE8ZnOEQZEn19IfWIpXYsLcWIwuV4A44DsM4zEH2_BAL1UfQuewNtRq-aYBc0U4tNqelRZW6pr969xpmBNRirMM9rKeV6TN_OQIve8lgzRvCG33uaoHC6xcOeFLsoebGASMFS_Zas_svgt1OFOg__NcRf5BnmKOefDrr9IrlAXuBMXUrI8iuto-nkKWrQZzUrv_W26KWm7_vCVrNepBewVl7xBgS83Ulo8_VRsEWZ86aU7sOMRhCJhJCZ-l6t2kgU3qPj4F8TefMAUu51nMMxWfvefiWGGdfSL2yj68V-63y9ZEwZif0F_MEnd4zia0OJYs0E3ZrZSHH3f_YcrOAwoTzF0y00rRFMOJWjZ7yE5DzvtKx7HNRZOl4KUulFMEP-_QhCnxbUm_L6cNC7EtB_eFHrP6-0LplwFhatCk-IK58dmZ1Qownfl1EhBWdQLoy65PuU-_Gk3fW_mbHYxgO2LTJE9p8LdchQCf3w83zDs0g-AltiTGdRS7cIYDwmI5B8OjZeLZMcEcQ5UWedW3QZc62sPDCREYwqOwQ-yPS0wFSaZv3LXs2I8MdkoheEGv4vyU=w1280-h720-no");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.bg-blue {
  background: #333366;
}
</style>
