<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        cols="3"
        v-for="activity in activities"
        :key="'Pass' + activity.id"
        class="mb2 grow"
      >
        <v-card class="mx-auto" max-width="400" :href="activity.url">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="activity.imgUrl[0]"
            contain
          >
          </v-img>
          <v-card-subtitle class="pb-0">{{ activity.name }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ activity.startDate }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Activities from "../data/activities.json";

export default {
  data() {
    return { activities: Activities };
  },
};
</script>
