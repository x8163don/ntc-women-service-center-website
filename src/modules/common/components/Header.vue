<template>
  <div class="br2 br--top bg-white w-100">
    <!-- Logo -->
    <div class="pl2">
      <a href="/"><img class="h3 db dtc-ns v-mid tl" :src="logoImage"/></a>
    </div>

    <!-- Menu -->
    <div class="flex items-center bg-blue">
      <template v-for="(link, index) in links">
        <router-link
          :key="index"
          class="w-25 pa3 tc no-underline default-text-color pointer"
          :to="link.to"
          >{{ link.showText }}</router-link
        >
        <div
          :key="'b' + index"
          v-if="index !== links.length - 1"
          class="br bw1 h1 dib"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoImage:
        "https://lh3.googleusercontent.com/laewn4vxesa8lrD5YnkBJmWtPUJZ-xUC0WHcqQ_RpaK79btXjWWAm2Orv_LYCC3Bx4qSN_SAZtpg9BJN9RNurGdSAHx7HbI5DMchXx2IUo_YtjkZOqtdLFABsAO_ggsKzHSCuJXPaggIKJW2-3_Zhbmau-OdmDQz0_60nGq1L4kp6CXfVg86y78TjXX0NH4TfRWsILlo-RVkzsqimuubgnb6XzbCUy5xPVUUyPNyhKG-7rdAY0vdzQsAlOSB5FYfnKnGiZuBuPu4eQfBNMy1gp5133NGtqaVSz7CI_VlkltVuW0qdZCnOrhTJUFTnGmU1o6dc0Z0NuddwHwXVua_Qtu6RGQxXMkgU4KdhDj3X1Mcer8ePkV9wqOEBCZ_3qQTDglNZAQ6KfUwKMXrB1PDCGDWivG2UcLZzOfpr5Nu06VMLSV7eB0Xbt14w9WD7j2cTXRLetf42pin3A4SE88v9nVdjz9YTLRH-dpvd_G_mHH12Wv7eHit1GRCFCtjcWZ-G2kKjrOm-b3QoyrCHIASUf89Dtvja6ZhjtoJPToFpMoq2owhFI3Nx_P6iDOUJSXcbKbW0p0Lg4Ijms-jjYJM9R_z0BFo0K-iVugaA4hcd9Nb9nxgZREy27bqG2GkwOIZyamhBJMbqESlTFfwQV_sOA0xvPTjarrDmM7jBUPAx4a5S3Oauit4Dh5W14Vrsqhz9tH1pmKTvid4EIyutqzS0ACZDgrCUi_Vv1EU5froB-3bve0=w920-h375-no",
      links: [
        { to: "/about", showText: "關於我們" },
        { to: "/news", showText: "最新消息" },
        { to: "/activity", showText: "活動報報" },
        { to: "/growing", showText: "成長小屋" },
        { to: "/power", showText: "女力加油站" },
        { to: "/info", showText: "資訊專區" },
        { to: "/angel", showText: "微光天使" },
        { to: "/center", showText: "中心出版" },
        { to: "/videos", showText: "性平影音" }
      ]
    };
  }
};
</script>

<style scoped>
.nav {
  padding: 30px;
  background-color: #f68657;
}

.router-link-exact-active {
  color: #f2d5ef !important;
}

.default-text-color {
  color: #c5979d;
}
</style>
