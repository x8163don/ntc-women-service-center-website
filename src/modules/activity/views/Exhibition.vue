<template>
  <div>
    <div v-if="newly" class="topstory_container">
      <div class="topstory_logo_container">
        <div class="topstory_logo">最新展覽</div>
        <div class="topstory_logo_line"></div>
      </div>
      <div
        class="topstory_content_container"
        @click="$router.push(`/post/${newly.ID}`)"
      >
        <h3>{{ newly.title }}</h3>
        <p v-html="newly.excerpt"></p>
        <img :src="getFirstImageSrc(newly.content)" />
      </div>
    </div>

    <div class="online_container">
      <div class="online_logo_container">
        <div class="online_logo">線上展覽</div>
        <div class="online_logo_line"></div>
      </div>
      <div class="online_content_container">
        <div
          class="online_content"
          v-for="exhibition in oldExhibitions"
          :key="exhibition.ID"
          @click="$router.push(`/post/${exhibition.ID}`)"
        >
          <div class="image">
            <img class="image" :src="getFirstImageSrc(exhibition.content)" />
          </div>
          <div class="online_info">
            <h3>{{ exhibition.title }}</h3>
            <br />
            <p v-html="exhibition.excerpt"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="history_container">
      <div class="history_logo_container">
        <div class="history_logo_line"></div>
        <div class="history_logo">歷史展覽</div>
      </div>
      <div class="history_content_container">
        <div
          class="poster"
          v-for="exhibition in exhibitions"
          :key="exhibition.ID"
          @click="$router.push(`/post/${exhibition.ID}`)"
        >
          <img :src="getFirstImageSrc(exhibition.content)" /><br />{{
            exhibition.title
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from "../../api/index";

export default {
  async mounted() {
    await getPosts({
      number: 10,
      category: "線上展覽"
    }).then(response => {
      this.onlineExhibitions = response.data.posts;
    });
    await getPosts({
      number: 100,
      category: "展覽"
    }).then(response => {
      this.exhibitions = response.data.posts;
    });
  },
  computed: {
    newly() {
      return this.onlineExhibitions.length > 0
        ? this.onlineExhibitions[0]
        : null;
    },
    oldExhibitions() {
      return this.onlineExhibitions.length > 1
        ? this.onlineExhibitions.slice(1, this.onlineExhibitions.length)
        : [];
    }
  },
  data() {
    return {
      onlineExhibitions: [],
      exhibitions: []
    };
  },
  methods: {
    getFirstImageSrc(htmlStr) {
      try {
        let img = new DOMParser()
          .parseFromString(htmlStr, "text/html")
          .querySelector("img");
        return img.src;
      } catch (e) {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.topstory_container,
.online_container,
.history_container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
}
/* 最新展覽 */

.topstory_logo_container {
  width: 20%;
  position: relative;
}

.topstory_logo {
  width: 150px;
  height: 40px;
  background-color: #ff4b2d;
  border-radius: 4px;
  margin: 0 auto;
  font-size: 18px;
  color: white;
  text-align: center;
  line-height: 40px;
}

.topstory_logo_line {
  width: 4px;
  height: 400px;
  background-color: #ff4b2d;
  margin: 0 auto;
}

.topstory_content_container {
  width: 80%;
  cursor: pointer;
}

.online_container {
  display: block;
}

.online_logo_container {
  display: flex;
}

.online_logo {
  width: 150px;
  height: 40px;
  background-color: #6c6cea;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  margin-left: 40px;
}

.online_logo_line {
  width: 900px;
  height: 4px;
  background-color: #6c6cea;
  margin-top: 20px;
}

.online_content {
  display: flex;
  margin: 40px 200px;
  cursor: pointer;
}

.online_info {
  margin: 20px 40px;
}

/* 歷史展覽 */
.history_container {
  display: block;
}
.history_logo_container {
  display: flex;
}

.history_logo_line {
  width: 1000px;
  height: 4px;
  background-color: #a7a7a7;
  margin-top: 20px;
}
.history_logo {
  width: 150px;
  height: 40px;
  margin-right: 40px;
  border-radius: 4px;
  background-color: #a7a7a7;
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
}

.history_content_container {
  display: flex;
  justify-content: center;
}

.poster {
  margin: 30px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}

.poster > img {
  width: 280px;
  height: 400px;
  object-fit: fill;
}
.image {
  width: 287px;
  height: 169px;
}
</style>
