<template>
  <div>
    <!-- Carousel -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide :key="index" v-for="(banner, index) in banners">
        <img :src="banner" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- News -->
    <!-- Activity -->
    <!-- Power -->

    <!-- With you -->
    <!-- Resource -->
    <!-- Other website -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "https://i1.go2yd.com/image.php?url=0KFRrK8beh",
        "https://i1.go2yd.com/image.php?url=0KFRrK8beh",
        "https://i1.go2yd.com/image.php?url=0KFRrK8beh"
      ]
    }
  }
}
</script>

<style></style>
