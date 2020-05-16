<template>
  <div>
    <ExhibitionList :exhibitions="exhibitions" @select="toExhibition" />
  </div>
</template>

<script>
import ExhibitionList from "../components/ExhibitionList.vue";
import exhibitionsData from "../data/exhibitions.json";

export default {
  components: {
    ExhibitionList
  },
  data() {
    return {
      exhibitions: exhibitionsData,
      selectExhibition: exhibitionsData[0]
    };
  },
  methods: {
    toExhibition(id) {
      this.$router.push(`/exhibition/${id}`);
    }
  }
};
</script>

<style></style>
