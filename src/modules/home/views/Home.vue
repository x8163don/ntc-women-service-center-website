<template>
  <div>
    <!-- Carousel -->
    <div class="swiper-container tc">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :key="index"
          v-for="(banner, index) in banners"
        >
          <a :href="banner.link">
            <v-img
              class="white--text align-end"
              height="650px"
              :src="banner.src"
              contain
            ></v-img>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <HomeNews class="mt5" />

    <!-- Info -->
    <div class="flex">
      <!-- Link -->
      <div class="w-40 flex flex-column pa3">
        <!-- With you -->
        <div class="lt">
          <div class="tl w2 h1 bg-red dib v-btm "></div>
          <div class="tl red dib">與你有約</div>
          <div class="mt2">
            <a href="/activity" :class="buttonStyle" class="button-yellow"
              >我要報名</a
            >
            <a href="/about/booking" :class="buttonStyle" class="button-yellow"
              >場地租借</a
            >
            <a href="/about/visit" :class="buttonStyle" class="button-yellow"
              >預約參訪</a
            >
            <a href="/trips" :class="buttonStyle" class="button-yellow"
              >女路之旅</a
            >
          </div>
        </div>

        <!-- Resource -->
        <div>
          <div class="w2 h1 bg-red dib v-btm"></div>
          <div class="red dib">共享資源</div>
          <div class="mt2">
            <a href="/growing/cedaw" :class="buttonStyle" class="button-pink"
              >認識CEDAW</a
            >
            <a
              href="https://www.gec.ntpc.gov.tw/content/?parent_id=10122"
              :class="buttonStyle"
              class="button-pink"
              >新北市婦女資源地圖</a
            >
          </div>
        </div>

        <!-- Other website -->
        <div>
          <div class="w2 h1 bg-red dib v-btm"></div>
          <div class="red dib">友站連結</div>
          <div class="mt2 flex flex-column">
            <div class="flex flex-row">
              <div class="flex flex-column">
                <a
                  href="/videos"
                  :class="buttonStyle"
                  class="button-light-green"
                >
                  性平影音
                </a>

                <a href="https://www.ntpc.gov.tw/ch/index.jsp"
                  ><img
                    class="h3"
                    src="https://www.ntpc.gov.tw/ch/images/all/logo.png"
                  />
                </a>
              </div>

              <div class="ml2 flex flex-column">
                <a href="https://www.facebook.com/NTWSC/">
                  <img src="../../../assets/facebook.png" />
                </a>

                <a href="https://lin.ee/cMbVcnM">
                  <img src="../../../assets/line.png" />
                </a>
              </div>
            </div>
          </div>

          <a
            href="http://www.taiwanwomencenter.org.tw/zh-tw/Home/Index"
            :class="buttonStyle"
            class="button-light-green"
            >國家婦女館</a
          >
          <a
            href="http://www.gender-indicators.org.tw/zh-tw/home"
            :class="buttonStyle"
            class="button-light-green"
            >性別指標資訊平台</a
          >
          <a
            href="https://gec.ey.gov.tw/"
            :class="buttonStyle"
            class="button-light-green"
            >行政院 性別平等會</a
          >
          <a
            href="https://www.stat.gov.tw/np.asp?ctNode=6015"
            :class="buttonStyle"
            class="button-light-green"
            >行政院性別主計總處–性別統計專區</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import HomeNews from "../components/HomeNews";

export default {
  components: {
    HomeNews
  },
  mounted() {
    this.initSwiper();
  },
  data() {
    return {
      //button style
      buttonStyle: "mr2 tc f4 link dim mb2 pa3 dib pointer gray",

      banners: [
        {
          link: "https://ntwsc.tw/activity/post/373",
          src:
            "https://lh3.googleusercontent.com/pw/ACtC-3fiF1HkgovPcET7bult8EwCjDClkUPo1VPVE3D_S3wN0ucTvKFCdlH4Xcq3OoYr9bSCpqvIiGInLrhjJzlPlzMjeKp_bkkg58GfL5m24F0uuvm84iyIQpB6s7TPFjFRTTGoI0H5k3C3UTDDQAs-NrrK=w667-h889-no?authuser=1"
        }
      ],

      swiper: null,

      selectedTab: "HomeNews",
      tabs: [
        {
          showName: "最新消息",
          component: "HomeNews"
        },
        {
          showName: "近期活動",
          component: "HomeActivity"
        },
        {
          showName: "女力加油站",
          component: "HomePower"
        }
      ]
    };
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        loop: false,
        autoplay:
          this.banners.length === 1
            ? false
            : {
                delay: 5000,
                disableOnInteraction: true
              },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  }
};
</script>

<style scoped>
.tab {
  background-color: #f68657;
  color: #fff;
}

.button-yellow {
  background-color: #f9e79f;
}

.button-pink {
  background-color: #f5b7b1;
}

.button-light-green {
  background-color: #a2d9ce;
}
</style>
