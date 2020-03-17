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
      title: "關於我們",
      links: [
        {
          name: "中心簡介",
          path: "introduce"
        },
        {
          name: "空間介紹",
          path: "space"
        },
        {
          name: "交通資訊",
          path: "map"
        },
        {
          name: "場地租借",
          path: "booking"
        },
        {
          name: "參訪預約",
          path: "visit"
        },
        {
          name: "新聞報章",
          path: ""
        }
      ]
    };
  }
};
</script>
