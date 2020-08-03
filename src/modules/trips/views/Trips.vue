<template>
  <div class="pa5">
    <!-- main banner -->
    <v-img
      src="https://lh3.googleusercontent.com/pw/ACtC-3dh1rC7tY5PPy70-xJ0zEO09YiYfK-DkkM2ysHEV0XSzBQd9CZhJyxs9teqUbdLnJVurwsz6gJXBxG82fCKXbCvVfMBdXRV1vwgTWKdzPCDij4gSuFahLx9h0RPTWWjEsNe-uc60SrlA5B1nuyLAaM6=w1341-h843-no?authuser=1"
    ></v-img>

    <!-- route -->
    <div class="mt5 mb5">
      <p class="f3 tc dark-blue">導覽路線</p>
      <p class="mt3 fw5 lh-copy">
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
    </div>

    <v-container>
      <v-row no-gutters>
        <v-col class="mr3">
          <!-- activity -->
          <v-card class="pa5">
            <a
              :class="linkStyle"
              href="https://drive.google.com/file/d/1dFXL0M3Ehta_1K-0LTCPWKMSB9MNDE-n/view?usp=sharing"
              >社區體驗活動
            </a>
          </v-card>
        </v-col>

        <v-col class="mr3">
          <!-- store introduce -->
          <v-card class="pa5">
            <a
              :class="linkStyle"
              href="https://drive.google.com/file/d/1yIFJ7mMNPJogaZfegzxkB8P1w5bp9BeK/view?usp=sharing"
              >店家簡介
            </a>
          </v-card>
        </v-col>

        <v-col>
          <!-- booking terms -->
          <v-card class="pa5">
            <a
              :class="linkStyle"
              href="https://drive.google.com/file/d/1NRws3yaXCLa1E1CD3Qmb1GBk_zcJW6KT/view?usp=sharing"
              >預約導覽說明
            </a>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mr3 ml3">
          <v-card class="center pa5 w-third">
            <a
              :class="linkStyle"
              href="https://drive.google.com/file/d/1K7dRkfULKYxs1mbxloao4Ci9ZVK_jVoo/view?usp=sharing"
              >參訪手冊
            </a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- video -->
    <div class="mt5">
      <iframe
        src="https://www.youtube.com/embed/nYY4V9eZEEA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="db center w-90"
        style="height:30vw"
      ></iframe>
    </div>

    <v-container class="mt5">
      <!-- booking -->
      <v-row>
        <v-col class="tc">
          <a
            class="f2 link dim br2 ph3 pv2 mb2 white bg-dark-blue dib tc"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_zTyLNIhe8jFm5Y5WKS5Xj8-K4UPSylizC8tNbtG51o2pFQ/viewform?usp=sf_link"
            >預約參訪
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // default style
      linkStyle: "f4 fw6 db blue link dim ml-auto mr-auto tc",
    }
  },
}
</script>

<style scoped></style>
