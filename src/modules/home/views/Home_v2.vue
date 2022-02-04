<template>
  <div class="home">
    <Header></Header>
    <div class="banner"><img src="../../../assets/home/banner.jpg" /></div>
    <RecentlyActivities></RecentlyActivities>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../common/components/HeaderV2";
import Footer from "../../common/components/FooterV2";
import RecentlyActivities from "../components/RecentlyActivities";

export default {
  components: {
    Header,
    RecentlyActivities,
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
