<template>
  <Modal :show="show" @close="$emit('close')">
    <div class="pa3 h-100" v-if="activity">
      <div v-if="activity.imgUrl.length">
        <img
          v-for="url in activity.imgUrl"
          :key="url"
          :src="url"
          class="w-100 h-100"
        />
      </div>
      <div v-if="activity.pdfUrl">
        <iframe
          name="iFrame"
          :src="activity.pdfUrl"
          width="100%"
          :height="height"
        ></iframe>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "../../common/components/Modal.vue";

export default {
  components: { Modal },
  mounted() {
    const iFrames = document.getElementsByName("iFrame");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    console.log(deviceHeight);
    for (let iframe in iFrames) {
      iframe.style.width = Number(deviceWidth) * 0.9 + "px";
      iframe.style.height = Number(deviceHeight) * 0.9 + "px";
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    activity: {
      type: Object,
      default: function() {
        return null;
      }
    }
  },
  data() {
    return {
      height: document.documentElement.clientHeight
    };
  }
};
</script>

<style></style>
