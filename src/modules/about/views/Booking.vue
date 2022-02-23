<template>
  <!-- 主內容區 -->
  <div class="main_container">
    <div class="img_container">
      <img class="place_img" src="../../../assets/about/booking/place1.jpg" />
      <img class="place_img" src="../../../assets/about/booking/place2.jpg" />
    </div>
    <div class="content_container">
      <h1>新北市婦女服務中心會議室租借須知</h1>
      <p>
        <img
          class="icon_check"
          src="../../../assets/about/booking/Icon open-circle-check.png"
        />申請人於獲准租用時，應於一周前請以現金先行繳付百分之五十之訂金，餘數於活動辦理當日繳清，並同時索取收據。
      </p>
      <p>
        <img
          class="icon_check"
          src="../../../assets/about/booking/Icon open-circle-check.png"
        />本中心全面禁煙、嚴禁亂吐檳榔汁、喧譁、叫囂、鬥毆及攜帶寵物入內(導盲犬除外)及等情事發生，申請人應通知與會人員，並予適當約束。
      </p>
      <p>
        <img
          class="icon_check"
          src="../../../assets/about/booking/Icon open-circle-check.png"
        />活動舉行期間，不提供茶水、紙杯，請借用單位自備，未經許可不得在會議室用餐。
      </p>
      <p>
        <img
          class="icon_check"
          src="../../../assets/about/booking/Icon open-circle-check.png"
        />場地使用費依下列場次計算；每場次以三小時計，未滿三小時以三小時計算：<br />
        上午場次：九時至十二時 <br />
        下午場次：十四時至十七時 <br />
        全日: 九時至十七時<br />
        <br />
        其他相關事宜 請詳閱租借申請書
      </p>
      <p class="download_button">
        <a
          href="https://docs.google.com/document/d/1cm1yJEoK64ba1PFwqWNr_6ykwuU5wemU/edit?usp=sharing&ouid=115132396574802911669&rtpof=true&sd=true"
          ><img
            class="download"
            src="../../../assets/about/booking/button_download.png"
        /></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main_container {
  width: 1200px;
  margin: 0 auto;
}

.main_container {
  border: 8px solid #F6A096;
  border-radius: 40px;
  padding: 40px;
  display: flex;
}

.img_container {
  padding-top: 20px;
  width: 30%;
}

.place_img {
  border-radius: 10px;
  width: 300px;
  height: 200px;
  object-fit: cover;
}

.content_container {
  width: 70%;
  padding: 40px 60px;
  position: relative;
  line-height: 30px;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
}

.icon_check {
  position: absolute;
  left: 30px;
  padding-top: 6px;
}

.download_button {
  text-align: end;
}

.download {
  border-radius: 10px;
}

.download:hover {
  box-shadow: 3px 3px 10px #F6A096;
}

.breadcrumb_list > li {
  display: inline-block;
  color: gray;
  font-size: 1rem;
}

.breadcrumb_list > li > a {
  text-decoration: none;
  display: inline-block;
  color: #2d2d2d;
}

.breadcrumb_list > li::before {
  content: "/";
  font-size: 18px;
  color: #F6A096;
  margin: 0 10px;
}

.breadcrumb_list > li:first-child::before {
  display: none;
}
</style>
