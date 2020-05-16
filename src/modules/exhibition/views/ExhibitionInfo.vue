<template>
  <v-container v-if="exhibition">
    <v-row>
      <ExhibitionInfoAlbum
        :current-page="currentPage"
        :pages="exhibition.pages"
        @select-page="selectPage"
      >
        >
      </ExhibitionInfoAlbum>
    </v-row>
    <v-row>
      <v-col lg="9">
        <div align="center">
          <v-icon large class="pointer" @click.stop="prev()"
            >mdi-arrow-left</v-icon
          >
          <v-icon large class="ml5 pointer" @click.stop="next()"
            >mdi-arrow-right</v-icon
          >
        </div>
      </v-col>
      <v-col lg="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExhibitionInfoAlbum from "../components/ExhibitionInfoAlbum";
import exhibitionsData from "../data/exhibitions.json";

export default {
  name: "ExhibitionInfo",
  components: { ExhibitionInfoAlbum },
  data() {
    return {
      currentPage: 0,
      exhibition: exhibitionsData.find(
        item => item.id === this.$route.params.id
      )
    };
  },
  mounted() {
    if (!this.exhibition) {
      this.$router.back();
    }
  },
  methods: {
    prev() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    next() {
      if (this.currentPage < this.exhibition.pages.length - 1) {
        this.currentPage++;
      }
    },
    selectPage(idx) {
      this.currentPage = idx;
    }
  }
};
</script>

<style scoped></style>
