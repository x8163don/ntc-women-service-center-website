<template>
  <div>
    <!-- banner區 -->
    <div class="banner_bg">
      <div class="banner_container">
        <div class="banner_content">
          <div class="banner_info_title">
            《消除對婦女一切形式歧視公約》CEDAW
          </div>
          <div class="banener_info_en">
            The Convention on the Elimination of all Forms of Discrimination
            Against Women
          </div>
          <div class="banner_info">
            聯合國大會於1979年12月通過，並開放給各國簽字、批准和加入生效<br />
            公約的成員國須承諾履行一系列的措施，終止一切形式對婦女的歧視。<br />
            <br />
            保障婦女在政治、法律、工作、教育、醫療服務、商業活動與家庭關係<br />等各方面的權利。
          </div>
        </div>
      </div>
    </div>

    <div class="film_container">
      <div class="youtube">
        <iframe
          id="youtube"
          width="570"
          height="360"
          :src="selectedVideo.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="youtubelist_container">
        <div class="youbelist_title">
          <img src="../../../assets/gender_equality/Icon-video.png" />
          CEDAW系列短片
        </div>
        <div class="animate_link_container">
          <div class="animate">
            <div class="line"></div>
          </div>
          <div id="cedaw-list" class="youtubelist_link">
            <div
              class="video_item"
              v-for="video in cedawVideos"
              :key="video.url"
              @click="selectVideo(video)"
            >
              <div class="dot"></div>
              <div>{{ video.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="youtubelist_container">
        <div class="youbelist_title">
          <img src="../../../assets/gender_equality/Icon-video.png" />
          反性別暴力倡議史
        </div>
        <div class="animate_link_container">
          <div class="animate">
            <div class="line"></div>
          </div>
          <div id="anti_gender-list" class="youtubelist_link">
            <div
              class="video_item"
              v-for="video in antiViolenceVideos"
              :key="video.url"
              @click="selectVideo(video)"
            >
              <div class="dot"></div>
              <div>{{ video.title }}</div>
            </div>
            <a
              href="https://www.youtube.com/channel/UCI1902Tuyzq5WXRevEtA5pA/videos"
            >
              觀看更多<img
                class="arrowlink"
                src="../../../assets/gender_equality/Icon-right-circle.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="download_container">
      <div class="download_tilte">
        <img src="../../../assets/gender_equality/Icon-download.png" />下載專區
      </div>
      <div class="download_content">
        <div class="download_link">
          <a
            v-for="item in genderImage"
            :key="item.url"
            target="_blank"
            :href="item.url"
            style="display: block; margin-bottom: 20px"
            >{{ item.name }}</a
          >
        </div>
        <div class="download_link">
          <a
            v-for="item in life"
            :key="item.url"
            target="_blank"
            :href="item.url"
            style="display: block; margin-bottom: 20px"
            >{{ item.name }}</a
          >
        </div>
        <div class="download_link">
          <a
            v-for="item in requirement"
            :key="item.url"
            target="_blank"
            :href="item.url"
            style="display: block; margin-bottom: 20px"
            >{{ item.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Videos from "../data/videos.json";

export default {
  computed: {
    cedawVideos() {
      return this.videos.filter(item => item.category === "CEDAW系列短片");
    },
    antiViolenceVideos() {
      return this.videos.filter(item => item.category === "反性別暴力倡議史");
    },
    genderImage() {
      return this.files.filter(item => item.category === "性別圖像");
    },
    life() {
      return this.files.filter(item => item.category === "婦女生活調查");
    },
    requirement() {
      return this.files.filter(item => item.category === "婦女需求調查");
    }
  },
  data() {
    return {
      videos: Videos,
      selectedVideo: {
        title: "第一集 互相幫忙篇",
        url: "https://www.youtube.com/embed/04anNYHnmrk"
      },
      files: [
        {
          category: "性別圖像",
          name: "2021年性別圖像",
          url:
            "https://drive.google.com/file/d/1HtDgZkzgSeTtYhBLbSMGPc_0CY4IL4m1/view"
        },
        {
          category: "性別圖像",
          name: "2020年性別圖像",
          url:
            "https://drive.google.com/file/d/1TcikE1RRQWBlGTAhGQKC2DZm6wGLuvuG/view"
        },
        {
          category: "性別圖像",
          name: "2019年性別圖像",
          url:
            "https://drive.google.com/file/d/1TW6W1MHmhp8mVmwICyi0iTi_L2DEBrge/view"
        },
        {
          category: "性別圖像",
          name: "2018年性別圖像",
          url:
            "https://drive.google.com/file/d/1wZFm7ZqxWPwpWcvHhNGDdTp6ytMCYkxw/view"
        },
        {
          category: "性別圖像",

          name: "2017年性別圖像",
          url:
            "https://drive.google.com/file/d/1IuhjIr2SG0Iwp0jzTEec0WAYNID7WgrS/view"
        },
        {
          category: "婦女生活調查",
          name: "108年全國婦女生活狀況調查報告",
          url:
            "https://drive.google.com/file/d/1c5GWxDLkOnJkJL6PDquz5tDDaHIZzOUO/view"
        },
        {
          category: "婦女生活調查",
          name: "104年全國婦女生活狀況調查報告",
          url:
            "https://drive.google.com/file/d/1IDT_v8GoNcbY0-dCw0wz4bypzSwzb0p-/view"
        },
        {
          category: "婦女需求調查",
          name: "103年新北市婦女需求調查表",
          url:
            "https://drive.google.com/file/d/1GApwelRiEnBzQYDQTaIVtY9KBH6hxF4O/view"
        }
      ]
    };
  },
  methods: {
    selectVideo(video) {
      this.selectedVideo = video;
    }
  }
};
</script>

<style scoped>
.banner_container,
.film_container,
.download_container {
  width: 1200px;
  margin: 0 auto;
  /* border: 1px solid black; */
}

.banner_bg {
  height: 520px;
  background-image: url(../../../assets/gender_equality/banner_bg.png);
}

.banner_content {
  padding-top: 200px;
  padding-left: 100px;
}

.banner_info_title {
  font-size: 24px;
  font-weight: bold;
}

.banener_info_en {
  font-size: 12px;
  margin-bottom: 40px;
}

.banner_info {
  font-weight: bold;
  line-height: 25px;
}

/* youtube影片區 */
.film_container {
  display: flex;
  margin-top: 50px;
}

.youtube {
  width: 570px;
  height: 360px;
}

.youtubelist_container {
  width: 315px;
  margin: 0 auto;
}

.youbelist_title {
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  background-color: #FFEEED;
  border-radius: 10px;
  height: 50px;
  width: 250px;
  margin: 0 auto;
  padding: 10px;
}

.animate_link_container {
  display: flex;
  justify-content: flex-end;
}

.youtubelist_link {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  line-height: 50px;
}

.animate {
  margin-right: 35px;
  display: inline-block;
  width: 2px;
  height: 300px;
  background-color: #707070;
}

.arrowlink {
  position: relative;
  top: 4px;
}

/* 下載專區 */
.download_container {
  margin-top: 100px;
}

.download_tilte {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.download_tilte > img {
  margin-right: 10px;
}

.download_content {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.download_link {
  border: 4px solid #F6A096;
  border-radius: 10px;
  padding: 30px;
  height: 100%;
}

a {
  text-decoration: none;
  color: #2d2d2d;
  font-size: 18px;
}

.video_item {
  position: relative;
  width: 100%;
  cursor: pointer;
}

.dot::before {
  content: "";
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 1px;
  left: -44px;
  background-color: #ff4b2d;
}

.dot {
  display: none;
  position: absolute;
}

.activity {
  display: inline-block;
}

.video_item:hover > .dot {
  display: inline-block;
}
</style>
