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
            聯合國大會於1979年12月通過，並開放給各國簽字、批准和加入生效<br/>
            公約的成員國須承諾履行一系列的措施，終止一切形式對婦女的歧視。<br/>
            <br/>
            保障婦女在政治、法律、工作、教育、醫療服務、商業活動與家庭關係<br/>等各方面的權利。
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
          <img src="../../../assets/gender_equality/Icon-video.png"/>
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
          <img src="../../../assets/gender_equality/Icon-video.png"/>
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
        <img src="../../../assets/gender_equality/Icon-download.png"/>性別平等相關研究
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
        <div class="download_link">
          <a
              v-for="item in genderMagazine"
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
    },
    genderMagazine() {
      return this.files.filter(item => item.category === "性別平等教育季刊");
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
          name: "108年新北市婦女需求調查表",
          url:
              "https://drive.google.com/file/d/1Dr37smWa5zyOswmsVl94UM3ccLNQYLrA/view"
        },
        {
          category: "婦女需求調查",
          name: "103年新北市婦女需求調查表",
          url:
              "https://drive.google.com/file/d/1GApwelRiEnBzQYDQTaIVtY9KBH6hxF4O/view"
        },
        {
          category: "性別平等教育季刊",
          name: "102期 給教育造浪者的性教育",
          url: "https://www.gender.edu.tw/web/upload/society/Magazine/%E7%AC%AC102%E6%9C%9F%20%E7%B5%A6%E6%95%99%E8%82%B2%E9%80%A0%E6%B5%AA%E8%80%85%E7%9A%84%E6%80%A7%E6%95%99%E8%82%B2.pdf"
        }
        ,
        {
          category: "性別平等教育季刊",
          name: "101期 給教育造浪者的性教育",
          url: "https://www.gender.edu.tw/web/upload/society/Magazine/%E7%AC%AC101%E6%9C%9F%20%E7%99%BD%E8%89%B2%E6%81%90%E6%80%96%E7%9A%84%E6%80%A7%E5%88%A5%E9%9D%A2%E9%9D%A2%E8%A7%80--%E7%A9%BF%E8%B6%8A%E6%BF%83%E9%9C%A7%E7%9A%84%E4%BA%BA%EF%BC%9A%E5%A5%B9%E7%9A%84%E7%99%BD%E6%81%90%E8%A8%98%E6%86%B6%E8%88%87%E8%A6%8B%E8%AD%89_v2.pdf"
        }
        ,
        {
          category: "性別平等教育季刊",
          name: "100期 世代留聲──我們新住在臺灣",
          url: "https://www.gender.edu.tw/web/upload/society/Magazine/%E7%AC%AC100%E6%9C%9F%20%E4%B8%96%E4%BB%A3%E7%95%99%E8%81%B2%E2%94%80%E2%94%80%E6%88%91%E5%80%91%E6%96%B0%E4%BD%8F%E5%9C%A8%E8%87%BA%E7%81%A3.pdf"
        }
        , {
          category: "性別平等教育季刊",
          name: "99期 請問貴姓？──姓氏的性別政治",
          url: "https://www.gender.edu.tw/web/upload/society/Magazine/NO99%20%E8%AB%8B%E5%95%8F%E8%B2%B4%E5%A7%93%EF%BC%9F%E2%94%80%E2%94%80%E5%A7%93%E6%B0%8F%E7%9A%84%E6%80%A7%E5%88%A5%E6%94%BF%E6%B2%BB.pdf"
        }
        , {
          category: "性別平等教育季刊",
          name: "98期 大學校園性別友善空間開箱！",
          url: "https://www.gender.edu.tw/web//upload/society/Magazine/NO98%20%20%E5%A4%A7%E5%AD%B8%E6%A0%A1%E5%9C%92%E6%80%A7%E5%88%A5%E5%8F%8B%E5%96%84%E7%A9%BA%E9%96%93%E9%96%8B%E7%AE%B1%EF%BC%81.pdf"
        }
        , {
          category: "性別平等教育季刊",
          name: "97期 社區，有她陪伴！",
          url: "https://www.gender.edu.tw/web/upload/society/Magazine/NO97%20%20%E7%A4%BE%E5%8D%80%EF%BC%8C%E6%9C%89%E5%A5%B9%E9%99%AA%E4%BC%B4%EF%BC%81.pdf"
        }
        , {
          category: "性別平等教育季刊",
          name: "96期 跨性別專題，第二個十年",
          url: "https://www.gender.edu.tw/web/upload/society/Magazine/NO96%20%20%E8%B7%A8%E6%80%A7%E5%88%A5%E5%B0%88%E9%A1%8C%EF%BC%8C%E7%AC%AC%E4%BA%8C%E5%80%8B%E5%8D%81%E5%B9%B4.pdf"
        }
        , {
          category: "性別平等教育季刊",
          name: "95期 多元文化/性別與家庭",
          url: "https://www.gender.edu.tw/web/upload/society/Magazine/NO95%20%E5%A4%9A%E5%85%83%E6%96%87%E5%8C%96%E3%80%81%E6%80%A7%E5%88%A5%E8%88%87%E5%AE%B6%E5%BA%AD_v2.s.pdf"
        }, {
          category: "性別平等教育季刊",
          name: "94期 國際人權公約在臺灣",
          url: "https://www.gender.edu.tw/web/upload/society/Magazine/NO94%20%E5%9C%8B%E9%9A%9B%E4%BA%BA%E6%AC%8A%E5%85%AC%E7%B4%84%E5%9C%A8%E8%87%BA%E7%81%A3v4.pdf"
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
  justify-content: start;
  flex-wrap: wrap;
  gap:15px 20px;
  margin-top: 40px;
}

.download_link {
  border: 4px solid #F6A096;
  border-radius: 10px;
  padding: 30px;
  height: 100%;
  width: 30%;
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
