<template>
  <div>
    <div class="f2 fw6 gray tc">最新消息</div>

    <div class="card-container">
      <div v-for="item in recent" :key="item.ID" class="card">
        <div class="flex justify-center grow">
          <img class="card-img self-center mr3" :src="getIconPath(item)" />

          <div class="card-content">
            <div class="card-title f4 fw7">{{ item.title }}</div>
            <div class="card-abstract mt2">
              {{ item.excerpt | toRawText }}
            </div>
            <div class="f5 fw6 gray mt3">{{ item.date | toDate }}</div>
          </div>
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
  name: "HomeNews",
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
    const news = await getPosts({ category: "最新消息", number: 10 });
    const activities = await getPosts({ category: "中心活動", number: 10 });
    this.recent = this.recent.concat(news.data.posts);
    this.recent = this.recent.concat(activities.data.posts);
    this.recent
      .filter((value, index) => this.recent.indexOf(value) === index)
      .sort(
        (target, compare) =>
          moment(compare.date).unix() - moment(target.date).unix()
      );
    this.recent.length = 8;
  },
  data() {
    return {
      recent: []
    };
  },
  methods: {
    getIconPath(item) {
      const filename =
        Object.keys(item.categories)[0].indexOf("活動") === -1
          ? "news"
          : "activity";
      return require(`../../../assets/${filename}.png`);
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-wrap: wrap;
  width: 100%;
}
.card {
  width: 35%;
  height: 100%;
  cursor: pointer;
  margin-top: 40px;
}
.card-title {
  color: #889f9a;
}

.card-img {
  height: 80px;
  width: 80px;
}

.card-content {
  width: 500px;
}

.card-abstract {
  max-height: 120px;
  /*max-width: 400px;*/
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
