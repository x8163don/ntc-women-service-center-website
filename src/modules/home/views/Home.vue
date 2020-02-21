<template>
  <div>
    <!-- Carousel -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :key="index"
          v-for="(banner, index) in banners"
        >
          <a :href="banner.link"> <img :src="banner.src"/></a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- Info -->
    <div>
      <span
        v-for="(tab, index) in tabs"
        :key="'tab' + index"
        @click="selectedTab = tab.component"
        >{{ tab.showName }}</span
      >
      <keep-alive>
        <component v-bind:is="selectedTab"></component>
      </keep-alive>
    </div>

    <!-- Link -->
    <div>
      <!-- With you -->
      <div>與你有約</div>

      <!-- Resource -->
      <div>共享資源</div>

      <!-- Other website -->
      <div>友站連結</div>
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
    HomePower
  },
  mounted() {
    this.initSwiper()
  },
  data() {
    return {
      banners: [
        {
          link: "http://www.google.com",
          src: "https://i1.go2yd.com/image.php?url=0KFRrK8beh"
        },
        {
          link: "http://www.google.com",
          src: "https://i1.go2yd.com/image.php?url=0KFRrK8beh"
        },
        {
          link: "http://www.google.com",
          src: "https://i1.go2yd.com/image.php?url=0KFRrK8beh"
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
    }
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      })
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100vw;
}
</style>
