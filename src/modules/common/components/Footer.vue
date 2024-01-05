<template>
  <footer>
    <div class="info">
      <p>新北市婦女服務中心</p>
      <br />
      地址<br />
      新北市板橋區區運路111號3樓<br />
      <br />
      服務時間<br />
      週一至週五08:30-17:30 (週六、週日暨國定假日休館)<br />
      <br />
      聯絡資訊<br />
      電話：02-8951-9029<br />
      傳真：02-8951-9239<br />
      電子信箱：ntwsc9029@gmail.com<br />
      <br />
      指導單位：新北市政府<br />
      主辦單位：新北市婦女服務中心(社團法人新北市湧泉社會服務協會承辦)<br />
    </div>
    <div class="webmap">
      <ul>
        <p>網站地圖</p>
        <br />
        <li><a href="/about/introduce">介紹與參訪預約</a></li>
        <li><a href="/about/booking">會議室租借</a></li>
        <li><a href="/about/traffic">交通資訊</a></li>
        <li><a href="/activity/exhibition">主題展覽</a></li>
        <li><a href="/activity">講座與課程</a></li>
        <li><a href="/gender">性別平等專區</a></li>
        <li><a href="/download">下載專區</a></li>
        <li><a href="/volunteer">志工服務</a></li>
      </ul>
      <div class="img_icon">
        <a href="https://www.facebook.com/NTWSC/posts/1387567328310264"
          ><img src="../../../assets/footer/icon_fb.png"
        /></a>
        <a
          href="https://www.youtube.com/channel/UCMzQZyh84q_60M9Hu3YJAqg/videos"
          ><img src="../../../assets/footer/icon_youtube.png"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scope>
footer {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex !important;
  position: relative;
}

.info {
  width: 50%;
  background-color: #FFEEED;
  padding: 40px;
  font-size: 14px;
}

.info > p,
.webmap > ul > p {
  font-weight: bold;
}

.webmap {
  width: 50%;
  background-color: #FFEEED;
  padding: 40px;
  font-size: 14px;
}

.webmap > ul {
  list-style: none;
}

.webmap > ul > li > a {
  text-decoration: none;
  color: #2d2d2d;
  line-height: 30px;
}

.img_icon {
  position: absolute;
  right: 40px;
  bottom: 40px;
}

.img_icon > a > img {
  width: 40px;
  height: 40px;
}

.img_icon > a {
  margin-right: 5px;
}
</style>
