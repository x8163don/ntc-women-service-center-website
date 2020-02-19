<template>
  <div>
    <!-- Logo -->
    <div class="w-100 h-10">
      <img src="../../../assets/logo.png" />
    </div>

    <!-- Menu -->
    <div class="nav">
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/news">最新消息</router-link> |
      <router-link to="/activity">活動報報</router-link> |
      <router-link to="/growing">成長小屋</router-link> |
      <router-link to="/power">女力加油站</router-link> |
      <router-link to="/info">資訊專區</router-link> |
      <router-link to="/other">微光天使</router-link> |
      <router-link to="/center">中心出版</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
