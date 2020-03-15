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
          name: "活動",
          path: "activity"
        },
        {
          name: "性別議題",
          path: "issue"
        },
        {
          name: "影音專區",
          path: "videos"
        },
        {
          name: "文宣品/刊物",
          path: "files"
        }
      ]
    };
  }
};
</script>

<style></style>
