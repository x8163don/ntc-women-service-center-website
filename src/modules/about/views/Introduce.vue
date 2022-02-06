<template>
  <div class="main_container">
    <div class="guid_content">
      <h1>關於中心</h1>
      <br />
      <p>設立宗旨－</p>
      <br />
      <p>
        新北市婦女服務中心，為整合本市婦女福利資源及資訊，推廣性別教育宣導、協力婦女團體建構福利服務網絡的能力而設立。
      </p>
      <br />
      <p>
        提供社區婦女成長學習活動、女性議題倡議，以促進女性自我成長發展，培訓婦女團體專業人才，促進婦團橫向交流，提升民眾及婦團因應社會變遷一同關懷婦女新興議題。
      </p>
      <br />
      <p>服務目標－</p>
      <br />
      <p>1. 婦女權益暨性別平權教育宣導方案</p>
      <p>2. 婦團組織幹部暨志工培訓方案</p>
      <p>3. 婦女福利資訊交流平台</p>
      <p>4. 新北市婦女服務中心經營管理</p>
      <p>5.本市各項婦女支持性服務方案</p>

      <br />
      <p>服務對象－</p>
      <p>
        本市市民、投入婦女福利服務之非營利組織、機構與成員及關心婦女福利的民眾。
      </p>
      <br />
      <a
        href="https://docs.google.com/document/d/1e84nJTRDFnLzBsztHc6dkFus_90rM6JL/edit?usp=sharing&ouid=115132396574802911669&rtpof=true&sd=true"
        ><img
          class="download"
          src="../../../assets/about/button_download.png"
          target="_blank"
      /></a>
    </div>
    <!-- 環境介紹 -->
    <div class="area_content">
      <h1>新北市婦女服務中心環境介紹</h1>
      <div class="area_intro_container">
        <img id="place_img" class="place" :src="getImg()" />
        <div id="place_content" class="area_intro">
          {{ currentArea.placeContent }}
        </div>
        <img class="light" src="../../../assets/about/icon_light.png" />
      </div>

      <!-- 環境介紹地圖區 -->
      <div class="area_map_container">
        <div id="audioroom" class="audioroom" @click="selectArea('audioroom')">
          視 聽 教 室
          <div class="circle" :class="{ active: isActive('audioroom') }"></div>
        </div>
        <div
          id="bookcrossing"
          class="bookcrossing"
          @click="selectArea('bookcrossing')"
        >
          漂 書 區
          <div
            class="circle"
            :class="{ active: isActive('bookcrossing') }"
          ></div>
        </div>
        <div
          id="readingroom"
          class="readingroom"
          @click="selectArea('readingroom')"
        >
          閱 覽 室
          <div
            class="circle"
            :class="{ active: isActive('readingroom') }"
          ></div>
        </div>
        <div id="showroom" class="showroom" @click="selectArea('showroom')">
          展 覽 館
          <div class="circle" :class="{ active: isActive('showroom') }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: [
        {
          id: "audioroom",
          placeContent:
            "各公益團體或相關非營利組織開會或是辦理婦女福利研習、團體活動或視聽影音賞析最佳場所，只要是針對「對婦女福利等公益活動皆可申請使用」。"
        },
        {
          id: "bookcrossing",
          placeContent:
            "燈光明亮氣氛佳是放漂人想與大家分享的漂書區，漂書區裡喜歡的書籍可以直接帶回家收藏， 一起享受閱讀的樂趣。"
        },
        {
          id: "readingroom",
          placeContent:
            "最具書香氣息的閱覽室，來場舒適的閱讀午後時光，還有性別專業研究書籍與影音可供探索。"
        },
        {
          id: "showroom",
          placeContent:
            "每年都有規劃不同的藝文展覽，盡情享受展覽的視覺饗宴，和豐富有趣 的各式新知，帶給你充實的一天。"
        }
      ],
      currentArea: {
        id: "audioroom",
        placeContent:
          "各公益團體或相關非營利組織開會或是辦理婦女福利研習、團體活動或視聽影音賞析最佳場所，只要是針對「對婦女福利等公益活動皆可申請使用」。"
      }
    };
  },
  methods: {
    getImg() {
      return require(`../../../assets/about/${this.currentArea.id}.jpg`);
    },
    selectArea(id) {
      this.currentArea = this.area.find(item => item.id === id);
    },
    isActive(id) {
      return this.currentArea.id === id;
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 24px;
}

.main_container {
  width: 1200px;
  height: 1700px;
  margin: 0 auto;
  position: relative;
}

.breadcrumb_list > li {
  display: inline-block;
  color: gray;
  font-size: 1rem;
}

.breadcrumb_list > li > a {
  text-decoration: none;
  display: inline-block;
  color: #2d2d2d;
}

.breadcrumb_list > li::before {
  content: "/";
  font-size: 18px;
  color: #ffce5b;
  margin: 0 10px;
}

.breadcrumb_list > li:first-child::before {
  display: none;
}

.guid_content {
  border: 8px solid #ffce5b;
  background: white;
  border-radius: 40px;
  width: 90%;
  padding: 50px 200px 50px 70px;
  position: absolute;
  top: 50px;
  z-index: 1;
}

.download {
  border-radius: 10px;
}

.download:hover {
  box-shadow: 3px 3px 10px #ffce5b;
}
/* 環境介紹 */
.area_content {
  background: white;
  border: 8px solid #ffce5b;
  border-radius: 40px;
  width: 90%;
  padding: 60px;
  position: absolute;
  top: 690px;
  right: 0;
  z-index: 0;
}

.area_intro_container {
  display: flex;
  margin-top: 40px;
  position: relative;
}

.place {
  border-radius: 20px 0 0 20px;
  width: 400px;
  height: 300px;
  object-fit: cover;
}

.area_intro {
  border-radius: 0 20px 20px 0;
  background: #ffce5b;
  width: 500px;
  height: 300px;
  padding: 100px 50px;
  font-size: 16px;
  line-height: 30px;
}

img.light {
  position: absolute;
  right: 50px;
  top: 30px;
}

.area_map_container {
  margin-top: 20px;
  width: 900px;
  font-size: 0;
}

.area_map_container > div {
  cursor: pointer;
}

.audioroom,
.bookcrossing,
.readingroom,
.showroom {
  display: inline-block;
  font-size: 20px;
  text-align: center;
  line-height: 200px;
  position: relative;
}
.audioroom {
  border: 6px solid #ffce5b;
  border-right: transparent;
  border-radius: 20px 0 0 20px;
  width: 350px;
  height: 200px;
}
.bookcrossing {
  border: 6px solid #ffce5b;
  border-right: transparent;
  width: 200px;
  height: 200px;
}
.readingroom {
  border: 6px solid #ffce5b;
  border-radius: 0 20px 20px 0;
  width: 350px;
  height: 200px;
}
.showroom {
  border: 6px solid #ffce5b;
  border-radius: 20px;
  width: 600px;
  height: 200px;
  margin-top: 10px;
}

.circle {
  background-color: #d6d6d6;
  width: 50px;
  height: 50px;
  border-radius: 50px 0 0 0;
  position: absolute;
  right: 6px;
  bottom: 6px;
}

.active {
  background-color: #ff4b2d;
  width: 55px;
  height: 55px;
}
</style>
