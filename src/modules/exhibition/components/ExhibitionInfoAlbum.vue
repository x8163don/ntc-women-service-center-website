<template>
  <v-container fluid>
    <v-row>
      <v-col height="100%" lg="9">
        <v-img aspect-ratio="1" contain :src="currentPageImage"></v-img>
      </v-col>

      <v-col lg="2" class="overflow-y-scroll" style="height: 33vw">
        <v-card
          :key="`page${idx}`"
          v-for="(page, idx) in pages"
          class="w-100 mb2 grow pointer"
          @click.stop="$emit('select-page', idx)"
        >
          <v-img :src="page.image" height="10vw" contain> </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ExhibitionInfoAlbum",
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    pages: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    currentPageImage() {
      return this.pages[this.currentPage].image
    },
  },
}
</script>

<style scoped></style>
