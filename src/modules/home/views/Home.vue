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
              height="400px"
              :src="banner.src"
              contain
            ></v-img>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- Info -->
    <div class="flex">
      <v-tabs
        v-model="selectedTab"
        background-color="deep-purple accent-4"
        class="pa4 elevation-2"
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab.showName"
          :href="'#' + tab.showName"
          class="tab"
        >
          {{ tab.showName }}
        </v-tab>

        <v-tab-item
          v-for="tab in tabs"
          :key="'item' + tab.showName"
          :value="tab.showName"
        >
          <component :is="tab.component"></component>
        </v-tab-item>
      </v-tabs>

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
import Swiper from "swiper"
import HomeActivity from "../components/HomeActivity"
import HomeNews from "../components/HomeNews"
import HomePower from "../components/HomePower"

export default {
  components: {
    HomeActivity,
    HomeNews,
    HomePower,
  },
  mounted() {
    this.initSwiper()
  },
  data() {
    return {
      //button style
      buttonStyle: "mr2 tc f4 link dim mb2 pa3 dib pointer gray",

      banners: [
        {
          link: "/activity/post/c9109ee8-3d3f-4baa-ab24-a82bec4e1e4a",
          src:
            "https://lh3.googleusercontent.com/p0jpSzQBkrdQTLSO9eJEFcYgYe8iYkqcySz7JpnkoiHjfg3PfbgGi1EmWO1UQ3UtucsTxWIazxyckUutej5qlD5JmqkHRX7EIPLIqvrzbnvLM5tW6xgqwc-yROrwjfzBwkL5qhL1rVLueoY475KlKDXrIfgdhNY-5Shlq5M_UyaRomwx6KZFUnsF4sTI1LyZxoMwgNtYU9YbGkJVJE20OqkTQonuaMp-uezjfRBHxkF85RCiaDC8rt8P8A9Xvz_rFJRoxF3qEVpvNkEHwXl7D6Sm4wYkOVBgfR066lYbqH0dtoLkl2BToXATESkEQyMafA2ja0Sj_P8TcoNVruesS6PIo4XWa0iz_lh7az3r0TqeY3luREotA4NYCFN0uXcmD8QS69MY5LjGmqYYSlPqpEgSsu_c7zlbzlHzeo5eFib5AGSYCRPp8Vrtn-B3NVg_y84voEbcxz4S1gzS4yYnylRU_fSDedOiUY_7dYbV1rf9x0lDLxgFZ6-3AaMKR6iOtEe-bmAIx3jnHdFrmjZ3pPKvA-ysHYcuc5W3BMuhrzMhzE04r-_qxwhwHNVIu88tt1WeekAyi6nSIangCy-g0xWh8pYbRUDSsNr4TEPTVdRhQnl6ZVIYjDM5cxre_pe_bWxG3c77n7G7_JmhFEpqEVoxqHLY5m2cCIVIWU0mAuyLi7qS56HcfoF3Mnswbr0wQvU539qkF3Ue9DvfqRxvBKMYOup9ovw_u05J3xz7oHXl-C8z=w2880-h1442-no",
        },
      ],

      swiper: null,

      selectedTab: "HomeNews",
      tabs: [
        {
          showName: "最新消息",
          component: "HomeNews",
        },
        {
          showName: "近期活動",
          component: "HomeActivity",
        },
        {
          showName: "女力加油站",
          component: "HomePower",
        },
      ],

      news: [
        {
          name: "title1",
          url: "https://www.google.com",
        },
      ],

      activies: [
        {
          name: "activies1",
          url: "https://www.google.com",
        },
      ],

      powers: [
        {
          name: "power1",
          url: "https://www.google.com",
        },
      ],
    }
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
    },
  },
}
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
