<template>
  <div class="flex pa4">
    <div class="w-20">
      <router-view name="side"></router-view>
    </div>

    <!-- Content -->
    <div class="w-80">
      <keep-alive>
        <router-view name="content"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
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
