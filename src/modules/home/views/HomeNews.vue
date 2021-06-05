<template>
  <div class="container">
    <div class="f2 fw6 gray tc">最新消息</div>

    <div class="container">
      <div v-for="item in recent" :key="item.ID" class="card">
        <div class="card-icon">
          <img class="card-img" :src="getIconPath(item)" />
        </div>
        <div class="card-content">
          <div class="card-title f4 fw7">{{ item.title }}</div>
          <div class="card-abstract mt-1" v-html="item.excerpt"></div>
          <div class="card-date mt-1">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPosts } from "../../api/index.js";
import moment from "moment";

export default {
  name: "HomeNews",
  components: {},
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
    this.recent.length = 10;
    console.log(this.recent);
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
.card-title {
  color: #889f9a;
}

.card-img {
  height: 120px;
  width: 120px;
}
</style>
