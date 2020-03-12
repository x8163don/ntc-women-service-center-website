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

    <ActivityModal
      :show="isModalShow"
      :activity="activityInfo"
      @close="isModalShow = false"
    ></ActivityModal>
  </div>
</template>

<script>
import Activities from "../data/activities.json";
import ActivityType from "../data/activityType.json";
import ActivityModal from "./ActivityModal.vue";

export default {
  components: {
    ActivityModal
  },
  data() {
    return {
      isModalShow: false,
      activityInfo: null,
      activities: Activities.filter(item => item.type.some(type => type === 2))
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
