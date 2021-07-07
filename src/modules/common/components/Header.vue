<template>
  <nav class="z-9999 fixed flex justify-center items-center nav">
    <a
      class="logo-link white-70 hover-white no-underline pa3 content-start"
      href="/"
    >
      <img src="../../../assets/logo.png" class="logo" alt="logo" />
      <div class="ml2 dib white">新北市婦女服務中心</div>
    </a>

    <router-link
      v-for="(link, index) in links"
      :key="index"
      class="f4 link dib tc white dim mr3 mr4-ns lh-title"
      :to="link.to"
      >{{ link.showText }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { to: "/about", showText: "關於我們" },
        { to: "/news", showText: "最新消息" },
        { to: "/activity", showText: "活動報報" },
        { to: "/growing", showText: "成長小屋" },
        { to: "/power", showText: "女力加油站" },
        { to: "/videos", showText: "性平影音" },
        { to: "/angel", showText: "微光天使" },
        { to: "/exhibitions", showText: "線上展覽" },
      ],
    }
  },
}
</script>

<style scoped>
.nav {
  top: 0;
  width: 100%;
  height: 64px;
  background-color: #aaabd3;
}

.logo {
  margin-left: 60px;
  width: 32px;
  height: 32px;
}

.logo-link {
  position: absolute;
  left: 0;
}
</style>
