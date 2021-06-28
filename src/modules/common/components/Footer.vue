<template>
  <footer class="footer-container pa4 pa5-l black-70 ">
    <div class="flex justify-center">
      <div
        class="footer-section"
        :key="section.title"
        v-for="section in sections"
      >
        <div class="f3 fw6 white pa2">{{ section.title }}</div>
        <a
          :href="item.url"
          :key="item.displayName"
          v-for="item in section.items"
          class="db f4 fw5 link white-70 no-underline dim pa2 "
        >
          {{ item.displayName }}
        </a>
      </div>
    </div>

    <div class="flex flex-column items-center">
      <div class="f3 fw6 white pa2">新北市婦女服務中心</div>

      <div class="flex justify-center">
        <div>
          <div class="db f4 fw5 white-70 no-underline pa2 ">
            聯絡方式
          </div>
          <span class="db f4 fw5 white-70 no-underline pa2">
            電話: 02-8951-9029
          </span>
          <span class="db f4 fw5 white-70 no-underline pa2">
            傳真: 02-8951-9239
          </span>
          <span class="db f4 fw5 white-70 no-underline pa2">
            信箱: ntwsc9029@gmail.com
          </span>
        </div>
        <div>
          <div class="db f4 fw5 white-70 no-underline pa2">服務據點</div>
          <span class="db f4 fw5 white-70 no-underline pa2">
            開館時間
          </span>
          <span class="db f4 fw5 white-70 no-underline pa2">
            週一至週五: 8:30AM-17:30PM
          </span>
          <span class="db f4 fw5 white-70 no-underline pa2">
            週六及週日國定假日皆為休館時間
          </span>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "與你有約",
          items: [
            { displayName: "女路之旅", url: "/trips" },
            { displayName: "報名活動", url: "/activity" },
            { displayName: "場地租借", url: "/about/booking" },
            { displayName: "預約參訪", url: "/about/visit" },
          ],
        },
        {
          title: "共享資源",
          items: [
            { displayName: "認識CEDAW", url: "/growing/cedaw" },
            {
              displayName: "新北市婦女資源地圖",
              url: "https://www.gec.ntpc.gov.tw/",
            },
          ],
        },
        {
          title: "友站連結",
          items: [
            {
              displayName: "新北市政府",
              url: "https://www.ntpc.gov.tw/ch/index.jsp",
            },
            {
              displayName: "國家婦女館",
              url: "http://www.taiwanwomencenter.org.tw/zh-tw/Home/Index",
            },
            {
              displayName: "性別指標資訊平台",
              url: "http://www.gender-indicators.org.tw/zh-tw/home",
            },
            {
              displayName: "性別平等會",
              url: "https://gec.ey.gov.tw/",
            },
            {
              displayName: "主計處-性別統計專區",
              url: "https://www.stat.gov.tw/np.asp?ctNode=6015",
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scope>
.footer-container {
  background-color: #aaabd3;
}

.footer-section {
  margin-right: 40px;
}

.footer-section:last-child {
  margin-right: 0;
}
</style>
