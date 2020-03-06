<template>
  <div>
    <a class="ml4" :href="bookingFileUrl">
      預約表單下載
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookingFileUrl:
        "https://drive.google.com/uc?export=download&id=11n4nVga169oOk9GZRNQ5A8uYeIpNDTMc"
    };
  }
};
</script>

<style></style>
