<template>
  <div class="main_container">
    <img class="map" src="../../../assets/about/traffic/map.png" />
    <div class="content_container">
      <h3>新北市板橋區區運路111號3樓</h3>
      <p>捷運板橋站(環狀線)4號出口➝步行10分鐘抵達中心</p>
      <p>
        捷運板橋站(板南線)2號出口➝轉乘公車於新北市政府(中山路)下車
        ➝步行5分鐘抵達中心
      </p>
      <br />
      <h3>新北市婦女服務中心入口處：</h3>
      <p>
        1.樓梯口：請沿著藍色箭頭方向（順著人行道，經過巴黎16區正門左側，前進至婦女服務中心入口處，沿樓梯口至三樓)。
      </p>
      <p>
        2.搭乘電梯：請沿著粉色箭頭，穿越深丘公園的人行道，至巴黎16區正門後，撥打電話(02-8951-9029)。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  font-size: 18px;
}

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

.map {
  object-fit: contain;
}

.content_container {
  margin: 50px 10px;
  line-height: 30px;
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
