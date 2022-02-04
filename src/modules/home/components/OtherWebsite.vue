<template>
  <section>
    <div class="carousel-container">
      <img
        id="arrow-left"
        class="carousel-arrow carousel-arrow-left"
        src="../../../assets/home/icon-carousel-left.png"
        @click="moveCarousel(-300)"
      />
      <div ref="carousel" id="carousel" class="carousel">
        <a v-for="item in links" :key="item.url" :href="item.url">
          <img :src="getIconPath(item)" />
        </a>
      </div>
      <img
        id="arrow-right"
        class="carousel-arrow carousel-arrow-right"
        src="../../../assets/home/icon-carousel-right.png"
        @click="moveCarousel(300)"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "OtherWebsite",
  data() {
    return {
      links: [
        { url: "https://www.ntpc.gov.tw/ch/index.jsp", name: "link1" },
        { url: "https://gec.ey.gov.tw/", name: "link2" },
        {
          url: "http://www.taiwanwomencenter.org.tw/zh-tw/Home/Index",
          name: "link3"
        },
        { url: "https://www.stat.gov.tw/np.asp?ctNode=6015", name: "link4" },
        {
          url: "http://www.gender-indicators.org.tw/zh-tw/home",
          name: "link5"
        },
        { url: "https://www.gec.ntpc.gov.tw/", name: "link6" }
      ]
    };
  },
  methods: {
    getIconPath(item) {
      return require(`../../../assets/home/${item.name}.png`);
    },
    moveCarousel(px) {
      this.$refs.carousel.scrollLeft += px;
    }
  }
};
</script>

<style scoped>
.carousel {
  max-width: calc(100% - 100px);
  display: flex;
  flex-shrink: 0;
  overflow-x: scroll;
  margin: 0 auto;
  scroll-behavior: smooth;
  overflow: hidden;
}

.carousel-container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.carousel-arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
}

.carousel-arrow-left {
  left: 0px;
}

.carousel-arrow-right {
  right: 0px;
}

a > img {
  max-width: 300px;
  width: 300px;
  height: 100px;
}
</style>
