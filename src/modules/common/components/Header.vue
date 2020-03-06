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
        "https://lh3.googleusercontent.com/bH8Hq6lZPIQGJQw3v13uomwoYwCy3Q_45XLVwuogHLJuchgTIV0NovvFVwoiXmJphzwOq7f3ViOT71MbGSOf0dl0tw2nBDveMnWf6cq9UrjCsSs-fOUe8j8yC1HpZiWRnAMXm6Rr2zGqhAUDgz_63w6RA23DTt0bmEDv3B6mq9hUgNbgqINyvXmw4BM6DW5dCIX4ce0AJ6Fo0TasxvbD5lPmL0LiGI28wC7HJIVpxZEIXkXRzEzPpRszH4eLK5DrF3FS07PQrTvAcNd7LsCqbqvB5KbfdTtvaPp9nBRAC5LZK4SB7wTTSRgNzo8wDgG1L5CYD2Pkr3gqYGBbNzr8CV4o5SDWOS3-AjZbQFsdV_QUJi_Nuumnfc_u3Xq-RwGVGIYjX1rhqKeNk9JPzwzcpF2RYWGVvaobvg0xLRmLeNQy52GY64_dOCLodMLOfMHkP-lgoXU4BP2lM9Ugx17MgwkbhLwf_l9Srv-klnRk4RNRLgJwuZBPpvNYe5A42kVZBeIoxm-zZIgW3rJ3viZU8OkDv30N8nWTEOCT6vh7QXVEmFALVq6yfvnFljq8d74ZKrxF93d0w_NruiVd0GLCHHcJjDVLpgkRgDD5p7Gazk0K3U8LAcqbdOhuRQzGrBBbDuG9ueO4OvhqcE9CGXru5XFzMeebK-2ZvITirvZdb8G66mAoXdxBxAwfAzQGPIi5Oz3R82nl3ziMXDytEnK8FW7GZXA0GJfZJMXnTfMsMidzZTrz=w920-h375-no",
      links: [
        { to: "/about", showText: "關於我們" },
        { to: "/news", showText: "最新消息" },
        { to: "/activity", showText: "活動報報" },
        { to: "/growing", showText: "成長小屋" },
        { to: "/power", showText: "女力加油站" },
        { to: "/info", showText: "資訊專區" },
        { to: "/angel", showText: "微光天使" },
        { to: "/center", showText: "中心出版" },
        { to: "/videos", showText: "影音專區" }
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
