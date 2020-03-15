<template>
  <div>
    <div v-for="fileInfo in files" :key="fileInfo.category">
      <h3>{{ fileInfo.category }}</h3>
      <div v-for="file in fileInfo.files" :key="file.fileUrl">
        <a :href="file.fileurl">
          <p>{{ file.filename }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Files from "../data/files.json";

export default {
  data() {
    return {
      files: Files
    };
  }
};
</script>

<style></style>
