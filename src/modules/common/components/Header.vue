<template>
  <nav class="z-9999 fixed flex bb b--white-10 nav">
    <a class="link white-70 hover-white no-underline pa3" href="/">
      <img src="../../../assets/logo.png" class="logo" alt="logo" />
    </a>

    <div class="pr3 pl3 pt2 pb2 flex justify-center items-center">
      <template v-for="(link, index) in links">
        <router-link
          :key="index"
          class="f5 link dib tc white dim mr3 mr4-ns lh-title"
          :to="link.to"
          >{{ link.showText }}</router-link
        >
      </template>
    </div>
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
        { to: "/exhibitions", showText: "線上展覽" }
      ]
    };
  }
};
</script>

<style scoped>
.nav {
  top: 0px;
  width: 100%;
  background-color: #f3b7bf;
}

.logo {
  margin-left: 60px;
  width: 32px;
  height: 32px;
}

.router-link-exact-active {
  color: #f2d5ef !important;
}

.default-text-color {
  color: #c5979d;
}
</style>
