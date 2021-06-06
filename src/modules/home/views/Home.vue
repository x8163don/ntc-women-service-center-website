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

    <HomeNews class="mt5 mb5" />
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
      banners: [
        {
          link: "https://ntwsc.tw/activity/post/373",
          src:
            "https://lh3.googleusercontent.com/pw/ACtC-3fiF1HkgovPcET7bult8EwCjDClkUPo1VPVE3D_S3wN0ucTvKFCdlH4Xcq3OoYr9bSCpqvIiGInLrhjJzlPlzMjeKp_bkkg58GfL5m24F0uuvm84iyIQpB6s7TPFjFRTTGoI0H5k3C3UTDDQAs-NrrK=w667-h889-no?authuser=1"
        }
      ],

      swiper: null
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
