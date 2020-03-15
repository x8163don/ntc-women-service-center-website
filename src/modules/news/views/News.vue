<template>
  <div class="flex pa4">
    <SideMenu
      :title="title"
      :menuItems="menuItems"
      :defaultSelectedItem="selectedItem"
      @selectMenuItem="selectMenuItem"
      class="w-20"
    ></SideMenu>

    <!-- Content -->
    <div class="w-80">
      <keep-alive>
        <component v-bind:is="selectedItem" class="w-100"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SideMenu from "../../common/components/SideMenu";
import NewsAnnouncement from "../components/NewsAnnouncement";
import NewsActivity from "../components/NewsActivity";
import NewsOther from "../components/NewsOther";

export default {
  components: { SideMenu, NewsAnnouncement, NewsActivity, NewsOther },
  data() {
    return {
      title: "最新消息",
      selectedItem: "NewsAnnouncement",
      menuItems: [
        {
          name: "中心公告",
          component: "NewsAnnouncement"
        },
        {
          name: "中心活動",
          component: "NewsActivity"
        },
        {
          name: "活動轉知",
          component: "NewsOther"
        }
      ]
    };
  },
  methods: {
    selectMenuItem(selectedItem) {
      this.selectedItem = selectedItem.component;
    }
  }
};
</script>

<style></style>
