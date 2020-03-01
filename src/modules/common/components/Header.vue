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
      logoImage: process.env.VUE_APP_IMG_HOST + process.env.VUE_APP_HEADER_LOGO,
      links: [
        { to: "/about", showText: "關於我們" },
        { to: "/news", showText: "最新消息" },
        { to: "/activity", showText: "活動報報" },
        { to: "/growing", showText: "成長小屋" },
        { to: "/power", showText: "女力加油站" },
        { to: "/info", showText: "資訊專區" },
        { to: "/other", showText: "微光天使" },
        { to: "/center", showText: "中心出版" }
      ]
    }
  }
}
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
