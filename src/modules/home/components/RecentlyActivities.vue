<template>
  <div>
    <h1 class="activity_title">活動消息</h1>
    <div class="activity">
      <div
        class="activity_post"
        v-for="(item, idx) in recent"
        :key="item.ID"
        @click="$router.push(`/post/${item.ID}`)"
      >
        <div class="post_img">
          <a>
            <img :src="getImageByIdx(idx)" />
          </a>
        </div>
        <div class="post_container">
          <div class="post_date">{{ item.date | toDate }}</div>
          <h2 class="post_title">
            <a target="_blank">{{ item.title }}</a>
          </h2>
          <div class="post_excerpt">
            {{ item.excerpt | toRawText }}
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
  name: "RecentlyActivities",
  filters: {
    toRawText(value) {
      return htmlToText(value) || "點我查看";
    },
    toDate(value) {
      return moment(value).format("YYYY / MM / DD");
    }
  },
  async mounted() {
    const activities = await getPosts({ category: "中心活動", number: 3 });
    this.recent = this.recent.concat(activities.data.posts);
  },
  data() {
    return {
      recent: []
    };
  },
  methods: {
    getImageByIdx(idx) {
      const images = ["salon", "womencollege", "tool"];
      return require(`../../../assets/home/${images[idx % 3]}.png`);
    }
  }
};
</script>

<style scoped>
h1 {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 24px;
}
.activity_title {
  margin-top: 60px;
  font-size: 24px;
  position: relative;
}

.activity {
  display: flex;
  justify-content: space-between;
}

.activity_title::before {
  content: "";
  width: 60px;
  height: 20px;
  background: #F6A096;
  position: absolute;
  left: 50px;
  top: 4px;
  z-index: -1;
}

.activity_title::after {
  content: "";
  width: 1200px;
  height: 2px;
  background: #a7a7a7;
  position: absolute;
  bottom: -14px;
  left: 0;
}

.activity_post {
  margin-top: 40px;
  height: 500px;
  width: 370px;
  transition: all 0.4s;
  font-size: 0;
}

.post_container {
  height: 250px;
  border: 1px solid #a7a7a7;
  border-top: transparent;
  padding: 30px;
}

.activity_post:hover {
  transform: translate(-2px, -2px);
  box-shadow: 2px 2px 5px #a7a7a7;
  cursor: pointer;
}

.post_date {
  font-size: 16px;
  color: #a7a7a7;
}

.post_title {
  font-size: 20px;
  font-weight: 400;
  margin: 12px 0;
}

.post_title > a {
  text-decoration: none;
  color: #2d2d2d;
}

.post_excerpt {
  font-size: 16px;
}
</style>
