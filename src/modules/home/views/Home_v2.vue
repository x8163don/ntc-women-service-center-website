<template>
  <div class="home">
    <Header></Header>
    <div class="banner"><img src="../../../assets/home/banner.jpg" /></div>
    <RecentlyActivities></RecentlyActivities>
    <RecentlyExhibition></RecentlyExhibition>
    <RecentlyAnnouncement></RecentlyAnnouncement>
    <RecentlyNewspaper></RecentlyNewspaper>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../common/components/HeaderV2";
import Footer from "../../common/components/FooterV2";
import RecentlyActivities from "../components/RecentlyActivities";
import RecentlyExhibition from "../components/RecentlyExhibition";
import RecentlyAnnouncement from "../components/RecentlyAnnouncement";
import RecentlyNewspaper from "../components/RecentlyNewspaper";

export default {
  components: {
    Header,
    RecentlyActivities,
    RecentlyExhibition,
    RecentlyAnnouncement,
    RecentlyNewspaper,
    Footer
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
