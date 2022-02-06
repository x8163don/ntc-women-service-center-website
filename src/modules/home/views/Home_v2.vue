<template>
  <div class="home">
    <div class="banner"><img src="../../../assets/home/banner.jpg" /></div>
    <RecentlyActivities></RecentlyActivities>
    <RecentlyExhibition></RecentlyExhibition>
    <RecentlyAnnouncement></RecentlyAnnouncement>
    <RecentlyNewspaper></RecentlyNewspaper>
    <OtherWebsite></OtherWebsite>
  </div>
</template>

<script>
import RecentlyActivities from "../components/RecentlyActivities";
import RecentlyExhibition from "../components/RecentlyExhibition";
import RecentlyAnnouncement from "../components/RecentlyAnnouncement";
import RecentlyNewspaper from "../components/RecentlyNewspaper";
import OtherWebsite from "../components/OtherWebsite";

export default {
  components: {
    OtherWebsite,
    RecentlyActivities,
    RecentlyExhibition,
    RecentlyAnnouncement,
    RecentlyNewspaper
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.home {
  width: 1200px;
  margin: 0 auto;
}
</style>
