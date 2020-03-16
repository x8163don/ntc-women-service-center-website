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
      title: "女力加油站",
      links: [
        {
          name: "研習",
          path: "/power/study"
        },
        {
          name: "性別議題",
          path: "/power/issue"
        },
        {
          name: "影音專區",
          path: "/power/videos"
        },
        {
          name: "文宣品/刊物",
          path: "/power/files"
        }
      ]
    };
  }
};
</script>

<style></style>
