<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        cols="3"
        v-for="activity in activities"
        :key="'Pass' + activity.ID"
        class="mb2 grow"
      >
        <v-card
          class="mx-auto"
          max-width="400"
          :href="`/activity/post/${activity.ID}`"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="activity.featured_image"
            contain
          >
          </v-img>
          <v-card-subtitle class="pb-0">{{ activity.title }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ activity.date | localDateTime }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment"

export default {
  props: {
    activities: {
      type: Array,
      default() {
        return []
      },
    },
  },
  filters: {
    localDateTime(isoDate) {
      return moment(isoDate).format("yyyy-MM-DD HH:mm:ss")
    },
  },
}
</script>
