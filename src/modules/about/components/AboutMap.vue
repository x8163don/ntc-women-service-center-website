<template>
  <div>
    <img :src="mapImg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapImg: process.env.VUE_APP_IMG_HOST + process.env.VUE_APP_ABOUT_MAP
    }
  }
}
</script>

<style></style>
