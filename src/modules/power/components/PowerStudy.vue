<template>
  <div class="flex flex-wrap pa3">
    <div
      class="w-30 h6 mr3 mb3 ba grow pointer"
      v-for="activity in activities"
      :key="activity.id"
      @click="openActivity(activity)"
    >
      <div class="w-100 h-75 h6">
        <img
          v-if="activity.imgUrl[0]"
          :src="activity.imgUrl[0]"
          class="w-100 h-100"
        />
      </div>

      <div class="h-25">
        <div class="gray f5 tc">
          {{ activity.startDate }}
        </div>
        <div class="f4 tc">
          {{ activity.name }}
        </div>
      </div>
    </div>

    <DataPreviewModal
      :show="isModalShow"
      :activity="activityInfo"
      @close="isModalShow = false"
    ></DataPreviewModal>
  </div>
</template>

<script>
import Activities from "../data/activities.json";
import DataPreviewModal from "../../common/components/DataPreviewModal";

export default {
  components: { DataPreviewModal },
  data() {
    return { activities: Activities, isModalShow: false };
  },
  methods: {
    openActivity(activity) {
      this.activityInfo = activity;
      this.isModalShow = true;
    }
  }
};
</script>

<style></style>
