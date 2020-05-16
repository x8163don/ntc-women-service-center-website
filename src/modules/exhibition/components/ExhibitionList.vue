<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        cols="4"
        v-for="exhibition in exhibitions"
        :key="exhibition.id"
        class="mb2 grow"
        @click="$emit('select', exhibition.id)"
      >
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="exhibition.pages[0].image"
            contain
          >
          </v-img>
          <v-card-subtitle class="pb-0">{{ exhibition.name }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    exhibitions: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
