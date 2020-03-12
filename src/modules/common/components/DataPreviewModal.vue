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
      <div class="center" v-if="activity.pdfUrl">
        <iframe
          name="iFrame"
          :src="activity.pdfUrl"
          :width="width"
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
      width: document.documentElement.clientWidth * 0.85,
      height: document.documentElement.clientHeight * 0.9
    };
  }
};
</script>

<style></style>
