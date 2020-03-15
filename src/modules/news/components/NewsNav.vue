<template>
  <SideNav :title="title" :links="links"></SideNav>
</template>

<script>
import SideNav from "../../common/components/SideNav.vue";
export default {
  components: {
    SideNav
  },
  data() {
    return {
      title: "最新消息",
      links: [
        {
          name: "中心公告",
          path: "/news/announcement"
        },
        {
          name: "中心活動",
          path: "/news/activity"
        },
        {
          name: "活動轉知",
          path: "/news/other"
        }
      ]
    };
  }
};
</script>

<style></style>
