<template>
  <div class="pa5">
    <!-- title -->
    <h2 class="tc dark-blue">
      新北 平溪- 菁桐女路
    </h2>

    <!-- main banner -->
    <v-img
      src="https://lh3.googleusercontent.com/pw/ACtC-3dh1rC7tY5PPy70-xJ0zEO09YiYfK-DkkM2ysHEV0XSzBQd9CZhJyxs9teqUbdLnJVurwsz6gJXBxG82fCKXbCvVfMBdXRV1vwgTWKdzPCDij4gSuFahLx9h0RPTWWjEsNe-uc60SrlA5B1nuyLAaM6=w1341-h843-no?authuser=1"
      class="mt4"
    ></v-img>

    <!-- route -->
    <b :class="subtitle">導覽路線</b>
    <p class="mt2">
      01白石地標→02電工寮→03豬灶→04石筍尖→05日式建築宿舍
      →06台陽招待所→07皇宮(平溪富士山、基隆河生態) →08礦工
      雕像→09礦工福利社→10菁桐火車站→11菁桐礦業生活館→12
      石底大斜坑→13捨石山→14選洗煤場
    </p>
    <a
      href="https://drive.google.com/file/d/1luxuvKlAZqkSVYnOpkQxo0HMqpixIm60/view?usp=sharing"
      :class="linkStyle"
      >詳細點我</a
    >

    <!-- activity -->
    <b :class="subtitle">
      社區體驗活動<a
        :class="linkStyle"
        href="https://drive.google.com/file/d/1dFXL0M3Ehta_1K-0LTCPWKMSB9MNDE-n/view?usp=sharing"
        >詳細點我</a
      >
    </b>

    <!-- store introduce -->
    <b :class="subtitle">
      店家簡介
      <a
        :class="linkStyle"
        href="https://drive.google.com/file/d/1v5NIY7P9iPs-pg3oJCp_rceBfdMs2l02/view?usp=sharing"
        >詳細點我</a
      >
    </b>

    <!-- booking terms -->
    <b :class="subtitle">
      預約導覽說明及報名表下載
      <a
        :class="linkStyle"
        href="https://drive.google.com/file/d/1mrUPlgj0XvHnz2o5Z8p1stjRmlY_MoYM/view?usp=sharing"
        >詳細點我</a
      >
    </b>
    <!-- video -->

    <!-- booking -->
    <div class="mt3">
      <a
        class="f2 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue"
        href="https://docs.google.com/forms/d/e/1FAIpQLSc_zTyLNIhe8jFm5Y5WKS5Xj8-K4UPSylizC8tNbtG51o2pFQ/viewform?usp=sf_link"
        >預約參訪</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // default style
      subtitle: "db f4 mt4",
      linkStyle: "f4 fw6 db blue link dim mt3 ml-auto mr-auto ",
    }
  },
}
</script>

<style scoped></style>
