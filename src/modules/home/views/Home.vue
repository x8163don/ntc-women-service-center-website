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

    <!-- News -->
    <!-- Activity -->
    <!-- Power -->

    <!-- With you -->
    <!-- Resource -->
    <!-- Other website -->
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  mounted() {
    this.initSwiper();
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
      swiper: null
    };
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
      });
    }
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100vw;
}
</style>
