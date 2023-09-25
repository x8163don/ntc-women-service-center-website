<template>
  <div class="main_container">
    <img class="power_img" src="../../../assets/power/power.png" />
    Knowledge is power.
    <div
      class="library_container"
      style="background-image: url(../../../assets/power/bg.png)"
    >
      <div class="library_content">
        <img
          src="../../../assets/power/Icon-bookmark.png"
        /><br />中心館藏<br />
        <a
          href="https://drive.google.com/file/d/1t5OqI4eF1WWuVEQ0ZbX23gv2vasLAQzK/view"
          target="_blank"
          >館藏清單</a
        ><br />
        <a
          href="https://drive.google.com/file/d/1y_NW_nO8sBrIC3V6b6E2XCoFW8wk2K55/view"
          target="_blank"
          >繪本類</a
        ><br />
        <a
          href="https://drive.google.com/file/d/1hauH-WbDnlddaeTzdRj7sVeW3b3k8yvJ/view"
          target="_blank"
          >電影類</a
        ><br />
      </div>
      <div class="library_content">
        <img src="../../../assets/power/Icon-reader.png" /><br />課程資料<br />
        <a
          href="https://drive.google.com/file/d/185eqo0fOgfltGYeQG5Iew-ZMe-kXX3bR/view"
          target="_blank"
          >水電工班教材與講義</a
        ><br />
        <a
          href="https://drive.google.com/file/d/1znFQu0l0T8scmq9VovLy0avgMtie4sTp/view"
          target="_blank"
          >性平教案</a
        ><br />
      </div>
      <div class="library_content">
        <img src="../../../assets/power/Icon-play.png" /><br />水電工班課程影音<br />
        <a href="https://youtu.be/RIx0v-4zurw" target="_blank"
          >水電基礎教學單元一</a
        ><br />
        <a href="https://youtu.be/-To1xsrveGs" target="_blank"
          >水電基礎教學單元二</a
        ><br />
        <a href="https://youtu.be/fcUdatln4-A" target="_blank"
          >水電基礎教學單元三</a
        ><br />
        <a href="https://youtu.be/z1yHurbIcnw" target="_blank"
          >水電基礎教學單元四</a
        ><br />
        <a href="https://youtu.be/L6uzVwbGbj4" target="_blank"
          >水電基礎教學單元五</a
        ><br />
        <a href="https://youtu.be/gK5zqzyBxFc" target="_blank"
          >水電基礎教學單元六</a
        ><br />
      </div>
    </div>
    影音專區
    <img class="sofa_img" src="../../../assets/power/sofa.png" />
    <div class="video_container">
      <div class="video_content">
        <div class="video_card">
          <img src="../../../assets/power/tag.png" />
          <div class="video_text">
            <h3>破除性別迷撕標籤系列</h3>
            <br />
            親子教育與養育是媽媽的責任?<br />
            男生就該玩車子、飛機?<br />
            讓我們一同破除性別迷思!
          </div>
        </div>
        <img src="../../../assets/power/playlink.png" target="_blank" /><a
          href="https://www.youtube.com/watch?v=BsHB4SWazuQ&list=PLLEHEXpDJL4aAQLsNE-Q4c97h8iiwDhh0&ab_channel=%E6%96%B0%E5%8C%97%E5%B8%82%E6%96%B0%E5%8C%97%E5%B8%82%E5%A9%A6%E5%A5%B3%E6%9C%8D%E5%8B%99%E4%B8%AD%E5%BF%83"
          >觀看系列影片</a
        >
      </div>

      <div class="video_content">
        <div class="video_card">
          <img src="../../../assets/power/mic.png" />
          <div class="video_text">
            <h3>新北女聲</h3>
            <br />
            通過受訪對談，深入探討性別議題與婦女計畫
          </div>
        </div>
        <img src="../../../assets/power/playlink.png" target="_blank" /><a
          href="https://www.youtube.com/watch?v=RrOMNk0EPXo&list=PLLEHEXpDJL4bpkHeOnsRO7wUIjcvY_ATo&ab_channel=%E6%96%B0%E5%8C%97%E5%B8%82%E6%96%B0%E5%8C%97%E5%B8%82%E5%A9%A6%E5%A5%B3%E6%9C%8D%E5%8B%99%E4%B8%AD%E5%BF%83"
          >觀看系列影片</a
        >
      </div>
      <div class="video_content">
        <div class="video_card">
          <img src="../../../assets/power/clander.png" />
          <div class="video_text">
            <h3>年度計畫紀錄影片</h3>
            <br />
            本中心積極推廣婦女支持團體服務，辦理相關研習、課程與工作坊
          </div>
        </div>
        <img src="../../../assets/power/playlink.png" target="_blank" /><a
          href="https://www.youtube.com/channel/UCMzQZyh84q_60M9Hu3YJAqg/videos"
          >觀看系列影片</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Videos from "../data/videos.json";

export default {
  data() {
    return {
      videos: Videos
    };
  }
};
</script>

<style scope>
.main_container {
  margin: 0 auto;
  width: 1200px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.power_img {
  display: block;
  margin: 0 auto;
  margin-top: 80px;
}

.library_container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 100px;
  padding-left: 100px;
  margin-bottom: 50px;
}

.library_content {
  font-size: 18px;
}

.library_content > a {
  text-decoration: none;
  font-weight: normal;
  color: #2d2d2d;
  line-height: 50px;
}

.sofa_img {
  display: block;
  margin: 0 auto;
}

.video_container {
  margin: 50px auto;
  width: 1200px;
  display: flex;
  justify-content: space-around;
}

.video_card {
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  width: 300px;
  box-shadow: 2px 2px 6px #a7a7a7;
}

.video_text {
  padding: 20px;
  height: 180px;
}

h3 {
  font-size: 18px;
}

.video_content > a {
  font-size: 18px;
  text-decoration: none;
  font-weight: normal;
  color: #2d2d2d;
  line-height: 40px;
  margin: 10px;
}

a:hover {
  color: #ff4b2d;
}
</style>
