<template>
  <div class="flex flex-column pa4">
    <SideMenu
      :title="title"
      :menuItems="menuItems"
      :defaultSelectedItem="menuItems[0].component"
    ></SideMenu>

    <!-- Content -->
    <div></div>
  </div>
</template>

<script>
import SideMenu from "../../common/components/SideMenu"
export default {
  components: { SideMenu },
  data() {
    return {
      title: "活動報報",
      menuItems: [
        {
          name: "近期活動",
          component: ""
        },
        {
          name: "主題活動",
          component: ""
        },
        {
          name: "本期活動",
          component: ""
        },
        {
          name: "已下架活動",
          component: ""
        },
        {
          name: "系列活動",
          component: ""
        },
        {
          name: "婦團協力平台",
          component: ""
        }
      ]
    }
  }
}
</script>

<style></style>
