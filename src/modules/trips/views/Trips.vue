<template>
  <div class="pa5">
    <!-- title -->
    <h2 class="tc dark-blue">
      新北 平溪- 菁桐女路
    </h2>

    <!-- main banner -->

    <!-- route -->
    <b :class="subtitle">導覽路線</b>
    <p class="mt2">
      01白石地標→02電工寮→03豬灶→04石筍尖→05日式建築宿舍
      →06台陽招待所→07皇宮(平溪富士山、基隆河生態) →08礦工
      雕像→09礦工福利社→10菁桐火車站→11菁桐礦業生活館→12
      石底大斜坑→13捨石山→14選洗煤場
      <a
        href="https://drive.google.com/file/d/1luxuvKlAZqkSVYnOpkQxo0HMqpixIm60/view?usp=sharing"
        :class="linkStyle"
        >詳細點我</a
      >
    </p>

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

    <!-- booking -->
    <div class="mt3">
      <a
        disable
        class="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue"
        href="https://docs.google.com/forms/d/e/1FAIpQLSc_zTyLNIhe8jFm5Y5WKS5Xj8-K4UPSylizC8tNbtG51o2pFQ/viewform?usp=sf_link"
        >點我報名</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // default style
      subtitle: "db f3 mb1 mt3",
      linkStyle: "f4 fw6 blue link dim",
    }
  },
}
</script>

<style scoped></style>
