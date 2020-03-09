<template>
  <div class="pa3">
    <div
      class="flex items-center w-100 h3 mb4 bb grow pointer"
      v-for="activity in activities"
      :key="activity.id"
      @click="openActivity(activity)"
    >
      <div class="w-20 f5 tc">
        {{ activity.startDate }}
      </div>
      <div class="w-80 f3">【{{ activity.type }}】{{ activity.name }}</div>
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
