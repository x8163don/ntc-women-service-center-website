<template>
  <div class="flex flex-wrap pa3">
    <div
      class="w-30 h6 mr3 mb3 ba grow pointer"
      v-for="activity in activities"
      :key="'Pass' + activity.id"
    >
      <a :href="activity.url">
        <div class="w-100 h6">
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
          <div class="pb2 f4 tc">
            【{{ getActivityTypeName(activity.type[0]) }}】{{ activity.name }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import ActivityType from "../data/activityType.json";

export default {
  props: {
    activities: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    getActivityTypeName(index) {
      return ActivityType[index];
    }
  }
};
</script>
