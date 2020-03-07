<template>
  <div>
    <div
      v-for="activity in activities"
      :key="activity.startDate + activity.imgUrl"
      @click="openActivity(activity)"
    >
      <div>{{ activity.startDate }} - {{ activity.endDate }}</div>
      <img :src="activity.imgUrl" />
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
      )
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
