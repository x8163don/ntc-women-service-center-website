<template>
  <div>
    <h1 class="show_title">展覽特區</h1>
    <div class="show">
      <div class="show_banner">
        <img src="../../../assets/home/show_banner.jpg" alt="" />
      </div>
      <div
        id="activity_card"
        ref="activityCard"
        class="show_card"
        :class="{ hidden: !isShowExcerpt }"
      >
        <div class="show_card_title">
          《百女圖 當代女子一百貌》100Looks of Contemporary Women
        </div>
        <div class="show_excerpt">
          一位女子是什麼樣貌?<br />
          她可能是享受生活的單身女子<br />
          她可能是被甜蜜負擔耗盡力氣的偽單親女子<br />
          她可能是歷經千帆後活出自我的熟齡女子<br />
          她可能是戰勝乳癌的粉紅女子<br />
          誰說女子只有一種樣貌，哪一種都是最「女子」的女子!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecentlyExhibition",
  data() {
    return {
      isShowExcerpt: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (
        this.$refs.activityCard.getBoundingClientRect().top -
          event.target.scrollingElement.scrollTop <=
        -400
      ) {
        this.isShowExcerpt = true;
      }
    }
  }
};
</script>

<style scoped>
.show {
  margin-top: 40px;
  position: relative;
  overflow: hidden;
}

.show_title {
  font-size: 24px;
  position: relative;
  margin-top: 80px;
}

.show_title::before {
  content: "";
  width: 60px;
  height: 20px;
  background: #ffce5b;
  position: absolute;
  /*left: -20px;*/
  top: 4px;
  z-index: -1;
}

.show_title::after {
  content: "";
  width: 1200px;
  height: 2px;
  background: #a7a7a7;
  position: absolute;
  bottom: -14px;
  left: 0;
}

.show_banner {
  margin: 0 auto;
}

.hidden {
  display: none !important;
}

.show_card {
  display: inline-block;
  padding: 20px;
  position: absolute;
  right: 2px;
  bottom: 50px;
  background-color: white;
  box-shadow: 3px 3px 10px #ffce5b;
  animation-name: in_animation;
  animation-duration: 1s;
}

.show_card_title {
  font-weight: bold;
  font-size: 18px;
}

.show_excerpt {
  margin-top: 10px;
  font-size: 16px;
}

@keyframes in_animation {
  0% {
    right: -600px;
  }
  100% {
    right: 2px;
  }
}
</style>
