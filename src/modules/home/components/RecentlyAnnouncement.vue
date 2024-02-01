<template>
  <div>
    <div class="placard_title_container">
      <img class="princess" src="../../../assets/home/princess.jpg" />
      <h1 class="placard_title">中心公告</h1>
    </div>

    <div class="placard">
      <div
        class="placarad_card"
        v-for="item in recent"
        :key="item.ID"
        @click="$router.push(`/post/${item.ID}`)"
      >
        <div class="placard_card_title">{{ item.title }}</div>
        <div class="placard_date">{{ item.date | toDate }}</div>
        <div class="placard_excerpt">
          {{ item.excerpt | toRawText }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPosts } from "../../api";
import moment from "moment";
import { htmlToText } from "html-to-text";

export default {
  name: "RecentlyAnnouncement",
  components: {},
  filters: {
    toRawText(value) {
      return htmlToText(value) || "點我查看";
    },
    toDate(value) {
      return moment(value).format("YYYY / MM / DD");
    }
  },
  async mounted() {
    const news = await getPosts({ category: "中心公告", number: 2 });
    this.recent = this.recent.concat(news.data.posts);
  },
  data() {
    return {
      recent: []
    };
  }
};
</script>

<style scoped>
.placard_title_container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 150px;
  display: flex;
  position: relative;
  justify-content: center;
}

.placard_title {
  font-size: 24px;
  margin-bottom: 24px;
}
img.princess {
  position: absolute;
  left: 33%;
  bottom: 0px;
}

.placard_title::before {
  content: "";
  width: 60px;
  height: 20px;
  background: #F6A096;
  position: absolute;
  left: 50%;
  top: 20px;
  z-index: -1;
}

.placard {
  background: #FFEEED;
  display: flex;
  justify-content: space-between;
}

.placarad_card {
  width: 70%;
  margin-left: 120px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: 60px;
  cursor: pointer;
}
.placard_card_title {
  font-weight: bold;
  font-size: 18px;
}

.placard_excerpt {
  margin-top: 20px;
  font-size: 16px;
}
</style>
