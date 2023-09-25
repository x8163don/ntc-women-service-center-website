<template>
  <header>
    <div class="logo">
      <a href="/"><img src="../../../assets/header/logo.png"/></a>
    </div>
    <nav>
      <div class="navitem navitem-arrow">
        <a href="#">關於我們</a>
        <ul class="navitem_list bg-red">
          <li><a href="/about/introduce">介紹與參訪預約</a></li>
          <li><a href="/about/booking">會議室租借</a></li>
          <li><a href="/about/traffic">交通資訊</a></li>
        </ul>
      </div>

      <div class="navitem navitem-arrow">
        <a href="#">活動報報</a>
        <ul class="navitem_secondlist">
          <li><a href="/activity/exhibition">主題展覽</a></li>
          <li><a href="/activity">講座與課程</a></li>
          <li><a href="/trips">菁桐女路</a></li>
        </ul>
      </div>

      <a class="navitem" href="/gender">性別平等專區</a>
      <a class="navitem" href="/download">下載專區</a>
      <a class="navitem" href="/volunteer">志工服務</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { to: "/about", showText: "關於我們" },
        { to: "/news", showText: "最新消息" },
        { to: "/activity", showText: "活動報報" },
        { to: "/growing", showText: "成長小屋" },
        { to: "/power", showText: "女力加油站" },
        { to: "/videos", showText: "性平影音" },
        { to: "/angel", showText: "微光天使" },
        { to: "/exhibitions", showText: "線上展覽" }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  padding: 0;
}

header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.logo {
  align-self: flex-end;
}

nav {
  position: relative;
}

.navitem {
  display: inline-block;
  text-decoration: none;
  color: #2d2d2d;
  margin: 0 20px;
  font-size: 20px;
  line-height: 60px;
  font-weight: bold;
}

.navitem_list {
  display: none;
  list-style: none;
  position: absolute;
  z-index: 9999;
  background-color: white;
  left: 20px;
  font-size: 20px;
}

.navitem:hover > .navitem_secondlist {
  display: block;
}

.navitem_secondlist:hover {
  display: block;
}

.navitem:hover > .navitem_list {
  display: block;
}

.navitem_list:hover {
  display: block;
}

.navitem:first-child::before {
  content: "";
  margin: 0 8px;
  display: inline-block;
  border-top: 6px solid transparent;
  border-left: 6px solid #2d2d2d;
  border-bottom: 6px solid transparent;
  border-right: 6px solid transparent;
}

.navitem:hover::before {
  transform: rotate(90deg);
}

.navitem_secondlist {
  display: none;
  list-style: none;
  position: absolute;
  z-index: 9999;
  background-color: white;
  left: 170px;
}

.navitem > a,
.navitem a {
  font-size: 20px;
  text-decoration: none;
  color: #2d2d2d;
  font-weight: blod;
}

.navitem_list a,
.navitem_secondlist a {
  padding: 10px 20px;
}

.navitem-arrow::before {
  content: "";
  margin: 0 8px;
  display: inline-block;
  border-top: 6px solid transparent;
  border-left: 6px solid #2d2d2d;
  border-bottom: 6px solid transparent;
  border-right: 6px solid transparent;
}

.navitem-arrow:hover::before {
  transform: rotate(90deg);
}

.navitem:focus + .navitem_list {
  opacity: 1;
}

.navitem:focus + .navitem_secondlist {
  opacity: 1;
}

.navitem_list > li:hover,
.navitem_secondlist > li:hover {
  background-color: #ffeeed;
}
</style>
