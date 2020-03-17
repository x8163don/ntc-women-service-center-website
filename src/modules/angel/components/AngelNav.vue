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
      title: "微光天使",
      links: [
        {
          name: "認識微光天使",
          path: "introduce"
        },
        {
          name: "招募志工",
          path: "recruit"
        },
        {
          name: "獲獎紀錄",
          path: "prize"
        }
      ]
    };
  }
};
</script>
