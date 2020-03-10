<template>
  <div class="flex flex-wrap pa3">
    <div
      class="w-30 h6 mr3 mb3 ba grow pointer"
      v-for="activity in activities"
      :key="'Pass' + activity.id"
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
          【{{ getActivityTypeName(activity.type[0]) }}】{{ activity.name }}
        </div>
      </div>
    </div>

    <Modal :show="isModalShow" @close="isModalShow = false">
      <div class="pa3 h-100" v-if="activityInfo">
        <div v-if="activityInfo.imgUrl.length">
          <img
            v-for="url in activityInfo.imgUrl"
            :key="'Pass' + url"
            :src="url"
            class="w-100 h-100"
          />
        </div>
        <div v-else-if="activityInfo.pdfUrl" class="w-100">
          <iframe :src="activityInfo.pdfUrl" class="w-100 w-100"></iframe>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Activities from "../data/activities.json";
import ActivityType from "../data/activityType.json";
import Modal from "../../common/components/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      isModalShow: false,
      activityInfo: null,
      activities: Activities.filter(
        item => new Date(item.startDate).getYear() !== new Date().getYear()
      )
    };
  },
  methods: {
    getActivityTypeName(index) {
      return ActivityType[index];
    },
    openActivity(activity) {
      this.activityInfo = activity;
      this.isModalShow = true;
    }
  }
};
</script>

<style></style>
