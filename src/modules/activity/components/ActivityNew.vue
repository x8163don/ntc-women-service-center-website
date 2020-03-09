<template>
  <div class="flex pa3">
    <div
      class="w-third h6 mr3 ba grow pointer"
      v-for="activity in activities"
      :key="activity.id"
      @click="openActivity(activity)"
    >
      <div class="w-100 h-75 h6">
        <img class="w-100 h-100" :src="activity.imgUrl" />
      </div>

      <div class="h-25">
        <div class="gray f5 tc">
          {{ activity.startDate }}
        </div>
        <div class="f4 tc">【{{ activity.type }}】{{ activity.name }}</div>
      </div>
    </div>

    <Modal :show="isModalShow" @close="isModalShow = false">
      <div class="pa3" v-if="activityInfo">
        <img class="w-100 h-100" :src="activityInfo.imgUrl" />
      </div>
    </Modal>
  </div>
</template>

<script>
import Activities from "../data/activities.json";
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
        item => new Date(item.startDate).getYear() === new Date().getYear()
      ).sort(function(o) {
        return o.startDate * -1;
      })
    };
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
