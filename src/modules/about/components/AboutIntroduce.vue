<template>
  <div>
    <img :src="introduceImg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduceImg:
        process.env.VUE_APP_IMG_HOST + process.env.VUE_APP_ABOUT_INTRODUCE
    }
  }
}
</script>

<style></style>
