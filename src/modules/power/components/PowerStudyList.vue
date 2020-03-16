<template>
  <div class="flex flex-wrap pa3">
    <div
      class="w-30 h6 mr3 mb3 ba grow pointer"
      v-for="activity in activities"
      :key="activity.id"
    >
      <a :href="activity.url">
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
      </a>
    </div>
  </div>
</template>

<script>
import Activities from "../data/activities.json";

export default {
  data() {
    return { activities: Activities };
  }
};
</script>
