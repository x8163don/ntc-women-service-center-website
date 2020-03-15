<template>
  <div>
    <div v-for="fileInfo in files" :key="fileInfo.category" class="mb5">
      <h3 class="gray">{{ fileInfo.category }}</h3>
      <div v-for="file in fileInfo.files" :key="file.fileUrl" class="pl3">
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
