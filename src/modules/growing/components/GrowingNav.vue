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
      title: "成長小屋",
      links: [
        {
          name: "館藏書籍",
          path: "collection"
        },
        {
          name: "CEDAW專區",
          path: "cedaw"
        }
      ]
    };
  }
};
</script>
